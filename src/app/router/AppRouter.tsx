import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../../pages/HomePage";
import BoardListPage from "../../pages/board/BoardListPage";
import BoardWritePage from "../../pages/board/BoardWritePage";
import CommponentsPage from "../../pages/commponents";
import TablePage from "../../pages/commponents/Table";
import ButtonPage from "../../pages/commponents/Button";
import PaginationPage from "../../pages/commponents/Pagination";
import { ComAlert } from "../../pages/commponents/alert";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "board",
                children: [
                    {
                        index: true,
                        element: <BoardListPage />
                    },
                    {
                        path: "new",
                        element: <BoardWritePage />
                    },
                ]
            },
            {
                path: "commponents",
                children: [
                    {
                        index: true,
                        element: <CommponentsPage />
                    },
                    {
                        path: "table",
                        element: <TablePage />
                    },
                    {
                        path: "button",
                        element: <ButtonPage />
                    },
                    {
                        path: "pagination",
                        element: <PaginationPage />
                    },
                    {
                        path: "alert",
                        element: <ComAlert />
                    },
                ]
            },
        ]
    },
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );

}

export default AppRouter;