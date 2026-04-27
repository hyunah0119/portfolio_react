import project01 from '../assets/img/project/project01.png';
import project02 from '../assets/img/project/project02.png';
import project03 from '../assets/img/project/project03.png';

export const projectList = [
    {
        id : 1,
        thumb : project01,
        title : '개인 포트폴리오 사이트 리뉴얼',
        info : `기존 HTML/CSS 기반 포트폴리오 사이트를 React + Vite 환경으로 리뉴얼한 반응형 웹사이트입니다.\nTailwind CSS를 활용해 UI 생산성과 일관성을 높였으며, 컴포넌트 단위 구조 설계, 데이터 기반 렌더링, 유지보수를 고려한 구조로 개선했습니다.`,
        detail : [
            {
                title : '주요기능',
                explain : [
                    '반응형 레이아웃 (PC / Tablet / Mobile 대응)',
                    '다크모드 / 라이트모드 전환',
                    '컴포넌트 단위 UI 구성 및 재사용성 고려',
                    '프로젝트 데이터 연동 및 동적 렌더링',
                    'Sticky Header 및 모바일 메뉴 인터랙션',
                    '유지보수를 고려한 폴더 구조 설계'
                ]
            }
        ],
        liveURL : 'https://hyna-portfolio-react.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/portfolio_react/tree/main/portfolio-react'
    },
    {
        id : 2,
        thumb : project02,
        title : 'UI 컴포넌트 모음',
        info : `실무 중 자주 쓰는 컴포넌트를 정리하여 재상용성을 높이기 위한 개인 프로젝트입니다.\nReact + Styled-components + TypeScript를 사용했으며, PC 환경에 맞춰 작업했습니다.`,
        detail : [
            {
                title : '구성 요소',
                explain : [
                    'Button',
                    'Modal',
                    'Accordion',
                    'Tooltip'
                ]
            }
        ],
        liveURL : 'https://hyna-project02.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/hyna.project02'
    },
    {
        id : 3,
        thumb : project03,
        title : '투두리스트',
        info : `React + TypeScript + SCSS 기반으로 제작한 SPA 형태의 Todo 관리 애플리케이션입니다.\n단순 UI 구현을 넘어, 상태 관리 구조 설계와 컴포넌트 분리를 중심으로 개발한 프로젝트입니다.`,
        detail : [
            {
                title : '주요 기능/사용 라이브러리',
                explain : [
                    '오늘 날짜 표시',
                    '할 일 추가/삭제',
                    '완료/미완료 상태 토글',
                    '전체/완료/미완료 필터링',
                    '드래그 앤 드롭으로 순서 변경 (@hello-pangea/dnd)',
                    '로컬 스토리지 저장 (새로고침 후에도 유지)'
                ]
            }
        ],
        liveURL : 'https://hyna-project03.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/hyna.project03'
    },
]