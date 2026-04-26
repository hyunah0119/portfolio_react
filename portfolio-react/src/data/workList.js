import work01 from '../assets/img/work/work01.png'
import work02 from '../assets/img/work/work02.png'
import work03 from '../assets/img/work/work03.png'
import work04 from '../assets/img/work/work04.png'
import work05 from '../assets/img/work/work05.png'
import work06 from '../assets/img/work/work06.png'
import work07 from '../assets/img/work/work07.png'

import workDetail01_1 from '../assets/img/work/work01-1.png'
import workDetail01_2 from '../assets/img/work/work01-2.png'
import workDetail01_3 from '../assets/img/work/work01-3.png'
import workDetail01_4 from '../assets/img/work/work01-4.png'
import workDetail01_5 from '../assets/img/work/work01-5.png'

import workDetail02_1 from '../assets/img/work/work02-1.png'
import workDetail02_2 from '../assets/img/work/work02-2.png'
import workDetail02_3 from '../assets/img/work/work02-3.png'
import workDetail02_4 from '../assets/img/work/work02-4.png'

import workDetail03_1 from '../assets/img/work/work03-1.png'
import workDetail03_2 from '../assets/img/work/work03-2.png'
import workDetail03_3 from '../assets/img/work/work03-3.png'
import workDetail03_4 from '../assets/img/work/work03-4.png'

import workDetail04_1 from '../assets/img/work/work04-1.png'
import workDetail04_2 from '../assets/img/work/work04-2.png'
import workDetail04_3 from '../assets/img/work/work04-3.png'
import workDetail04_4 from '../assets/img/work/work04-4.png'

import workDetail05_1 from '../assets/img/work/work05-1.png'
import workDetail05_2 from '../assets/img/work/work05-2.png'
import workDetail05_3 from '../assets/img/work/work05-3.png'

import workDetail06_1 from '../assets/img/work/work06-1.png'
import workDetail06_2 from '../assets/img/work/work06-2.png'

import workDetail07_1 from '../assets/img/work/work07-1.png'
import workDetail07_2 from '../assets/img/work/work07-2.png'
import workDetail07_3 from '../assets/img/work/work07-3.png'
import workDetail07_4 from '../assets/img/work/work07-4.png'

