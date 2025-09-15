import Button from '../../../commponents/button';
import ComPagination from '../../../commponents/pagination';
const PaginationPage = () => {
    return (
        <div className="features">
            <div className="container">
                <Button />
                <br/>
                <br/>
                    <h2> 페이지네이션 </h2><p>MUI 라이브 러리 를 사용한 페이지 네이션</p>
                <br/>
                <ComPagination />
            </div>
        </div>
    );
}

export default PaginationPage;