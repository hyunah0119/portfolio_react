import ContactLink from "../components/ContactLink";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

export default function Contact() {
    return (
        <div className="flex gap-2 sm:gap-4">
            <ContactLink
                href='mailto:1diakek@naver.com'
                label='이메일 보내기'
            >
                <MdEmail />
            </ContactLink>
            <ContactLink
                href='https://github.com/hyunah0119'
                label='깃허브 바로가기'
            >
                <IoLogoGithub />
            </ContactLink>
        </div>
    )
}
