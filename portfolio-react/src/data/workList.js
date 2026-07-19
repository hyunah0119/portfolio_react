import work01 from '../assets/img/work/work01.png';
import work01_1 from '../assets/img/work/work01-1.png';
import work01_2 from '../assets/img/work/work01-2.png';
import work01_3 from '../assets/img/work/work01-3.png';
import work01_4 from '../assets/img/work/work01-4.png';
import work01_5 from '../assets/img/work/work01-5.png';

import work02 from '../assets/img/work/work02.png';
import work02_1 from '../assets/img/work/work02-1.png';
import work02_2 from '../assets/img/work/work02-2.png';
import work02_3 from '../assets/img/work/work02-3.png';
import work02_4 from '../assets/img/work/work02-4.png';

import work03_1 from '../assets/img/work/work03-1.png';
import work03_2 from '../assets/img/work/work03-2.png';
import work03_3 from '../assets/img/work/work03-3.png';
import work03_4 from '../assets/img/work/work03-4.png';

import work04_1 from '../assets/img/work/work04-1.png';
import work04_2 from '../assets/img/work/work04-2.png';
import work04_3 from '../assets/img/work/work04-3.png';
import work04_4 from '../assets/img/work/work04-4.png';

import work05_1 from '../assets/img/work/work05-1.png';
import work05_2 from '../assets/img/work/work05-2.png';
import work05_3 from '../assets/img/work/work05-3.png';

import work06_1 from '../assets/img/work/work06-1.png';
import work06_2 from '../assets/img/work/work06-2.png';

import work07_1 from '../assets/img/work/work07-1.png';
import work07_2 from '../assets/img/work/work07-2.png';
import work07_3 from '../assets/img/work/work07-3.png';
import work07_4 from '../assets/img/work/work07-4.png';

