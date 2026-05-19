"use client";

import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  ArrowRightOutlined,
  CheckCircleTwoTone,
  ExperimentOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function LandingPage() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <Space>
          <Text strong style={{ letterSpacing: "0.2em", color: "#0064b5" }}>
            ATOMY
          </Text>
          <Text type="secondary">| PDP Generator</Text>
        </Space>
        <Space>
          <Link href="/generate">
            <Button type="primary">
              제너레이터 열기 <ArrowRightOutlined />
            </Button>
          </Link>
        </Space>
      </Header>

      <Content style={{ padding: "48px 32px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Tag color="blue">v0.1 (Draft)</Tag>
            <Title style={{ marginTop: 16 }}>
              Atomy 스타일 PDP를
              <br />
              <span style={{ color: "#0064b5" }}>1일 이내</span>로 만듭니다.
            </Title>
            <Paragraph style={{ fontSize: 18, color: "#555" }}>
              상품 정보(JSON)와 자연어 브리프를 입력하면, 사전 정의된 섹션
              라이브러리를 조합해 플루이드 타이포그래피 기반 단일 HTML PDP를
              산출합니다. kr.atomy.com 상세 페이지에 그대로 삽입 가능하도록 CSS
              스코프를 보장합니다.
            </Paragraph>
            <Space size="middle" style={{ marginTop: 16 }}>
              <Link href="/generate">
                <Button type="primary" size="large">
                  지금 시작하기
                </Button>
              </Link>
              <Link href="/generate?sample=1">
                <Button size="large">샘플로 미리보기</Button>
              </Link>
            </Space>
          </Col>
          <Col xs={24} md={10}>
            <Card>
              <Space direction="vertical" size="middle">
                <Space>
                  <CheckCircleTwoTone twoToneColor="#0064b5" />
                  <Text>375px ~ 1920px 끊김 없는 fluid 반응형</Text>
                </Space>
                <Space>
                  <CheckCircleTwoTone twoToneColor="#0064b5" />
                  <Text>식약처·공정위 의무표시 자동 검증</Text>
                </Space>
                <Space>
                  <CheckCircleTwoTone twoToneColor="#0064b5" />
                  <Text>kr.atomy.com 삽입 안전 (CSS 스코프 + 토큰 reset)</Text>
                </Space>
                <Space>
                  <CheckCircleTwoTone twoToneColor="#0064b5" />
                  <Text>Gemini 기반 카피 보강 (효능 주장 추측 금지)</Text>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
          <Col xs={24} md={8}>
            <Card title={<Space><ExperimentOutlined /> 섹션 라이브러리</Space>}>
              <Paragraph type="secondary">
                Hero / 셀링포인트 그리드 / POINT 블록 / 타겟 페르소나 / 사용법 /
                Q&amp;A / 의무표시 / 영양정보 / 출처 / Quality Seal
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title={<Space><ThunderboltOutlined /> Fluid 토큰</Space>}>
              <Paragraph type="secondary">
                utopia.fyi 기반 9단 type / 8단 space scale. 모든 사이즈가
                <code> clamp() </code>로 정의되어 breakpoint 의존 없음.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="CSS 스코프 전략">
              <Paragraph type="secondary">
                모든 클래스 <code>apdp-</code> prefix, 모든 규칙은{" "}
                <code>.atomy-pdp</code> 루트로 specificity 우위. 부모(CMS) 스타일
                상속을 reset.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: "center", color: "#888" }}>
        Atomy PDP Generator · Internal Tool · v0.1
      </Footer>
    </Layout>
  );
}
