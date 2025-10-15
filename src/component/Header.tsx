import styled from "styled-components";

const StartsHeader = styled.header`
    background: #000000;
    color: white;
    padding: 10px 40px;
`;

const H1 = styled.h1`
    margin-top: 20px;
    padding-left: 20px;
`;


export default function Header() {
    return (
        <StartsHeader className="starts">
            <H1>Minjie(Zoe) Zuo</H1>
            <p> Hi! This is a resume website where i am going to showcase my skills, education, work experience, and projects through a modern personal portfolio.</p>
        </StartsHeader>
    );
}
