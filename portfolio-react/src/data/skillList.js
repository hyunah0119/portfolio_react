import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTanstack } from "react-icons/si";
import { PiTreeStructure } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";

export const skillLists = [
  {
    id: 1,
    type: 'frontend',
    title: 'React',
    info: [
      '컴포넌트 기반 UI 구현',
      'React Router를 활용한 화면 구성',
      'Custom Hook을 통한 로직 분리',
      '재사용 가능한 컴포넌트 설계',
    ],
    icon: {
      name: FaReact,
      color: '#61DAFB',
    }
  },
  {
    id: 2,
    type: 'frontend',
    title: 'React Router',
    info: [
      'Layout 기반 공통 레이아웃 구성',
      '페이지 라우팅 및 화면 전환',
      'NavLink 기반 활성 메뉴 처리',
      '조건부 라우팅을 통한 접근 제어',
    ],
    icon: {
      name: SiReactrouter,
      color: '#FF4500',
    }
  },
  {
    id: 3,
    type: 'frontend',
    title: 'TypeScript',
    info: [
      'Props 및 API 응답 타입 정의',
      '공통 타입 설계 및 관리',
      '타입 기반 안정성 확보',
      '타입 추론을 활용한 코드 작성',
    ],
    icon: {
      name: SiTypescript,
      color: '#3178C6',
    }
  },
  {
    id: 4,
    type: 'frontend',
    title: 'JavaScript',
    info: [
      'DOM 제어',
      '이벤트 및 인터랙션 구현',
      'Fetch API 기반 데이터 연동',
      '상태값에 따른 동적 UI 처리',
    ],
    icon: {
      name: IoLogoJavascript,
      color: '#F7DF1E',
    }
  },
  {
    id: 5,
    type: 'frontend',
    title: 'TanStack Query',
    info: [
      '서버 상태 조회 및 캐시 관리',
      '데이터 재조회 및 캐시 무효화',
      '로딩 · 에러 상태 처리',
      'Mutation을 활용한 CRUD 데이터 동기화',
    ],
    icon: {
      name: SiTanstack,
      color: '#FF4500',
    }
  },
  {
    id: 6,
    type: 'frontend',
    title: 'Zustand',
    info: [
      '사용자 정보 및 UI 상태 관리',
      '선택 날짜 · 다크모드 등 전역 상태 관리',
      '불필요한 Props 전달 없이 상태 공유',
      '클라이언트 상태를 역할에 맞게 분리',
    ],
    icon: {
      name: PiTreeStructure,
      color: '#FF4500'
    }
  },
  {
    id: 7,
    type: 'markup',
    title: 'HTML / CSS / SCSS',
    info: [
      '시맨틱 마크업',
      '반응형·적응형 UI',
      '크로스 브라우징',
      '공통 스타일 관리 및 유지보수',
    ],
    icon: {
      name: FaHtml5,
      color: '#E34F26',
    }
  },
  {
    id: 8,
    type: 'markup',
    title: 'Tailwind CSS',
    info: [
      '유틸리티 클래스 기반 스타일링',
      '반응형 UI 구현',
      '컴포넌트 단위 스타일 관리',
    ],
    icon: {
      name: RiTailwindCssFill,
      color: '#38BDF8',
    }
  },
  {
    id: 9,
    type: 'devOps',
    title: 'Supabase',
    info: [
      'CRUD 구현',
      '데이터베이스 연동',
      '사용자별 데이터 관리',
    ],
    icon: {
      name: FaDatabase,
      color: '#3FCF8E',
    }
  },
  {
    id: 10,
    type: 'devOps',
    title: 'Azure DevOps / Git',
    info: [
      'Git 기반 형상 관리',
      'Azure DevOps 브랜치 협업',
      'CI/CD 자동 배포',
      'Vercel 배포',
    ],
    icon: {
      name: VscAzure,
      color: '#006dc1',
    }
  },
  {
    id: 11,
    type: 'tools',
    title: 'UI Libraries',
    info: [
      'Drag & Drop',
      'Swiper',
      'Date Picker',
      'Chart',
    ],
    icon: {
      name: PiBooksFill,
      color: '#FFD1CD',
    }
  },
  {
    id: 12,
    type: 'tools',
    title: 'Figma / Design Tools',
    info: [
      '디자인 시안 확인 및 디자이너·기획자 협업',
    ],
    icon: {
      name: FaFigma,
      color: '#F24E1E',
    }
  },
]

export const skillType = [
  {
      id : 'all',
      name : '전체'
  },
  {
      id : 'frontend',
      name : '프론트엔드'
  },
  {
      id : 'markup',
      name : '마크업&스타일링'
  },
  {
      id : 'devOps',
      name : '협업&배포'
  },
  {
      id : 'tools',
      name : '개발 도구'
  }
]