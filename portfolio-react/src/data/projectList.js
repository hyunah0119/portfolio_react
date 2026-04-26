import project01 from '../assets/img/project/project01.png';
import project02 from '../assets/img/project/project02.png';
import project03 from '../assets/img/project/project03.png';

export const projectList = [
    {
        id : 1,
        thumb : project01,
        title : '반응형 페이지',
        info : `디자인부터 HTML·CSS 퍼블리싱까지 100% 직접 제작한 반응형 포트폴리오 사이트입니다.\nPC / Tablet / Mobile 반응형으로 구현되었으며, 밝고 직관적인 UI를 목표로 제작했습니다.`,
        detail : [
            {
                title : '주요기능',
                explain : [
                    'Sticky header (모바일 햄버거 메뉴)',
                    '반응형 Swiper 슬라이더',
                    '서비스 카드 Hover 효과',
                    '미디어 쿼리를 통한 디바이스 대응'
                ]
            }
        ],
        liveURL : 'https://hyna-portfolio.vercel.app/',
        githubURL : 'https://github.com/hyunah0119/hyna.portfolio'
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