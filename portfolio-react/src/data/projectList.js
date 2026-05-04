import project01 from '../assets/img/project/project01.png';
import project02 from '../assets/img/project/project02.png';
import project03 from '../assets/img/project/project03.png';
import project04 from '../assets/img/project/project04.png';

export const projectList = [
    {
        id : 1,
        thumb : project04,
        title : '개인 포트폴리오 반응형 페이지 (HTML)',
        info : `디자인부터 HTML·CSS 퍼블리싱까지 100% 직접 제작한 반응형 포트폴리오 사이트입니다.\nPC / Tablet / Mobile 반응형으로 구현되었으며, 밝고 직관적인 UI를 목표로 제작했습니다.`,
        detail : [
            {
                title : '주요기능',
                explain : [
                    'Sticky header (모바일 햄버거 메뉴)',
                    '반응형 Swiper 슬라이더',
                    '서비스 카드 Hover 효과',
                    '미디어 쿼리를 통한 디바이스 대응',
                ]
            }
        ],
        liveURL : 'https://hyna-portfolio.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/hyna.portfolio'
    },
    {
        id : 2,
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
        id : 3,
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
        id : 4,
        thumb : project03,
        title : '투두리스트',
        info : `React + TypeScript 기반으로 제작한 SPA 형태의 Todo 관리 애플리케이션입니다.\n컴포넌트 단위 설계와 상태 관리 흐름을 중심으로 구현했으며, CRUD 기능과 사용자 경험 개선에 초점을 맞췄습니다.\n초기에는 json-server를 활용한 mock API로 기능을 구현했으며,\n배포 환경에서의 데이터 지속성 문제를 해결하기 위해 Supabase로 전환하여 실제 DB 기반으로 개선했습니다.`,
        detail : [
            {
                title : '주요 기능/사용 라이브러리',
                explain : [
                    '오늘 날짜 표시',
                    '라이트/다크 모드',
                    '할 일 추가/수정/삭제 (CRUD)',
                    '완료/미완료 상태 토글',
                    '전체/완료/미완료 필터링',
                    '드래그 앤 드롭으로 순서 변경 (@hello-pangea/dnd)',
                    '다중 선택 삭제 기능',
                    '사용자별 데이터 분리 (localStorage + Supabase)',
                    'Supabase 연동을 통한 데이터 영속성 확보'
                ]
            }
        ],
        liveURL : 'https://todo-react-chi-two.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/todo/tree/main/todo-app'
    },
]