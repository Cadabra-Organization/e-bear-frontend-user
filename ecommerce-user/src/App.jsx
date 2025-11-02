import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Headers from "./components/Headers"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import MyPageUserInfo from "./pages/MyPageUserInfo"
import MyPageOrderList from "./pages/MyPageOrderList"
import MyPageCupon from "./pages/MyPageCupon"
import MyPagePoint from "./pages/MyPagePoint"
import MyPageInquiry from "./pages/MyPageInquiry"
import MyPageWishlist from "./pages/MyPageWishlist"
import MyPageCoupon from "./pages/MyPageCupon"
import FindId from "./pages/FindId"
import SignUp from "./pages/SignUp"
import SignUpTermsAgreement from "./pages/SignUpTermsAgreement"

function App() {
  return (
    <div className="ebear-container">
     <Headers />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/mypage/userinfo" element={<MyPageUserInfo />} />
        <Route path="/mypage/orderlist" element={<MyPageOrderList />} />
        <Route path="/mypage/cupon" element={<MyPageCupon />} />
        <Route path="/mypage/point" element={<MyPagePoint />} />
        <Route path="/mypage/inquiry" element={<MyPageInquiry />} />
        <Route path="/mypage/wishlist" element={<MyPageWishlist />} />
        <Route path="/mypage/coupon" element={<MyPageCoupon />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signuptermsagreement" element={<SignUpTermsAgreement />} />
      </Routes>
     <Footer />
   </div>
  )
}

export default App
