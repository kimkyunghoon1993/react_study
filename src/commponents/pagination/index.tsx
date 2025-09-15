import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

const ComPagination = () => {
    return (
        <>
            <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" color="primary" />
            </Stack>
        </>
    );
}

export default ComPagination;