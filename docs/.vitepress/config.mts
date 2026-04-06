import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vibe-coding-workshop/',
  title: '바이브 코딩 워크숍',
  description: '프롬프트 엔지니어링에서 하네스 엔지니어링까지 — AI 코딩의 진화를 이해하고 실습하는 워크숍',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '커리큘럼', link: '/part1-opening/' },
    ],

    sidebar: [
      {
        text: 'Part 1. 오프닝',
        collapsed: false,
        items: [
          { text: '바이브 코딩이란?', link: '/part1-opening/' },
          { text: '비개발자를 위한 맥락', link: '/part1-opening/for-non-developers' },
          { text: '왜 지금인가?', link: '/part1-opening/why-now' },
        ],
      },
      {
        text: 'Part 2. 바이브 코딩의 진화',
        collapsed: false,
        items: [
          { text: '3세대 이야기', link: '/part2-evolution/' },
          { text: '1세대: 프롬프트 엔지니어링', link: '/part2-evolution/prompt-engineering' },
          { text: '2세대: 컨텍스트 엔지니어링', link: '/part2-evolution/context-engineering' },
          { text: '3세대: 하네스 엔지니어링', link: '/part2-evolution/harness-engineering' },
        ],
      },
      {
        text: 'Part 3. 하네스 엔지니어링 Deep Dive',
        collapsed: false,
        items: [
          { text: '의의', link: '/part3-harness/' },
          { text: '이점', link: '/part3-harness/benefits' },
          { text: '세팅 방법', link: '/part3-harness/setup' },
        ],
      },
      {
        text: 'Part 4. 멀티 에이전트 하네스',
        collapsed: false,
        items: [
          { text: '소개', link: '/part4-oh-my-agent/' },
          { text: '설치 및 세팅', link: '/part4-oh-my-agent/installation' },
          { text: '에이전트 팀 구성', link: '/part4-oh-my-agent/agent-team' },
        ],
      },
      {
        text: 'Part 5. 실습',
        collapsed: false,
        items: [
          { text: '실습 개요', link: '/part5-workshop/' },
          { text: '/brainstorm — 아이디어 발산', link: '/part5-workshop/brainstorm' },
          { text: '/plan — 작업 계획', link: '/part5-workshop/plan' },
          { text: '/design — UI 시안 생성', link: '/part5-workshop/design' },
          { text: '/orchestrate — 자동 실행', link: '/part5-workshop/orchestrate' },
          { text: '/review — 품질 검증', link: '/part5-workshop/review' },
          { text: '/commit — 깔끔한 커밋', link: '/part5-workshop/commit' },
        ],
      },
      {
        text: 'Part 6. 클로징',
        collapsed: false,
        items: [
          { text: '정리 및 Q&A', link: '/part6-closing/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/first-fluke/oh-my-agent' },
    ],

    outline: {
      label: '목차',
    },

    docFooter: {
      prev: '이전',
      next: '다음',
    },
  },
})
