interface RowData {
    [key: string]: string | number | null; // 동적 키 허용
}

interface TableData {
    columns: string[];
    rowData: RowData[];
}

const Table = ({ columns, rowData }: TableData) => {
    console.log('전달 받은 컬럼:',columns);
    console.log('전달 받은 데이터:',rowData);

    return (
        <>
            <h2>테이블 컴포넌트</h2>
            <table className="board-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th> // 동적으로 컬럼명 렌더링
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column] ?? '-'}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;