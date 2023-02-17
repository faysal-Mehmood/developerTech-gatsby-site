import React from "react";
import "./utils.scss";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationCompo = () => {
    return (
        <Stack spacing={2} className="pagination-sec">
            <Pagination count={3} shape="rounded" className="pagination-box"/>
        </Stack>
    )
 }

 export default PaginationCompo;