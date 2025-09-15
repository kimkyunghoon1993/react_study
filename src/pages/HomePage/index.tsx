import { Link } from 'react-router-dom';
import './Hompage.css'

const HomPage = () => {
    return (
        <>
            <h1>Vite + React + Spring Boot 프로젝트</h1>
            <div className="home">
                <div className="hero">
                    <div className="container">

                        <p className="hero-description">
                            React 연습용
                        </p>
                    </div>
                </div>

                <div className="features">
                    <div className="container">
                        <div className="features-grid">
                            <Link to="/board">
                                <div className="feature-card">
                                    <div className="feature-icon">⚡</div>
                                    <h2 className="feature-title">게시판</h2>
                                    <p className="feature-description">
                                    게시판 list 화면으로 이동
                                </p>
                                </div>
                            </Link>
                            <Link to="/commponents">
                                <div className="feature-card">
                                    <div className="feature-icon">⚛️</div>
                                    <h2 className="feature-title">공통 컴포넌트</h2>
                                    <p className="feature-description">
                                    공통 컴포넌트 
                                </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <div>
          <Calendar onDateSelect={handleDateSelect} />
        </div> */}
                </div>
            </div>
        </>
    );
}

export default HomPage;