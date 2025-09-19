import { Paper } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

interface RowData {
    [key: string]: any; // 동적 키 허용
}

interface TableData {
    columns: string[];
    rowData: RowData[];
}

const paginationModel = { page:0 , pageSize:5}

const Table = ({ columns, rowData }: TableData) => {
    console.log('전달 받은 컬럼:',columns);
    console.log('전달 받은 데이터:',rowData);

    const gridColumns: GridColDef[] = columns.map((col) => ({
        field: col,
        headerName: col.charAt(0).toUpperCase() + col.slice(1) ,
        flex:1,
    }));

    return (
       <Paper sx={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={rowData}
                columns={gridColumns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5,10]}
                checkboxSelection
                sx={{ border: 0}}
                getRowId={(row) => row.id} // id 필드를 명시적으로 지정
            />
       </Paper>
    );
};

export default Table;