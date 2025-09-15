import Button from '../../../commponents/button';
import ComTable from '../../../commponents/Table/Table'
import './Table.css'
const Table = () => {
    const columns = ['col1', 'col2', 'col3', 'col4', 'col5','col6'];
    // 더미 데이터 생성
    const dummyData = [
        {
            col1: 1,
            col2: '컬럼2 더미 데이터',
            col3: '더미 데이터',
            col4: '2025-09-12',
            col5: 150,
            col6: '6',
        },
        {
            col1: 2,
            col2: '컬럼2 더미 데이터',
            col3: '더미 데이터',
            col4: '2025-09-11',
            col5: 230,
            col6: '1',
        },
        {
            col1: 3,
            col2: '컬럼2 더미 데이터',
            col3: '더미 데이터',
            col4: '2025-09-10',
            col5: 80,
            col6: '8',
        },
    ];


    return (
        <div className='board-list'>
            <div className="board-header">
                <h1 className="board-title"></h1>
                <Button />
            </div>
            <ComTable
                columns={columns}
                rowData={dummyData}
            />
            <p>commponents Table 에 데이터를 넣어줄때 <br/> 
                컴럼1: 3,<br/>
                컴럼2: '세 번째 게시글',<br/>
                컴럼3: '박민수',<br/>
                컴럼4: '2025-09-10',<br/>
                컴럼5: 80,<br/>
                key 값과 일치하게 넣어줘야 list 에 출력이 된다.
            </p>
        </div>
    );
}

export default Table;