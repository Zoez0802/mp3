import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./component/Root";

export default function App(){
    const router=createBrowserRouter(
        [
            {path:"*",Component:Root}
        ]
    );

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}