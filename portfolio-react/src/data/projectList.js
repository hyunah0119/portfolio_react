import todo01 from "../assets/img/project/todo01.png";
import todo02 from "../assets/img/project/todo02.png";
import todo03 from "../assets/img/project/todo03.png";
import todo04 from "../assets/img/project/todo04.png";
import todo05 from "../assets/img/project/todo05.png";
import todo06 from "../assets/img/project/todo06.png";
import todo07 from "../assets/img/project/todo07.png";
import todo08 from "../assets/img/project/todo08.png";

export const projectLists = [
  {
    id: 1,
    title: 'Todo & Mood Tracker',
    images: [
      {
        src: todo01,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo02,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo03,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo04,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo05,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo06,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo07,
        alt: 'Todo & Mood Tracker',
      },
      {
        src: todo08,
        alt: 'Todo & Mood Tracker',
      },
    ],
    projectOverview: `오늘의 할 일과 감정을 함께 기록하는 데일리 투두 & 무드 트래커입니다.\n기존에 제작했던 Todo 앱에 Mood Tracker 기능을 추가하고, TanStack Query와 Zustand를 도입해\n서버 상태와 UI 상태를 역할에 맞게 분리했습니다.\n이를 바탕으로 유지보수성과 확장성을 고려한 구조로 리뉴얼했습니다.`,
    keyFeatures: [
      'Todo CRUD 및 완료/미완료 관리',
      'Drag & Drop 기반 순서 변경 및 자동 정렬',
      '날짜별 Mood 선택 및 메모 작성',
      '달력 기반 감정 기록 조회',
      '다크모드 지원',
      '로딩 / 에러 / Empty UI 처리',
    ],
    architecture: [
      'TanStack Query를 활용하여 서버 상태 관리 및 캐시 처리',
      'Zustand를 활용하여 사용자 정보, 선택 날짜, 다크모드 등 UI 상태 관리',
      'TypeScript 기반 타입 설계 및 공통 타입 관리',
      'Custom Hook으로 데이터 요청과 비즈니스 로직 분리',
      '기능 단위 컴포넌트 구조를 적용하여 유지보수성 향상',
    ],
    problemSolving: [
      {
        title: '01. 서버 상태와 UI 상태 분리',
        description: 'TanStack Query와 Zustand의 역할을 구분하여 데이터 요청과 UI 상태를 명확히 분리했습니다.\n이를 통해 캐시 관리와 전역 UI 상태를 각각 책임에 맞게 관리할 수 있도록 설계했습니다.',
      },
      {
        title: '02. 날짜 중심 데이터 구조',
        description: 'Todo와 Mood를 모두 날짜 기반으로 조회하도록 설계하여\n하나의 날짜에서 할 일과 감정을 함께 관리할 수 있도록 구현했습니다.',
      },
      {
        title: '03. Drag & Drop',
        description: 'dnd-kit을 활용하여 순서를 변경하고 order_index를 DB에 저장하여\n새로고침 이후에도 동일한 순서를 유지하도록 구현했습니다.',
      },
    ],
    refactoring: [
      '기존 Todo 프로젝트를 기능 확장과 구조 개선 중심으로 리뉴얼',
      'Todo 기능에서 Mood Tracker 기능 추가',
      'Local State → TanStack Query + Zustand 적용',
      '단일 구조 → Component & Custom Hook 분리',
      'CRUD 중심 → 로딩/에러/Empty UI 추가',
    ],
    technologies: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Supabase', 'Tailwind CSS'],
    links: {
      live: 'https://todo-mood-app.vercel.app/',
      github: 'https://github.com/hyunah0119/todo-mood-app/tree/main/todo-mood-app',
    }
  }
]