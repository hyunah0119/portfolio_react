import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import scss from '../assets/img/skill/scss-icon.png';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import xd from '../assets/img/skill/xd-icon.png';
import { IoLogoFigma } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";
import cursor from '../assets/img/skill/cursor-icon-light.png';

export const skillList = [
    {
        id : 1,
        type : 'frontend',
        item : [
            {
                name : 'HTML',
                icon : FaHtml5
            },
            {
                name : 'CSS',
                icon : FaCss3Alt
            },
            {
                name : 'SCSS',
                icon : scss
            }
        ],
        info : '실무 프로젝트 다수 참여, 반응형 웹/크로스브라우징/UI 퍼블리싱 경험'
    },
    {
        id : 2,
        type : 'frontend',
        item : [
            {
                name : 'JavaScript',
                icon : IoLogoJavascript
            }
        ],
        info : 'ES6+, DOM 제어, 이벤트 핸들링, 인터랙션 구현 등 실무 프로젝트 경험'
    },
    {
        id : 3,
        type : 'frontend',
        item : [
            {
                name : 'React',
                icon : FaReact
            }
        ],
        info : '컴포넌트 기반 UI 개발, 라우팅, 상태관리 등 실무 프로젝트 경험\nAPI 연동, 전역 상태관리 등 개인 프로젝트 경험'
    },
    {
        id : 4,
        type : 'frontend',
        item : [
            {
                name : 'TypeScript',
                icon : BsTypescript
            }
        ],
        info : ''
    },
    {
        id : 5,
        type : 'devOps',
        item : [
            {
                name : 'Azure',
                icon : VscAzure
            }
        ],
        info : ''
    },
    {
        id : 6,
        type : 'devOps',
        item : [
            {
                name : 'GitHub',
                icon : IoLogoGithub
            }
        ],
        info : ''
    },
    {
        id : 7,
        type : 'devOps',
        item : [
            {
                name : 'SVN'
            },
            {
                name : 'FTP'
            }
        ],
        info : ''
    },
    {
        id : 8,
        type : 'design',
        item : [
            {
                name : 'Photoshop',
                icon : DiPhotoshop
            },
            {
                name : 'Adobe XD',
                icon : xd
            },
            {
                name : 'Figma',
                icon : IoLogoFigma
            }
        ],
        info : ''
    },
    {
        id : 9,
        type : 'tool',
        item : [
            {
                name : 'VSCode',
                icon : VscVscodeInsiders
            },
            {
                name : 'Eclipse',
                icon : SiEclipseide
            }
        ],
        info : ''
    },
    {
        id : 10,
        type : 'tool',
        item : [
            {
                name : 'Cursor',
                icon : cursor
            }
        ],
        info : ''
    }
]