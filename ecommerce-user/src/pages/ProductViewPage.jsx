import Accordion from "@mui/material/Accordion";
import { AvatarCustom, AvatarFallback, ChevronDownIcon, HeartIcon, UserIcon } from "../components/CustomTag"
import ReviewCard from "../components/ReviewCard"
import "./ProductViewPage.css"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import Test from "../components/Test"
import PopUp from "../components/PopUp"

const ProductViewPage = () => {
    const [comboBox, setComboBox] = useState(false);
    const [comboBoxItem, setComboBoxItem] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isMobileOptionsOpen, setIsMobileOptionsOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width: 768px)');
    const [activeTab, setActiveTab] = useState('info'); // 'info', 'review', 'qna', 'return'

    const handleOpenMobileOptions = () => {
        setIsMobileOptionsOpen(true);
    }

    const handleCloseMobileOptions = () => {
        setIsMobileOptionsOpen(false);
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleTabClick = (event, tabName) => {
        if (isMobile) {
            event.preventDefault();
        }

        setActiveTab(tabName);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }

    const handleComboBoxItem = (item) => {
        setComboBoxItem(item);
        setComboBox(false);
    }

    const handleComboBox = () => {
        setComboBox(!comboBox);
    }

    const review = [
        {
            rate: 3.5,
            title: "제목",
            context: "내용",
            name: "이름",
            date: "2025-07-26"
        },
        {
            rate: 3.5,
            title: "제목",
            context: "내용",
            name: "이름",
            date: "2025-07-26"
        },
        {
            rate: 3.5,
            title: "제목",
            context: "내용",
            name: "이름",
            date: "2025-07-26"
        },
        {
            rate: 3.5,
            title: "제목",
            context: "내용",
            name: "이름",
            date: "2025-07-26"
        },
        {
            rate: 3.5,
            title: "제목",
            context: "내용",
            name: "이름",
            date: "2025-07-26"
        }
    ];

    const qnalist = [
        {
            id: 1,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 2,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 3,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 4,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 5,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 6,
            name: "김철수",
            title: "제목",
            context: "내용"
        },
        {
            id: 7,
            name: "김철수",
            title: "제목",
            context: "내용"
        }
    ];

    return (
        <>
            <div className="product-view-container">
                <h3>상품상세보기</h3>
                <hr />

                <div className="product-view-contents">
                    <div className="product-view-contents-left">
                        <div className="product-info-container">
                            <div>
                                <img src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1536x1536.jpeg.webp" className="product-img"></img>
                                <div className="sub-image-container">
                                    <img src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1536x1536.jpeg.webp" className="product-img-mini"></img>
                                    <img src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1536x1536.jpeg.webp" className="product-img-mini"></img>
                                    <img src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1536x1536.jpeg.webp" className="product-img-mini"></img>
                                </div>
                            </div>
                            <div className="product-views">
                                <div className="product-header-row">
                                    <span className="product-info-category">뷰티 &gt; 헤어기기 &gt; 헤어드라이기</span>
                                    <div className="product-view-contents align-items-center">
                                        <AvatarCustom className="profile-avatar h-5 w-5">
                                            <AvatarFallback className="avatar-fallback">
                                                <UserIcon className="avatar-icon" />
                                            </AvatarFallback>
                                        </AvatarCustom>
                                        <span className="profile-name">유닉스</span>
                                    </div>
                                </div>
                                <div className="product-info-content">갤럭시 팝니다 갤럭시 팝니다 갤럭시 팝니다</div>
                                <div className="product-info-content product-header-row">
                                    <span>420,000 ~ 원</span>
                                    <HeartIcon className="icon heart-icon"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="detail_tab_area fixed" id="detail_tab_area">
                            <div className="detail_tab">
                                <ul className="tab_list">
                                    <li className={`tab_item item01 ${activeTab === 'info' ? 'on' : ''}`} id="bookmark_product_information_item">
                                        <a href="#bookmark_product_information" onClick={(e) => handleTabClick(e, 'info')}>
                                            <h3 className="tab_txt">상품정보</h3>
                                            <strong className="num_c" id="priceCompareTabCount">153</strong>
                                        </a>
                                    </li>
                                    <li className={`tab_item item02 ${activeTab === 'review' ? 'on' : ''}`} id="bookmark_product_review_item">
                                        <a href="#bookmark_product_review" onClick={(e) => handleTabClick(e, 'review')}>
                                            <h3 className="tab_txt">리뷰</h3>
                                        </a>
                                    </li>
                                    <li className={`tab_item item03 ${activeTab === 'qna' ? 'on' : ''}`} id="bookmark_product_qna_item">
                                        <a href="#bookmark_product_qna" onClick={(e) => handleTabClick(e, 'qna')}>
                                            <h3 className="tab_txt">QnA</h3>
                                            <strong className="num_c" id="productOpinionTabCount">129</strong>
                                        </a>
                                    </li>
                                    <li className={`tab_item item04 ${activeTab === 'return' ? 'on' : ''}`} id="bookmark_product_return_item">
                                        <a href="#bookmark_product_return" onClick={(e) => handleTabClick(e, 'return')}>
                                            <h3 className="tab_txt">반품/교환</h3>
                                            <strong className="num_c" id="newsCommunityCount">155</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {(!isMobile || activeTab === 'info') && (
                            <>
                                <div className="content-gap" id="bookmark_product_information">
                                    <span>상품정보</span>
                                    <hr />
                                </div>
                                <div className="product-views-content">
                                    내용이 들어갑니다.
                                </div>
                            </>
                        )}

                        {(!isMobile || activeTab === 'review') && (
                            <>
                                <div className="content-gap" id="bookmark_product_review">
                                    <span>리뷰</span>
                                    <hr />
                                </div>
                                <div>
                                    <div className="review-section">
                                        {review.map((data, index) => {
                                            return (<ReviewCard key={index}  rate={data.rate} title={data.title} context={data.context} name={data.name} date={data.date} />);    
                                        })}
                                    </div>
                                    <div className="more-button-section">
                                        <button className="more-button">더보기</button>
                                    </div>
                                </div>
                            </>
                        )}

                        {(!isMobile || activeTab === 'qna') && (
                            <>
                                <div className="content-gap" id="bookmark_product_qna">
                                    <div className="qna-title">
                                        <span>QnA</span>
                                        <button className="inquiry-button" onClick={() => setIsPopupOpen(true)}>문의하기</button>
                                    </div>
                                    <hr />
                                </div>
                                <div className="qna-section">
                                    {qnalist.map((data, index) => {
                                        return (
                                        <Accordion key={index} expanded={expanded === data.id} onChange={handleChange(data.id)}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                                                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                                                    {data.name}
                                                </Typography>
                                                <Typography component="span" sx={{ color: 'text.secondary' }}>
                                                    {data.title}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {data.context}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>)
                                    })}
                                </div>
                            </>
                        )}

                        {(!isMobile || activeTab === 'return') && (
                            <>
                                <div className="content-gap" id="bookmark_product_return">
                                    <span>반품 / 교환</span>
                                    <hr />
                                </div>
                                <div className="text-color">
                                    상품 수령 후 7일 이내에 신청하실 수 있습니다. 단, 제품이 표시·광고 내용과 다르거나, 계약과 다르게 이행된 경우는 제품 수령일부터 3개월 이내,<br/> 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 교환/반품이 가능합니다.<br/><br/> 추가적으로 다음의 경우 해당하는 반품/교환은 신청이 불가능할 수 있습니다.<br/><br/> 소비자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 (단지, 상품 확인을 위한 포장 훼손 제외)<br/> 소비자의 사용 또는 소비에 의해 상품 등의 가치가 현저히 감소한 경우<br/> 시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우<br/> 복제가 가능한 상품 등의 포장을 훼손한 경우<br/> 소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간 경우
                                </div>
                            </>
                        )}
                    </div>
                    
                    {( !isMobile ) && (
                    <div className="product-view-contents-right-area">
                        <div className="product-view-contents-right">
                            <div className="comboBox-section">
                                <div className="comboBox">
                                    <a onClick={handleComboBox}>
                                        <div className="comboBox-header">
                                            <span>등급</span>
                                            <ChevronDownIcon className={comboBox ? "rotate-180" : ""} />
                                        </div>
                                    </a>
                                    <ul className="comboBox-option" style={{display: comboBox ? "block" : "none"}}>
                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(1)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(2)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(3)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(4)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(5)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(7)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(8)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="comboBox-option-item">
                                            <a onClick={() => handleComboBoxItem(9)}>
                                                <div className="comboBox-header-option">
                                                    <span>제목</span>
                                                    <span>가격</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="product-options-list"> 
                                <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                    <li className="option_item c_product_option_item">
                                        <div className="option_item_info cont">
                                            <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                            <div className="option_amount c_product_input c_product_input_count">
                                                <div className="amount-area">
                                                    <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                    <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                    <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                </div>
                                            </div>
                                            <dl className="c_prd_price">
                                                <div className="price">
                                                    <dt>판매가</dt>
                                                    <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="ctrl">
                                            <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                        </div>
                                    </li>
                                </ul>
                                
                                <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                    <li className="option_item c_product_option_item">
                                        <div className="option_item_info cont">
                                            <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                            <div className="option_amount c_product_input c_product_input_count">
                                                <div className="amount-area">
                                                    <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                    <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                    <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                </div>
                                            </div>
                                            <dl className="c_prd_price">
                                                <div className="price">
                                                    <dt>판매가</dt>
                                                    <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="ctrl">
                                            <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                    <li className="option_item c_product_option_item">
                                        <div className="option_item_info cont">
                                            <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                            <div className="option_amount c_product_input c_product_input_count">
                                                <div className="amount-area">
                                                    <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                    <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                    <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                </div>
                                            </div>
                                            <dl className="c_prd_price">
                                                <div className="price">
                                                    <dt>판매가</dt>
                                                    <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="ctrl">
                                            <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                    <li className="option_item c_product_option_item">
                                        <div className="option_item_info cont">
                                            <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                            <div className="option_amount c_product_input c_product_input_count">
                                                <div className="amount-area">
                                                    <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                    <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                    <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                </div>
                                            </div>
                                            <dl className="c_prd_price">
                                                <div className="price">
                                                    <dt>판매가</dt>
                                                    <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="ctrl">
                                            <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                    <li className="option_item c_product_option_item">
                                        <div className="option_item_info cont">
                                            <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                            <div className="option_amount c_product_input c_product_input_count">
                                                <div className="amount-area">
                                                    <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                    <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                    <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                </div>
                                            </div>
                                            <dl className="c_prd_price">
                                                <div className="price">
                                                    <dt>판매가</dt>
                                                    <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="ctrl">
                                            <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="l_product_buy_result">
                                <div>
                                    <div className="total_price_area">
                                        <span className="total_cnt">총 4개</span>
                                        <span className="total_price">가격</span>
                                    </div>
                                    <div className="cupon_section">
                                        <div className="cupon_area">
                                            <span>ㄴ적용가능한 쿠폰없음</span>
                                            <button className="btn_cupon_change">쿠폰변경</button>
                                        </div>
                                        <div>
                                            <span>ㄴ무료배송</span>
                                        </div>
                                    </div>
                                    <div className="cupon_area">
                                        <button className="btn_cupon_change btn_buy">구매</button>
                                        <button className="btn_cupon_change btn_shopping_cart">장바구니</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}

                    {( isMobile ) && (
                    <div>
                        <div className="l_product_buy_result">
                        {isMobileOptionsOpen && (
                            
                                <div className="mobile-options-popup" onClick={(e) => e.stopPropagation()}>

                                    <div className="mobile-options-header">
                                        <h4>옵션 선택</h4>
                                        <button className="btn-close" onClick={handleCloseMobileOptions}>&times;</button>
                                    </div>
                                    
                                    <div className="mobile_buy_option_area">
                                        <div className="comboBox-section">
                                            <div className="comboBox">
                                                <a onClick={handleComboBox}>
                                                    <div className="comboBox-header">
                                                        <span>등급</span>
                                                        <ChevronDownIcon className={comboBox ? "rotate-180" : ""} />
                                                    </div>
                                                </a>
                                                <ul className="comboBox-option" style={{display: comboBox ? "block" : "none"}}>
                                                    <li className="comboBox-option-item">
                                                        <a onClick={() => handleComboBoxItem(1)}>
                                                            <div className="comboBox-header-option">
                                                                <span>제목</span>
                                                                <span>가격</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="comboBox-option-item">
                                                        <a onClick={() => handleComboBoxItem(9)}>
                                                            <div className="comboBox-header-option">
                                                                <span>제목</span>
                                                                <span>가격</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="comboBox-option-item">
                                                        <a onClick={() => handleComboBoxItem(9)}>
                                                            <div className="comboBox-header-option">
                                                                <span>제목</span>
                                                                <span>가격</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="comboBox-option-item">
                                                        <a onClick={() => handleComboBoxItem(9)}>
                                                            <div className="comboBox-header-option">
                                                                <span>제목</span>
                                                                <span>가격</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="comboBox-option-item">
                                                        <a onClick={() => handleComboBoxItem(9)}>
                                                            <div className="comboBox-header-option">
                                                                <span>제목</span>
                                                                <span>가격</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-options-list"> 
                                            <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                                <li className="option_item c_product_option_item">
                                                    <div className="option_item_info cont">
                                                        <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                                        <div className="option_amount c_product_input c_product_input_count">
                                                            <div className="amount-area">
                                                                <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                                <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                                <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                            </div>
                                                        </div>
                                                        <dl className="c_prd_price">
                                                            <div className="price">
                                                                <dt>판매가</dt>
                                                                <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                    <div className="ctrl">
                                                        <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                                <li className="option_item c_product_option_item">
                                                    <div className="option_item_info cont">
                                                        <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                                        <div className="option_amount c_product_input c_product_input_count">
                                                            <div className="amount-area">
                                                                <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                                <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                                <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                            </div>
                                                        </div>
                                                        <dl className="c_prd_price">
                                                            <div className="price">
                                                                <dt>판매가</dt>
                                                                <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                    <div className="ctrl">
                                                        <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="option_bottom ui_optSelWrapper  b_product_buy_selected">
                                                <li className="option_item c_product_option_item">
                                                    <div className="option_item_info cont">
                                                        <strong className="option_name">008_블러밍 스트링 자수 반팔 데님 셔츠 자켓_52SH443 / 라이트블루/FREE(55~66)[58444-1]</strong>

                                                        <div className="option_amount c_product_input c_product_input_count">
                                                            <div className="amount-area">
                                                                <button type="button" className="btn_decrs on c_product_btn c_product_btn_count1"><span className="skip">수량감소</span></button>
                                                                <input type="text" name="prdcAmount" className="text form_input" title="수량설정" value="1"/>
                                                                <button type="button" className="btn_incrs on c_product_btn c_product_btn_count2"><span className="skip">수량증가</span></button>
                                                            </div>
                                                        </div>
                                                        <dl className="c_prd_price">
                                                            <div className="price">
                                                                <dt>판매가</dt>
                                                                <dd><span className="value">26,800</span><span className="unit">원</span></dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                    <div className="ctrl">
                                                        <button type="button" className="btn_del c_product_btn c_product_btn_delete"></button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                           
                        )}
                            <div>
                                <div className="total_price_area">
                                    <span className="total_cnt">총 4개</span>
                                    <span className="total_price">가격</span>
                                </div>
                                <div className="cupon_area">
                                    <button className="btn_cupon_change btn_buy" onClick={handleOpenMobileOptions}>구매</button>
                                    <button className="btn_cupon_change btn_shopping_cart">장바구니</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}

                </div>
            </div>

            <PopUp 
                isOpen={isPopupOpen} 
                onClose={(handleClosePopup)} 
                title={"테스트"} 
                component={<Test />}
            />
        </>
    )
}

export default ProductViewPage;