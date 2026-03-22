import { useState } from "react";
import "./MyPageUserInfo.css";
import SideNavigation from "../components/SideNavigation";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyPageHeader from "../components/MyPageHeader";

const MyPageUserInfo = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    let sideMenu = [
        {
            title: "회원정보 조회 및 수정",
            link: "/mypage/userinfo",
        },
        {
            title: "주문내역",
            link: "/mypage/orderlist",
        },
        {
            title: "문의내역",
            subMenu: [
                {
                    title: "고객문의",
                    link: "/mypage/inquiry",
                },
                {
                    title: "신고문의",
                    link: "/mypage/inquiryreport",
                }
            ]
        },
        {
            title: "찜목록",
            link: "/mypage/wishlist",
        },
        {
            title: "최근 본 상품",
            link: "/mypage/currentview",
        },
        {
            title: "쿠폰",
            link: "/mypage/cupon",
        },
        {
            title: "포인트",
            link: "/mypage/point",
        },
        {
            title: "회원탈퇴"
        }
    ]

    // useState로 폼 데이터를 하나의 객체로 관리
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        passwordCheck: '',
        name: '',
        email: '',
        authCode: '',
        address: '',
        phone: ''
    });

    // 입력값이 변경될 때마다 formData 상태를 업데이트
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const updateUserInfo = () => {
        const hasEmptyInput = Object.values(formData).some(value => value.trim() === '');
        if (hasEmptyInput) {
            alert("모든 정보를 입력해주세요.");
            return;
        }
        // 값 체크 완료
        console.log('모든 값이 채워져 있습니다.', formData);
    };

    return (
        <>
            <MyPageHeader title={"회원정보"} toggleSidebar={() => setIsSidebarOpen(true)}/>

            <div className="main-layout">
                <SideNavigation sideMenu={sideMenu} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>

                {/* 메인 콘텐츠 */}
                <main id="userInfoForm" className="main-content">
                    <TextField 
                        name="userId"
                        label="아이디" 
                        variant="filled" 
                        fullWidth
                        margin="normal"
                        value={formData.userId}
                        onChange={handleChange}/>
                    <TextField 
                        name="password"
                        label="비밀번호" 
                        type="password"
                        variant="filled" 
                        fullWidth
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}/>
                    <TextField 
                        name="passwordCheck"
                        label="비밀번호 확인" 
                        type="password"
                        variant="filled" 
                        fullWidth
                        margin="normal"
                        value={formData.passwordCheck}
                        onChange={handleChange}/>
                    <TextField 
                        name="name"
                        label="이름" 
                        variant="filled" 
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}/>
                    
                    <div className="user-flex">
                        <TextField 
                            name="email"
                            label="이메일" 
                            type="email"
                            variant="filled" 
                            value={formData.email}
                            onChange={handleChange}/>
                        <Button variant="contained" className="user-button">인증받기</Button>
                    </div>

                    <div className="user-flex">
                        <TextField 
                            name="authCode"
                            label="인증코드" 
                            variant="filled" 
                            value={formData.authCode}
                            onChange={handleChange}/>
                        <Button variant="contained" className="user-button">인증받기</Button>
                    </div>

                    <div className="user-flex">
                        <TextField 
                            name="address"
                            label="주소" 
                            variant="filled" 
                            value={formData.address}
                            onChange={handleChange}/>
                        <Button variant="contained" className="user-button">주소찾기</Button>
                    </div>

                    <TextField 
                        name="phone"
                        label="핸드폰번호" 
                        variant="filled" 
                        fullWidth
                        margin="normal"
                        value={formData.phone}
                        onChange={handleChange}/>

                    <Button variant="contained" size="large" className="user-button" fullWidth onClick={updateUserInfo}>수정</Button>
                </main>
            </div>
        </>
    );
}

export default MyPageUserInfo;