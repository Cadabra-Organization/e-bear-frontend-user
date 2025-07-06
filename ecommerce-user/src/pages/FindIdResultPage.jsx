import "./FindIdResultPage.css"
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import FindIdResult from "../components/FindIdResult"

const FindIdResultPage = () => {
    let idResult = "idid***"

    return (
        <>
            {/* 헤더 */}
            <Headers />
            <div className="find-id-container">
                {/* 아이디 찾기 결과 */}
                <FindIdResult idResult={idResult} />
            </div>
            {/* 푸터 */}
            <Footer />
        </>
    )
}

export default FindIdResultPage;