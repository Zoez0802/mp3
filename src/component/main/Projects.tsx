import styled from "styled-components";
import Calculator from "../main/Calculator/Calculator";

const ProjectMain = styled.main`
  margin: 30px 40px;
`;


const H1 = styled.h1`
    margin-top: 40px;
    padding-left: 20px;
`;


export default function Project() {
    return (
        <ProjectMain className="projects-main">
            <H1>Projects</H1>
            <p>
                More projects will show up here once I find more time this semester......
                For now: <strong>a JS calculator!</strong>
            </p>
            <br />
            <Calculator />
        </ProjectMain>
    );
}