export const workExperienceList = [
  {
    id: 1,
    title: 'DL그룹 아파트 분양 웹사이트 운영',
    description: 'e편한세상, ACRO 브랜드 사이트를 운영',
    date: '2020.07 ~ 2026.01',
    thumbs: [
      {
        src: work01,
        alt: 'e편한세상 분양페이지',
      },
      {
        src: work01_3,
        alt: 'e편한세상 분양페이지',
      },
      {
        src: work01_4,
        alt: 'e편한세상 분양페이지',
      },
      {
        src: work01_5,
        alt: 'e편한세상 분양페이지',
      },
      {
        src: work01_1,
        alt: 'ACRO 메인페이지',
      },
      {
        src: work01_2,
        alt: 'ACRO 분양페이지',
      },
    ],
    summary: 'DL이앤씨 e편한세상, DL건설 e편한세상, ACRO 브랜드 사이트를 운영하며 신규 페이지 구축과 UI 개발, 유지보수를 담당했습니다.',
    responsibilities: [
      'JSP 기반 웹사이트 2개와 React + TypeScript 기반 웹사이트 1개의 UI 개발 및 운영',
      '아파트 단지별 랜딩 및 홍보 페이지 구축',
      '브랜드 가이드를 유지하며 신규 페이지 개발 및 기존 페이지 유지보수',
      'Azure DevOps 기반 협업 및 CI/CD 배포'
    ],
    contributions: [
      '기존 템플릿과 프로젝트 구조를 분석하여 신규 페이지를 확장 구현',
      '브랜드 가이드를 유지하면서 단지별 특성에 맞는 UI를 구현',
      'Fullpage 라이브러리를 도입하여 클라이언트 요구사항을 반영한 인터랙션 개발',
      '공통 Include(JSP) 및 공통 CSS·JavaScript를 적용하여 재사용성과 유지보수성을 향상',
      '<strong>React Router</strong>를 활용해 신규 페이지를 추가하고 기존 구조를 유지하며 기능 확장',
      '<strong>TypeScript</strong> 기반 API 타입 정의 및 <strong>fetch</strong>를 활용한 데이터 연동 구현',
      '페이지 로딩 속도를 모니터링하고 프론트엔드에서 개선 가능한 영역을 분석 및 수정',
      'Azure DevOps를 활용한 코드 관리 및 CI/CD 배포 참여',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'JSP','SCSS', 'Azure DevOps'],
    links: [
      {
        label: 'DL이앤씨 e편한세상',
        url: 'https://www.elife.co.kr/Mnmn_main.action'
      },
      {
        label: 'DL건설 e편한세상',
        url: 'https://www.dlcon-apt.co.kr/'
      },
      {
        label: 'ACRO',
        url: 'https://www.acro.co.kr/Mnmn_main.action'
      }
    ],
  },
  {
    id: 2,
    title: 'DL그룹 기업 홈페이지 통합 운영',
    description: 'DL그룹 계열사 10개 기업 홈페이지 운영',
    date: '2020.07 ~ 2026.01',
    thumbs: [
      {
        src: work02,
        alt: 'DL홀딩스 홈페이지',
      },
      {
        src: work02_1,
        alt: 'DL케미칼 홈페이지',
      },
      {
        src: work02_2,
        alt: 'DL케미칼 홈페이지',
      },
      {
        src: work02_3,
        alt: 'DL에너지 홈페이지',
      },
      {
        src: work02_4,
        alt: 'Cariflex 홈페이지',
      },
    ],
    summary: 'DL그룹 계열사 10개 기업 홈페이지를 운영하며 각 사이트의 개발 환경에 맞춰 UI 개발과 유지보수를 수행했습니다.',
    responsibilities: [
      'JSP 및 ASP 기반 기업 홈페이지 UI 개발 및 운영·유지보수',
      '기업별 디자인 가이드를 반영한 신규 페이지 구축',
      '적응형·반응형 UI 구현 및 크로스브라우징 대응',
      '운영 이슈 모니터링 및 오류 분석·수정',
    ],
    contributions: [
      '<strong>사이트별 개발 환경을 빠르게 분석</strong>하여 유지보수 및 신규 기능 개발 수행',
      '공통 Include 구조를 활용해 공통 UI를 관리하고 유지보수성을 개선',
      '반복되는 마크업을 템플릿화하여 작업 속도와 일관성 개선',
      'Properties 기반 다국어 처리 시스템 운영 및 언어별 화면 관리',
      '기업별 브랜드 톤앤매너를 유지하며 신규 페이지 설계 및 구현',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'JSP','ASP'],
    links: [
      {
        label: 'DL홀딩스',
        url: 'https://www.dlholdings.co.kr/ko/index.do'
      },
      {
        label: '(주)대림',
        url: 'https://www.daelim.co.kr/ko/pc/index.do'
      },
      {
        label: 'DL케미칼',
        url: 'https://www.dlchemical.co.kr/'
      },
      {
        label: 'DL건설',
        url: 'https://www.dlconstruction.co.kr/zMain/main.asp'
      },
      {
        label: 'DL에너지',
        url: 'https://www.dlenergy.co.kr/main.do'
      },
      {
        label: 'DL FnC',
        url: 'https://www.dlfnc.co.kr/main.do'
      },
      {
        label: 'DL모터스',
        url: 'https://www.dlmotors.co.kr/kor/automobile/main.do'
      },
      {
        label: '대림투자운용용',
        url: 'https://www.daeliminvest.co.kr/main.do'
      },
      {
        label: 'Cariflex',
        url: 'https://www.cariflex.com/en/main.do'
      },
      {
        label: 'DREX 폴리머',
        url: 'https://www.drexpolymer.com/'
      }
    ],
  },
  {
    id: 3,
    title: '새만금 완산터널 스마트 관제시스템 구축',
    description: '실시간으로 모니터링할 수 있는 스마트 관제 대시보드 시스템 구축',
    date: '2020',
    thumbs: [
      {
        src: work05_1,
        alt: '새만금 완산터널 스마트 관제시스템',
      },
      {
        src: work05_2,
        alt: '새만금 완산터널 스마트 관제시스템',
      },
      {
        src: work05_3,
        alt: '새만금 완산터널 스마트 관제시스템',
      },
    ],
    summary: '공사 현장의 공정 진행률, CCTV 영상, 작업 환경 수치, 현장 인원 현황을\n실시간으로 모니터링할 수 있는 스마트 관제 대시보드 시스템을 구축했습니다.',
    responsibilities: [
      'HTML/CSS 기반 대시보드 화면 UI 구현',
      'JavaScript를 활용한 데이터 기반 동적 UI 개발',
      'CCTV 영역 및 모달 인터랙션 구현',
      '공정 진행률, 환경 수치, 현장 인원 현황 화면 개발',
    ],
    contributions: [
      '디자인 시안을 기반으로 스마트 관제 대시보드 전체 화면 구현',
      '공정 진행률 데이터에 따라 진행 바와 상태 색상이 변경되는 동적 UI 구현',
      '산소, 유해가스 등 환경 측정 수치에 따라 정상·주의·경고 상태를 시각적으로 구분하는 UI 로직 구현',
      'JavaScript를 활용해 데이터 상태에 따른 화면 분기 및 UI 업데이트 처리',
      'CCTV 모달과 현장 인원 현황 화면을 구현하여 실시간 모니터링 환경 제공',
      '다양한 데이터 상태를 고려한 UI 분기 구조를 적용해 사용자 가독성과 상황 인지성을 향상',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Chart.js'],
    links: []
  },
  {
    id: 4,
    title: 'Cariflex 관리자 페이지 구축',
    description: '계정·권한·로그·게시글 관리를 위한 관리자 전용 웹 인터페이스 신규 구축',
    date: '2020',
    thumbs: [
      {
        src: work04_1,
        alt: 'Cariflex 관리자 페이지',
      },
      {
        src: work04_2,
        alt: 'Cariflex 관리자 페이지',
      },
      {
        src: work04_3,
        alt: 'Cariflex 관리자 페이지',
      },
      {
        src: work04_4,
        alt: 'Cariflex 관리자 페이지',
      },
    ],
    summary: '내부 운영 담당자가 계정, 권한, 로그, 게시글 등을 효율적으로 관리할 수 있도록 관리자 전용 웹 인터페이스를 신규 구축했습니다.',
    responsibilities: [
      '관리자 페이지 프론트엔드 화면 구현을 전담',
      '로그인, 계정·권한 관리, 접속·권한 로그 등 운영 기능 화면 개발',
      '게시글 등록·수정·삭제·목록에 필요한 CRUD 화면 구현',
      'JavaScript 기반 폼 처리 및 사용자 인터랙션 구현',
      '날짜 선택 및 조건별 조회를 위한 Date 라이브러리 적용',
    ],
    contributions: [
      '여러 관리 기능을 목적별 메뉴와 화면으로 구조화하여 운영자가 필요한 정보에 빠르게 접근할 수 있도록 구성',
      '계정, 권한, 로그 등 데이터 유형에 맞춰 목록·상세·등록 폼 UI를 일관된 형태로 구현',
      '입력값 검증과 폼 상태 처리를 적용하여 관리자 입력 과정의 오류를 줄일 수 있도록 설계',
      '날짜 선택과 필터 기능을 적용해 로그 및 게시글 조회 편의성 향상',
      '운영 담당자의 피드백을 반영해 화면 흐름과 사용성을 지속적으로 개선',
      '공통 UI 패턴을 재사용할 수 있도록 구성해 유사 관리 화면의 구현 및 유지보수 효율 향상',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Datepicker'],
    links: []
  },
  {
    id: 5,
    title: 'M-Plan 대시보드 구축',
    description: '공사 현장 정보를 한 화면에서 확인할 수 있는 내부 관리자 대시보드 시스템 구축',
    date: '2021',
    thumbs: [
      {
        src: work06_1,
        alt: 'M-Plan 대시보드',
      },
      {
        src: work06_2,
        alt: 'M-Plan 대시보드',
      },
    ],
    summary: 'DL이앤씨의 공사 현장별 공정 현황, 인원, 날씨, 진척도 등의 정보를\n한 화면에서 확인할 수 있는 내부 관리자 대시보드 시스템을 구축했습니다.',
    responsibilities: [
      '디자인 시안을 기반으로 관리자 대시보드 UI 구현',
      '현장별 공정 진척도와 상태 정보 화면 구성',
      '다량의 현황 데이터를 표시하는 테이블 UI 구현',
      '날짜 및 현장 선택에 따른 화면 분기 처리',
      '날씨 상태별 아이콘과 정보 UI 구현',
    ],
    contributions: [
      '공정 현황, 인원, 날씨 등 다양한 정보를 목적별로 구분해 가독성 높은 대시보드 화면으로 구현',
      '다량의 데이터를 효율적으로 확인할 수 있도록 테이블 구조와 정보 계층을 정리',
      '날짜와 현장 선택값에 따라 표시 정보가 달라지는 화면 분기 로직 구현',
      '날씨 데이터 상태에 맞춰 아이콘과 안내 정보가 변경되는 UI 구성',
      '반복되는 테이블과 상태 표시 UI의 공통 스타일을 정리해 화면 일관성과 유지보수 효율 향상',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    links: []
  },
  {
    id: 6,
    title: 'GTX-A 스마트 안전관리 시스템 구축',
    description: 'GTX-A 공사 현장을 모니터링할 수 있는 스마트 안전관리 대시보드 시스템 구축',
    date: '2021',
    thumbs: [
      {
        src: work07_1,
        alt: 'GTX-A 스마트 안전관리 시스템',
      },
      {
        src: work07_2,
        alt: 'GTX-A 스마트 안전관리 시스템',
      },
      {
        src: work07_3,
        alt: 'GTX-A 스마트 안전관리 시스템',
      },
      {
        src: work07_4,
        alt: 'GTX-A 스마트 안전관리 시스템',
      },
    ],
    summary: 'GTX-A 공사 현장의 공구별 인원·차량 현황, 공기질과 환경 수치, 공정 상태를\n통합 모니터링할 수 있는 스마트 안전관리 대시보드 시스템을 구축했습니다.',
    responsibilities: [
      '디자인 시안을 기반으로 1~6공구 카드형 대시보드 UI 구현',
      'JavaScript 기반 날짜·시간 실시간 표시 기능 개발',
      '날씨 및 위험 상태에 따른 동적 UI 구현',
      '공기질·환경 수치와 인원·차량 현황 화면 구성',
      'Chart 라이브러리를 활용한 도넛·막대 차트 구현',
      '공구별 현황을 보여주는 지도 기반 인터페이스 구현',
    ],
    contributions: [
      '1~6공구의 주요 현황을 카드형 UI로 구성해 공구별 상태를 한 화면에서 비교할 수 있도록 구현',
      '위험·경고·주의 등 상태값에 따라 색상과 안내 정보가 변경되는 UI 분기 로직 적용',
      '공기질 및 환경 수치를 차트와 상태 표시로 시각화해 정보 가독성과 상황 인지성 향상',
      '날짜·시간을 실시간으로 갱신하여 관제 화면에 필요한 현재 시점 정보 제공',
      '공구별 인원·차량 현황을 지도 기반 화면으로 구성해 위치별 정보를 직관적으로 확인할 수 있도록 구현',
      '반복되는 카드와 상태 표시 패턴을 일관된 형태로 구현해 화면 간 통일성 확보',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Chart.js'],
    links: []
  },
  {
    id: 7,
    title: 'e편한세상 통합 게이트 페이지 구축',
    description: 'DL이앤씨와 DL건설 브랜드 사이트를 연결하는 통합 게이트 페이지 구축',
    date: '2024',
    thumbs: [
      {
        src: work03_1,
        alt: 'e편한세상 통합 게이트 페이지',
      },
      {
        src: work03_2,
        alt: 'e편한세상 통합 게이트 페이지',
      },
      {
        src: work03_3,
        alt: 'e편한세상 통합 게이트 페이지',
      },
      {
        src: work03_4,
        alt: 'e편한세상 통합 게이트 페이지',
      }
    ],
    summary: 'DL이앤씨와 DL건설 브랜드 사이트를 연결하는 통합 게이트 페이지를 구축하여\n사용자가 브랜드와 대표 단지를 직관적으로 탐색하고 이동할 수 있는 화면을 구현했습니다.',
    responsibilities: [
      '디자인 시안 기반 UI 개발',
      '반응형 레이아웃 구현',
      'JavaScript 인터랙션 구현',
      'Swiper 기반 슬라이더 개발',
      '크로스브라우징 대응',
    ],
    contributions: [
      '브랜드별 정보 구조를 고려해 사용자 이동 흐름(UI)을 설계',
      'CSS 미디어쿼리를 활용해 다양한 디바이스 환경 최적화',
      'Swiper를 활용한 인터랙션 구현으로 사용자 경험 향상',
      '브라우저별 UI 차이를 수정하여 일관된 화면 제공',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Swiper'],
    links: [
      {
        label: 'e편한세상 통합 게이트 페이지',
        url: 'https://www.elife.co.kr/Mnmn_gate.action'
      },
    ],
  },
]