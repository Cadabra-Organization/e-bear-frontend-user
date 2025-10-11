import "./FindPwResultPage.css"
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import FindPwResult from "../components/FindPwResult"


const FindPwResultPage = () => {
    return (
        <>
            {/* 헤더 */}
            <Headers />

            <div className="find-id-container">
                {/*비밀번호 찾기 결과 영역 */}
                <FindPwResult />
            </div>

            {/* 푸터 */}
            <Footer />
        </>
    )
}

export default FindPwResultPage;