import "./SignUpTermsAgreement.css";
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import TermsAgreement from "../components/TermsAgreement"

const SignUpTermsAgreement = () => {
    return (
        <>
            {/* 헤더 */}
            <Headers />

            {/* 이용약관 동의 영역 */}
            <TermsAgreement />

            {/* 푸터 */}
            <Footer />
        </>
    )
}

export default SignUpTermsAgreement;