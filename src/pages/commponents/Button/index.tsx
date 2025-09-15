import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1); // 이전 페이지로 이동
        }
    }
    return (
        <div className="features">
            <div className="container">
                <div className="features-grid">
                    <h2>버튼 컴포넌트</h2>
                    <p>버튼 컴포넌트 기능 설명 :<br/> 버튼 컴포넌트 이전 페이지 로 돌아갈수 있는 기능</p>
                    <button className="write-button" onClick={handleGoBack}>이전</button>
                </div>
            </div>
        </div>
    );
}

export default Button;