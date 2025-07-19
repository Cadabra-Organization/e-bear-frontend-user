import { useState } from "react";
import "./TermsAgreement.css";

function TermsAgreement() {
    const [checkedItems, setCheckedItems] = useState({
        age: false,
        terms: false,
        privacy: false,
        marketing: false,
    });

    const [allChecked, setAllChecked] = useState(false);

    const handleChange = (e) => {
        const { id, checked } = e.target;
        setCheckedItems((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const handleAllCheck = () => {
        setAllChecked(!allChecked);
        setCheckedItems({
            age: !allChecked,
            terms: !allChecked,
            privacy: !allChecked,
            marketing: !allChecked,
        });
    };

    return (
        <div className="terms-agreement-container">
            <div>
                <h1 className="terms-agreement-title">eBear</h1>
            </div>
            <div>
                <p className="terms-agreement-guide">지금 회원가입하고 <br />다양한 서비스를 만나보세요!</p>
                <div className="agreement-specific">
                    <label htmlFor="age">
                        <input className="agreement-checkbox"
                            type="checkbox"
                            id="age"
                            checked={checkedItems.age}
                            onChange={handleChange} />
                        <span className="agreement-checkbox-span"></span>
                        <span className="agreement-checkbox-text">[필수] 만 14세 이상</span>
                    </label>
                    <label htmlFor="terms">
                        <input className="agreement-checkbox"
                            type="checkbox"
                            id="terms"
                            checked={checkedItems.terms}
                            onChange={handleChange} />
                        <span className="agreement-checkbox-span"></span>
                        <span className="agreement-checkbox-text">[필수] 이용약관 동의  <a href="#">보기</a></span>
                    </label>
                    <label htmlFor="privacy">
                        <input className="agreement-checkbox"
                            type="checkbox"
                            id="privacy"
                            checked={checkedItems.privacy}
                            onChange={handleChange} />
                        <span className="agreement-checkbox-span"></span>
                        <span className="agreement-checkbox-text">[필수] 개인정보 처리방침 동의  <a href="#">보기</a></span>
                    </label>
                    <label htmlFor="marketing">
                        <input className="agreement-checkbox"
                            type="checkbox"
                            id="marketing"
                            checked={checkedItems.marketing}
                            onChange={handleChange} />
                        <span className="agreement-checkbox-span"></span>
                        <span className="agreement-checkbox-text">[선택] 광고성 정보 수신 및 마케팅 활용 동의  <a href="#">보기</a></span>
                    </label>
                </div>
                <label htmlFor="agreeAll">
                    <input className="agreement-checkbox"
                        type="checkbox"
                        id="agreeAll"
                        checked={allChecked}
                        onChange={handleAllCheck} />
                    <span className="agreement-checkbox-span"></span>
                    <span className="agreement-checkbox-text">모두 확인하였으며 동의합니다.</span>
                </label>
                <p className="agreement-description">전체 동의에는 선택 항목에 대한 동의가 포함되어 있습니다. 개별적으로 동의를 할 수 있으며, 선택 항목에 대한 동의를 거부하는 경우에도 서비스 이용이 가능합니다.</p>
                <button
                    className="agreement-button"
                    disabled={!checkedItems.age || !checkedItems.terms || !checkedItems.privacy}>동의하고 시작하기</button>
            </div>
        </div>
    )
}

export default TermsAgreement;