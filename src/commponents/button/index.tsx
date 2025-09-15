import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1); // 이전 페이지로 이동
        }


    }
    return (
        <>
            <button className="write-button" onClick={handleGoBack}>이전</button>
        </>
    );
}

export default Button;