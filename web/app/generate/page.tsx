"use client";

import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  message,
  Radio,
  Row,
  Segmented,
  Select,
  Space,
  Spin,
  Tag,
  Typography,
  Upload,
} from "antd";
import {
  CodeOutlined,
  DownloadOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  ReloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type {
  ProductCategory,
  ProductJson,
  SectionId,
} from "@/types/product";
import { SAMPLE_PRODUCT } from "@/lib/pdp/sample";
import { SECTION_CATALOG } from "@/lib/pdp/sections";
import { defaultSectionsFor } from "@/lib/pdp/render";
import { validateProduct } from "@/lib/pdp/validate";

const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const VIEWPORTS = [
  { label: "Mobile 375", value: 375 },
  { label: "Tablet 768", value: 768 },
  { label: "Desktop 1280", value: 1280 },
  { label: "Wide 1440", value: 1440 },
];

export default function GeneratePage() {
  return (
    <Suspense fallback={<Spin />}>
      <GeneratePageInner />
    </Suspense>
  );
}

function GeneratePageInner() {
  const sp = useSearchParams();
  const [product, setProduct] = useState<ProductJson>(SAMPLE_PRODUCT);
  const [brief, setBrief] = useState("");
  const [sections, setSections] = useState<SectionId[]>(
    defaultSectionsFor(SAMPLE_PRODUCT.category)
  );
  const [viewport, setViewport] = useState<number>(375);
  const [isEnriching, setIsEnriching] = useState(false);
  const [previewMode, setPreviewMode] = useState<"frame" | "code">("frame");

  useEffect(() => {
    if (sp.get("sample") === "1") {
      setProduct(SAMPLE_PRODUCT);
      setSections(defaultSectionsFor(SAMPLE_PRODUCT.category));
    }
  }, [sp]);

  const issues = useMemo(() => validateProduct(product), [product]);
  const errorCount = issues.filter((i) => i.level === "error").length;

  const availableSections = useMemo(
    () =>
      SECTION_CATALOG.filter((s) =>
        s.defaultFor.includes(product.category)
      ),
    [product.category]
  );

  const [previewHtml, setPreviewHtml] = useState<string>("");

  // 미리보기 HTML 생성 (서버 라우트 호출)
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const res = await fetch("/api/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, sections, mode: "preview" }),
      });
      const data = (await res.json()) as { html: string };
      if (!cancelled) setPreviewHtml(data.html);
    })();
    return () => {
      cancelled = true;
    };
  }, [product, sections]);

  function onUploadJson(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as ProductJson;
        setProduct(parsed);
        setSections(defaultSectionsFor(parsed.category));
        message.success("product.json 불러왔습니다");
      } catch {
        message.error("JSON 파싱 실패. 형식을 확인해 주세요.");
      }
    };
    reader.readAsText(file);
    return false;
  }

  async function handleEnrich() {
    if (!brief.trim()) {
      message.warning("브리프를 입력하면 더 좋은 결과가 나옵니다");
    }
    setIsEnriching(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, brief }),
      });
      const data = (await res.json()) as
        | { product: ProductJson }
        | { error: string };
      if ("error" in data) {
        message.error(data.error);
        return;
      }
      setProduct(data.product);
      message.success("Gemini가 카피를 보강했습니다");
    } catch (e) {
      message.error(`보강 실패: ${String(e)}`);
    } finally {
      setIsEnriching(false);
    }
  }

  async function downloadHtml(mode: "preview" | "embed") {
    const res = await fetch("/api/render", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, sections, mode }),
    });
    const data = (await res.json()) as { html: string };
    const blob = new Blob([data.html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${product.sku}-pdp${mode === "embed" ? "-embed" : ""}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <Space>
          <Link href="/">
            <Text strong style={{ letterSpacing: "0.2em", color: "#0064b5" }}>
              ATOMY
            </Text>
          </Link>
          <Text type="secondary">| PDP Generator</Text>
          <Tag color="blue">{product.sku}</Tag>
        </Space>
        <Space>
          <Button
            icon={<DownloadOutlined />}
            onClick={() => downloadHtml("preview")}
          >
            HTML
          </Button>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => downloadHtml("embed")}
          >
            CMS 삽입용 Fragment
          </Button>
        </Space>
      </Header>

      <Layout>
        <Sider
          width={420}
          style={{
            background: "#fff",
            borderRight: "1px solid #eee",
            padding: 16,
            overflowY: "auto",
            height: "calc(100vh - 64px)",
          }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Card size="small" title="1. 상품 데이터">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Upload
                  accept=".json,application/json"
                  beforeUpload={onUploadJson}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>
                    product.json 업로드
                  </Button>
                </Upload>
                <Button
                  type="link"
                  size="small"
                  icon={<ReloadOutlined />}
                  onClick={() => {
                    setProduct(SAMPLE_PRODUCT);
                    setSections(defaultSectionsFor(SAMPLE_PRODUCT.category));
                  }}
                >
                  샘플 데이터로 초기화
                </Button>
                <Form layout="vertical" size="small">
                  <Form.Item label="카테고리">
                    <Select
                      value={product.category}
                      onChange={(v: ProductCategory) => {
                        setProduct({ ...product, category: v });
                        setSections(defaultSectionsFor(v));
                      }}
                      options={[
                        { label: "건강기능식품", value: "health-supplement" },
                        { label: "뷰티 / 화장품", value: "beauty" },
                        { label: "식품", value: "food" },
                        { label: "리빙 / 가전", value: "living" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="제품명 (국문)">
                    <Input
                      value={product.names.ko}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          names: { ...product.names, ko: e.target.value },
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="제품명 (영문)">
                    <Input
                      value={product.names.en ?? ""}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          names: { ...product.names, en: e.target.value },
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="태그라인">
                    <Input
                      value={product.tagline ?? ""}
                      onChange={(e) =>
                        setProduct({ ...product, tagline: e.target.value })
                      }
                    />
                  </Form.Item>
                </Form>
              </Space>
            </Card>

            <Card
              size="small"
              title={
                <Space>
                  <ExperimentOutlined /> 2. AI 카피 보강 (Gemini)
                </Space>
              }
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Paragraph type="secondary" style={{ fontSize: 12, margin: 0 }}>
                  브리프를 입력하면 셀링포인트 / POINT 블록 / 타겟 / Q&amp;A 를
                  보강합니다. 효능·성분·가격 등 사실 정보는 product.json 값만
                  사용합니다.
                </Paragraph>
                <TextArea
                  rows={5}
                  placeholder="예) 이 제품의 가장 큰 차별점은 7종 복합 균주. 타겟은 30~50대 직장인. 톤은 신뢰감 있고 담백하게."
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                />
                <Button
                  type="primary"
                  icon={<ExperimentOutlined />}
                  loading={isEnriching}
                  onClick={handleEnrich}
                  block
                >
                  Gemini로 카피 보강
                </Button>
              </Space>
            </Card>

            <Card size="small" title="3. 섹션 선택 / 순서">
              <Checkbox.Group
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
                value={sections}
                onChange={(v) => setSections(v as SectionId[])}
              >
                {availableSections.map((s) => (
                  <Checkbox key={s.id} value={s.id}>
                    <Text>{s.label}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 11 }}>
                      {s.description}
                    </Text>
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Card>

            <Card
              size="small"
              title={
                <Space>
                  <FileTextOutlined /> 4. 의무표시 검증
                </Space>
              }
            >
              {issues.length === 0 ? (
                <Alert
                  type="success"
                  message="필수 필드가 모두 채워졌습니다"
                  showIcon
                />
              ) : (
                <Space direction="vertical" style={{ width: "100%" }}>
                  {issues.map((i, idx) => (
                    <Alert
                      key={idx}
                      type={i.level === "error" ? "error" : "warning"}
                      message={i.message}
                      showIcon
                    />
                  ))}
                </Space>
              )}
              {errorCount > 0 ? (
                <Paragraph
                  type="warning"
                  style={{ marginTop: 8, fontSize: 12 }}
                >
                  ⚠ {errorCount}건의 필수 누락이 있어 산출 시 차단될 수 있습니다.
                </Paragraph>
              ) : null}
            </Card>
          </Space>
        </Sider>

        <Content style={{ padding: 16, height: "calc(100vh - 64px)", overflow: "hidden" }}>
          <Row gutter={16} align="middle" style={{ marginBottom: 12 }}>
            <Col flex="auto">
              <Segmented
                value={viewport}
                onChange={(v) => setViewport(Number(v))}
                options={VIEWPORTS.map((v) => ({
                  label: v.label,
                  value: v.value,
                }))}
              />
            </Col>
            <Col>
              <Radio.Group
                value={previewMode}
                onChange={(e) => setPreviewMode(e.target.value)}
                size="small"
              >
                <Radio.Button value="frame">미리보기</Radio.Button>
                <Radio.Button value="code">
                  <CodeOutlined /> HTML
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>

          <Card
            bodyStyle={{
              padding: 0,
              height: "calc(100vh - 64px - 32px - 56px)",
              overflow: "hidden",
              background: "#e8e8e8",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {previewMode === "frame" ? (
              <div
                style={{
                  width: viewport,
                  maxWidth: "100%",
                  height: "100%",
                  background: "#fff",
                  boxShadow: "0 0 12px rgba(0,0,0,0.06)",
                }}
              >
                {previewHtml ? (
                  <iframe
                    title="pdp-preview"
                    srcDoc={previewHtml}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                  />
                ) : (
                  <div style={{ padding: 40, textAlign: "center" }}>
                    <Spin />
                  </div>
                )}
              </div>
            ) : (
              <pre
                style={{
                  background: "#1e1e1e",
                  color: "#d4d4d4",
                  padding: 16,
                  overflow: "auto",
                  width: "100%",
                  margin: 0,
                  fontSize: 12,
                  lineHeight: 1.6,
                }}
              >
                {previewHtml}
              </pre>
            )}
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
