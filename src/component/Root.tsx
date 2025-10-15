import "../index.css";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from"./Footer.tsx";

import Home from "./main/Home";
import Education from "./main/Education";
import Credits from "./main/Credits";
import Skills from "./main/Skills";
import Experience from "./main/Experience.tsx";
import Contacts from "./main/Contacts";
import Projects from "./main/Projects";
import { Routes, Route } from "react-router";

import styled, { createGlobalStyle } from "styled-components";

//In my old css, any element is styled together so I also create in Root to match
const Global = createGlobalStyle`
    body {
        font-family: "Epunda Slab", serif;
        font-style: normal;
        background: #d1dbe4;
        margin: 0;
        padding-top: 10px;
    }
    @media screen and (max-width: 750px) {
        p br {
            display: none;
            height: auto;
        }
    }
`;

/*#page-wrapper */
const PageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

/* replaces #container */
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;


const Main = styled.main`
    width: 70%;
    height: 100vh;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin: 0 auto;
    }
`;

export default function Root() {
    return (
        <>
            <Global/>
            <PageWrapper id="page-wrapper">
                <Header />
                <Container id="container">
                    <Nav />
                    <Main>
                        <Routes>
                            <Route path={`/`} element={<Home />} />
                            <Route path={`/education`} element={<Education />} />
                            <Route path={`/Experience`} element={<Experience />} />
                            <Route path={`/Credits`} element={<Credits />} />
                            <Route path={`/Skills`} element={<Skills />} />
                            <Route path={`/Contacts`} element={<Contacts />} />
                            <Route path={`/Projects`} element={<Projects />} />
                        </Routes>
                    </Main>
                </Container>
                <Footer />
            </PageWrapper>
        </>
    );
}