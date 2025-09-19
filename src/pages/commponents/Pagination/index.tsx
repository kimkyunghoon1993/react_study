import React, { useEffect, useState } from 'react';
import Button from '../../../commponents/button';
import ComPagination from '../../../commponents/pagination';
import axios from 'axios';
import Table from '../../../commponents/Table/Table';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const PaginationPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [columns, setColumns] = useState<string[]>([]);
    const [rowData, setRowData] = useState<(Post & { id: number })[]>([]); // id 속성 포함 보장
    

    useEffect(() => {
        const fetchPosts = async () => {

            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log('response----------------------------------------',response);

                const data: Post[] = response.data
                setPosts(response.data);

                if(data.length > 0){
                    const key = Object.keys(data[0]);
                    setColumns(key);
                }

                setRowData(data.slice(0,itemsPerPage));
            }catch(err){

            }
        }

        fetchPosts();
    },[])


    useEffect(() => {
        if (posts.length > 0) {
            const startIndex = (currentPage - 1) * itemsPerPage;  // 시작 인덱스 (예: 페이지 2 -> 10)
            const endIndex = startIndex + itemsPerPage;  // 끝 인덱스 (예: 페이지 2 -> 20)
            setRowData(posts.slice(startIndex, endIndex));  // 해당 페이지 데이터로 rowData 업데이트
        }
    }, [currentPage, posts]);  // 의존성: currentPage 또는 posts 변경 시 실행

    // 총 페이지 수 계산
    const totalPages = Math.ceil(posts.length / itemsPerPage);  // api 에서 불러온 data 의 length 나누기 itemsPerPage 의 초기 값은 10  length/10
    console.log('총 페이지 수 계산',totalPages);

    // 페이지 변경 핸들러
    const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        setCurrentPage(newPage);
    }

    return (
        <div className="features">
            <div className="container">
                <Button />
                <br/>
                <br/>
                    <h2> 페이지네이션 </h2><p>MUI 라이브 러리 및 jsonplaceholder.typicode 를 사용 하여 더미 데이터를 api 를 호출하여 페이지 네이션 </p>
                <br/>

                <Table 
                    columns={columns}
                    rowData={rowData}
                />

                <br/>
                <br/>
                <ComPagination 
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                />
            </div>
        </div>
    );
}

export default PaginationPage;