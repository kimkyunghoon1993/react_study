import { Link } from "react-router-dom";
import Button from "../../commponents/button";

const CommponentsPage = () => {
    return (
        <div className="features">
            <div className="container">
                    <Button /><br/><br/>
                    <h3>아래 card 는 공통으로 사용할수 있는 공통 컴포넌트 입니다.</h3>
                <div className="features-grid">
                    <Link to="./table">
                        <div className="feature-card">
                            <div className="feature-icon">⚛️</div>
                            <h2 className="feature-title">테이블</h2>
                            <p className="feature-description">
                                공통 테이블 컴포넌트
                            </p>
                        </div>
                    </Link>
                    <Link to="./button">
                        <div className="feature-card">
                            <div className="feature-icon">⚛️</div>
                            <h2 className="feature-title">버튼</h2>
                            <p className="feature-description">
                                공통 버튼 컴포넌트
                            </p>
                        </div>
                    </Link>
                    <Link to="./pagination">
                        <div className="feature-card">
                            <div className="feature-icon">⚛️</div>
                            <h2 className="feature-title">페이지네이션</h2>
                            <p className="feature-description">
                                공통 페이지네이션 컴포넌트
                            </p>
                        </div>
                    </Link>
                    <Link to="./alert">
                        <div className="feature-card">
                            <div className="feature-icon">⚛️</div>
                            <h2 className="feature-title">Alert</h2>
                            <p className="feature-description">
                                공통 Alert 컴포넌트
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default CommponentsPage;