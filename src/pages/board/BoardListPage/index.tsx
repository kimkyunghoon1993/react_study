import { Link } from 'react-router-dom';
import './BoardListPage.css'
import Table from '../../../commponents/Table/Table';
import ComPagination from '../../../commponents/pagination';
import { useEffect, useState } from 'react';
import Button from '../../../commponents/button';

type BoardItem = {
    id: number;
    제목: string;
    작성자: string;
    작성일: string;
    조회수: number;
};

const BoardListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [rowData, setRowData] = useState<BoardItem[]>([]);

    const columns = ['id', '제목', '작성자', '작성일', '조회수'];
    const dummyData: BoardItem[] = [
        {
            id: 1, 
            제목: '첫 번째 게시글',
            작성자: '김철수',
            작성일: '2025-09-12',
            조회수: 150,
        },
        {
            id: 2,
            제목: '두 번째 게시글',
            작성자: '이영희',
            작성일: '2025-09-11',
            조회수: 230,
        },
        {
            id: 3,
            제목: '세 번째 게시글',
            작성자: '박민수',
            작성일: '2025-09-10',
            조회수: 80,
        },
    ];

    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    // 페이지 변경 시 rowData 업데이트
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setRowData(dummyData.slice(startIndex, endIndex));
    }, [currentPage]);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    }


    return (
        <div className='board-list'>
            <br/>
            <div className="board-header">
                <h1 className="board-title">게시글 리스트</h1>
                <Button/>
                <Link to={'./new'}>
                    <button className="write-button">글쓰기</button>
                </Link>
            </div>
            <Table
                columns={columns}
                rowData={rowData}
            />

            <br />
            <ComPagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color='primary'
            />
        </div>
    )
}

export default BoardListPage;