import "./MyPageWishlist.css"
import SideNavigation from "../components/SideNavigation"
import Wishlist from "../components/Wishlist"
import MyPageHeader from "../components/MyPageHeader";
import api from "../api/axios.js";
import { useEffect, useState, useCallback } from "react";
// import { srRS } from "@mui/material/locale";

const sideMenu = [
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

const getFileUrl = (path) => {
    if (!path) return "";
    return `${api.defaults.baseURL}${path}`;
};

const PAGE_SIZE = 10;

const MyPageWishlist = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  //사이드바
    const [data, setData] = useState([]);                       //찜 리스트
    const [cursor, setCursor] = useState(null);                 //찜 페이징
    const [hasMore, setHasMore] = useState(false);              //더 불러올 게 있는지
    const [isLoading, setIsLoading] = useState(true);           //찜 조회 상태
    const [isLoadingMore, setIsLoadingMore] = useState(false);  //추가 로딩 진행 중

    const convert = (item) => ({
        wishListNo: item.wishListNo,
        productNo: item.productNo,
        imgSrc: getFileUrl(item.productFile),
        product: item.productName,
        seller: item.sellerName,
        price: (item.price ?? 0).toLocaleString(),
        wish: true,
        link: `/product/view/${item.productNo}`,
    });

    const fetchPage = useCallback(async (cursorValue) => { //useCallback : 매 렌딩 시 새로X 고정O
        const res = await api.get('/wish/list', {
            params: {
                size: PAGE_SIZE,
                ...(cursorValue != null && { cursor: cursorValue }) // null이면 아예 안 보냄
            }
        });
        return res.data;
    }, []);

    //최초 로딩
    useEffect(() => {
        (async () => {
            try {
                const response = await fetchPage(null);
                setData((response.content ?? []).map(convert)); // 받아온 데이터 저장 및 화면 출력 객체로 변경
                setCursor(response.nextCursor);
                setHasMore(response.hasNext); 
            } catch (error) {
                console.error('데이터 조회 중 오류 발생:', error);
            } finally {
                setIsLoading(false); // 로딩 상태 해제
            }
        })();
        
    }, [fetchPage]);

    const handleLoadMore = async () => {
        if(isLoadingMore || !hasMore) return; //연타 방지

        setIsLoadingMore(true);
        try{
            const result = await fetchPage(cursor);
            setData((prev) => [...prev, ...(result.content ?? []).map(convert)]);
            setCursor(result.nextCursor);
            setHasMore(result.hasNext);
        } catch (error){
            console.error("추가 조회 중 오류 발생:", error);
            alert('목록을 더 불러오지 못했습니다.');
        } finally {
            setIsLoadingMore(false);
        }
    }

    //찜 해제
    const handleRemoveWish = async (wishListNo) => {
        try {
            await api.delete(`/wish/${wishListNo}`);
            // 삭제 성공 시 다시 조회X => 화면에서만 제거
            setData((prev) => prev.filter((item) => item.wishListNo !== wishListNo));
        } catch (error) {
            console.error('찜 해제 중 오류 발생:', error);
            alert('찜 해제에 실패했습니다.');
        }
    };

    if (isLoading) {
        return <div>찜 목록 조회 중입니다...</div>;
    }

    return (
        <div className="ebear-container">
            <MyPageHeader title={"찜목록"} toggleSidebar={() => setIsSidebarOpen(true)}/>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    {/* 찜목록 */}
                    <Wishlist
                        wishlistProducts={data}
                        onRemoveWish={handleRemoveWish}
                        onLoadMore={handleLoadMore}
                        hasMore={hasMore}
                        isLoadingMore={isLoadingMore}
                    />
                </main>
            </div>
        </div>
    )
}

export default MyPageWishlist