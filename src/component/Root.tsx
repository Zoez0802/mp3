import "../index.css";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from"./Footer.tsx";

import Home from "./main/Home";
import Education from "./main/Education";

import Skills from "./main/Skills";
import Experience from "./main/Experience.tsx";
import Contacts from "./main/Contacts";
import { Routes, Route } from "react-router";
export default function Root(){
    return(
        <div id="page-wrapper">
            <Header/>
            <div id="container">
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`}  element={<Education/>}/>
                    <Route path={`/Experience`} element={<Experience/>}/>

                    <Route path={`/Skills`} element={<Skills/>}/>
                    <Route path={`/Contacts`} element={<Contacts/>}/>
            </Routes>
            </div>
            <Footer/>
        </div>
    )
}