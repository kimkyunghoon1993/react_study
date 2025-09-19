import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

interface ComPaginationProps {
    count: number;
    page: number;
    onChange: (_event: React.ChangeEvent<unknown>, newPage: number) => void;
    color?: 'primary' | 'secondary' | 'standard';
}

const ComPagination = ({ count, page, onChange,  color = 'primary' }: ComPaginationProps) => {
    return (
        <Stack spacing={2} alignItems="center">
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                color={color}
                showFirstButton
                showLastButton
            />
        </Stack>
    );
};

export default ComPagination;