import { Link } from 'react-router-dom';
import './BoardListPage.css'
import Table from '../../../commponents/Table/Table';

const BoardListPage = () => {
    const columns = ['번호', '제목', '작성자', '작성일', '조회수'];
    const dummyData = [
        {
            번호: 1,
            제목: '첫 번째 게시글',
            작성자: '김철수',
            작성일: '2025-09-12',
            조회수: 150,
        },
        {
            번호: 2,
            제목: '두 번째 게시글',
            작성자: '이영희',
            작성일: '2025-09-11',
            조회수: 230,
        },
        {
            번호: 3,
            제목: '세 번째 게시글',
            작성자: '박민수',
            작성일: '2025-09-10',
            조회수: 80,
        },
    ];

    return (
        <div className='board-list'>
            <div className="board-header">
                <h1 className="board-title">게시글 리스트</h1>
                <Link to={'./new'}>
                    <button className="write-button">글쓰기</button>
                </Link>
            </div>
            <Table
                columns={columns}
                rowData={dummyData}
            />
        </div>
    )
}

export default BoardListPage;