export const workList = [
    {
        id : 1,
        title : 'DL그룹 아파트 분양 웹사이트 운영',
        thumb : work01,
        detail : {
            detail_img : [
                {
                    src : workDetail01_1,
                    alt : 'ACRO 메인페이지'
                },
                {
                    src : workDetail01_2,
                    alt : 'ACRO 분양페이지'
                },
                {
                    src : workDetail01_3,
                    alt : 'e편한세상 분양페이지'
                },
                {
                    src : workDetail01_4,
                    alt : 'e편한세상 분양페이지'
                },
                {
                    src : workDetail01_5,
                    alt : 'e편한세상 분양페이지'
                }
            ],
            info : [
                'JSP·React 기반 분양/브랜드 웹사이트 화면 개발 및 운영',
                'HTML/CSS(SCSS)/JavaScript/TypeScript 기반 UI 구현',
                '아파트 단지별 랜딩/홍보 페이지 템플릿 제작 및 신규 페이지 구축',
                '공통 include 구조(JSP) 및 React 컴포넌트 모듈화 설계로 재사용성 향상',
                '고급 브랜드(ACRO) 특성에 맞춘 인터랙션 중심 UI/UX 구현',
                '클라이언트 요구사항 반영 및 운영 이슈 분석/오류 수정 대응',
                '페이지 로딩 속도 모니터링 및 성능 개선 작업 수행'
            ],
            links : [
                {
                    label : 'DL이앤씨 e편한세상',
                    url : 'https://www.elife.co.kr/Mnmn_main.action'
                },
                {
                    label : 'DL건설 e편한세상',
                    url : 'https://www.dlcon-apt.co.kr/'
                },
                {
                    label : 'ACRO',
                    url : 'https://www.acro.co.kr/Mnmn_main.action'
                }
            ]
        }
    },
    {
        id : 2,
        title : 'DL그룹 기업 홈페이지 통합 운영',
        thumb : work02,
        detail : {
            detail_img : [
                {
                    src : workDetail02_1,
                    alt : 'DL케미칼 홈페이지'
                },
                {
                    src : workDetail02_2,
                    alt : 'DL케미칼 홈페이지'
                },
                {
                    src : workDetail02_3,
                    alt : 'DL에너지 홈페이지'
                },
                {
                    src : workDetail02_4,
                    alt : 'Cariflex 홈페이지'
                }
            ],
            info : [
                'JSP 기반 기업/브랜드 웹사이트 화면 개발 및 통합 운영/유지보수',
                '공통 include 구조 설계로 재사용성과 유지보수 효율 개선',
                '적응형/반응형 UI 구현 및 크로스브라우징 대응',
                'properties 파일 기반 다국어 처리 시스템 운영',
                '기업별 톤앤매너에 맞춘 신규 페이지 설계 및 구축',
                '운영 이슈 모니터링 및 오류 분석/수정 대응',
                '반복 마크업 템플릿화 및 구조 개선을 통한 제작 속도 향상'
            ],
            links : [
                {
                    label : 'DL홀딩스',
                    url : 'https://www.dlholdings.co.kr/ko/index.do'
                },
                {
                    label : '(주)대림',
                    url : 'https://www.daelim.co.kr/ko/pc/index.do'
                },
                {
                    label : 'DL케미칼',
                    url : 'https://www.dlchemical.co.kr/'
                },
                {
                    label : 'DL건설',
                    url : 'https://www.dlconstruction.co.kr/zMain/main.asp'
                },
                {
                    label : 'DL에너지',
                    url : 'https://www.dlenergy.co.kr/main.do'
                },
                {
                    label : 'DL FnC',
                    url : 'https://www.dlfnc.co.kr/main.do'
                },
                {
                    label : 'DL모터스',
                    url : 'https://www.dlmotors.co.kr/kor/automobile/main.do'
                },
                {
                    label : '대림투자운용용',
                    url : 'https://www.daeliminvest.co.kr/main.do'
                },
                {
                    label : 'Cariflex',
                    url : 'https://www.cariflex.com/en/main.do'
                },
                {
                    label : 'DREX 폴리머',
                    url : 'https://www.drexpolymer.com/'
                }
            ]
        }
    },
    {
        id : 3,
        title : 'e편한세상 통합 게이트 페이지 구축',
        thumb : work03,
        detail : {
            detail_img : [
                {
                    src : workDetail03_1,
                    alt : 'e편한세상 통합 게이트 페이지'
                },
                {
                    src : workDetail03_2,
                    alt : 'e편한세상 통합 게이트 페이지'
                },
                {
                    src : workDetail03_3,
                    alt : 'e편한세상 통합 게이트 페이지'
                },
                {
                    src : workDetail03_4,
                    alt : 'e편한세상 통합 게이트 페이지'
                }
            ],
            summary : 'DL이앤씨와 DL건설 두 건설사의 브랜드 사이트를 연결하는 통합 게이트 페이지로, 사용자가 각 브랜드의 주력 아파트 단지를 직관적으로 비교하고 빠르게 이동할 수 있도록 설계된 웹 서비스',
            info : [
                '디자인 시안을 기반으로 전체 화면 구조 설계 및 퍼블리싱 구현',
                '반응형 웹 구조 설계 및 CSS 미디어쿼리 기반 레이아웃 최적화',
                'JavaScript 기반 사용자 인터랙션 로직 구현',
                'Swiper 라이브러리를 활용한 슬라이드 및 동적 UI 구현',
                '브랜드별 정보 구조를 고려한 사용자 흐름(UI/UX) 개선',
                '크로스브라우징 테스트 및 UI 안정성 확보'
            ],
            links : [
                {
                    label : 'e편한세상 통합 게이트 페이지',
                    url : 'https://www.elife.co.kr/Mnmn_gate.action'
                }
            ]
        }
    },
    {
        id : 4,
        title : 'Cariflex 관리자 페이지 구축',
        thumb : work04,
        detail : {
            detail_img : [
                {
                    src : workDetail04_1,
                    alt : 'Cariflex 관리자 페이지'
                },
                {
                    src : workDetail04_2,
                    alt : 'Cariflex 관리자 페이지'
                },
                {
                    src : workDetail04_3,
                    alt : 'Cariflex 관리자 페이지'
                },
                {
                    src : workDetail04_4,
                    alt : 'Cariflex 관리자 페이지'
                }
            ],
            summary : '내부 운영 담당자가 계정, 로그, 게시글 등을 직접 관리할 수 있도록 관리자 전용 웹 인터페이스(Admin Page)를 신규 구축한 프로젝트',
            info : [
                '관리자 페이지 전체 화면 구조 설계 및 UI 퍼블리싱 구현',
                '로그인/권한 관리/계정 관리/접속·권한 로그 관리 등 운영 기능 화면 개발',
                '게시판(CRUD) 등록/수정/삭제/목록 화면 구현 및 데이터 기반 UI 처리',
                'JavaScript 기반 폼 처리 및 사용자 인터랙션 로직 개발',
                '날짜 선택, 필터링 등 운영 편의성을 고려한 Date 라이브러리 적용',
                '운영 담당자 피드백 기반 UX 흐름 개선 및 사용성 고도화'
            ]
        }
    },
    {
        id : 5,
        title : '새만금 완산터널 스마트 관제시스템 구축',
        thumb : work05,
        detail : {
            detail_img : [
                {
                    src : workDetail05_1,
                    alt : '새만금 완산터널 스마트 관제시스템'
                },
                {
                    src : workDetail05_2,
                    alt : '새만금 완산터널 스마트 관제시스템'
                },
                {
                    src : workDetail05_3,
                    alt : '새만금 완산터널 스마트 관제시스템'
                },
            ],
            summary : '공사 현장의 공정 진행률, CCTV 영상, 작업 환경 수치(산소, 유해가스 등), 현장 인원 현황을 실시간으로 모니터링하는 스마트 관제 대시보드 시스템 구축',
            info : [
                'HTML/CSS 기반 대시보드 UI 구현',
                'JavaScript를 활용한 화면 내 상태값 분기 처리 및 동적 UI 업데이트 구현',
                '공정 진행률 데이터에 따른 진행 바 및 상태 색상 UI 처리',
                '환경 측정 수치(산소, 유해가스 등)에 따른 경고/정상/주의 상태 표시 로직 반영',
                'CCTV 영역 UI 구성 및 모달 팝업 인터랙션 구현',
                '현장 인원 수 및 방향별 인원 현황 UI 구성',
                '데이터 상태에 따른 UI 분기 구조를 이해하고, 화면 레벨에서 동적 표시 로직을 구현'
            ]
        }
    },
    {
        id : 6,
        title : 'M-Plan 대시보드 구축',
        thumb : work06,
        detail : {
            detail_img : [
                {
                    src : workDetail06_1,
                    alt : 'M-Plan 대시보드'
                },
                {
                    src : workDetail06_2,
                    alt : 'M-Plan 대시보드'
                }
            ],
            summary : 'DL이앤씨에서 진행 중인 공사 현장별 공정 현황, 인원 관리, 날씨 정보, 진척도 등을 확인할 수 있는 내부 관리자 대시보드 시스템 구축',
            info : [
                'HTML/CSS 기반 관리자 대시보드 UI 레이아웃 설계 및 구현',
                '현장별 공정 진척도 및 상태 정보를 시각적으로 표현하는 UI 구성',
                '다량의 현황 데이터를 테이블 구조로 정리 및 화면 최적화',
                '날짜/현장 선택에 따른 화면 표시 구조 설계 및 UI 분기 처리',
                '날씨 상태에 따른 아이콘 및 UI 표현 구성 (API 연동 없이 화면 구현)',
                '공통 테이블 스타일 구조 정리 및 반복 UI 모듈화 작업'
            ]
        }
    },
    {
        id : 7,
        title : 'GTX-A 스마트 안전관리 시스템 구축',
        thumb : work07,
        detail : {
            detail_img : [
                {
                    src : workDetail07_1,
                    alt : 'GTX-A 스마트 안전관리 시스템'
                },
                {
                    src : workDetail07_2,
                    alt : 'GTX-A 스마트 안전관리 시스템'
                },
                {
                    src : workDetail07_3,
                    alt : 'GTX-A 스마트 안전관리 시스템'
                },
                {
                    src : workDetail07_4,
                    alt : 'GTX-A 스마트 안전관리 시스템'
                },
            ],
            summary : 'GTX-A 공사 현장의 인원·차량 현황, 공기질 및 환경 수치, 공정 상태 등을 통합 모니터링하는 안전관리 대시보드 시스템 구축',
            info : [
                'HTML/CSS 기반 다중 공구(1~6공구) 카드형 대시보드 UI 설계 및 구현',
                'JavaScript를 활용한 날짜·시간 실시간 표시 기능 구현',
                '날씨 상태 UI 표현 로직 구현 (API 연동 없이 상태값 기반 화면 처리)',
                '위험/경고/주의 상태에 따른 UI 분기 및 색상 체계 적용',
                '공기질 및 환경 수치 데이터를 시각적으로 표현하는 UI 구성',
                'Chart 라이브러리를 활용한 도넛/막대 차트 데이터 시각화 구현',
                '공구별 인원·차량 현황 지도 기반 인터페이스 UI 구현'
            ]
        }
    },
];