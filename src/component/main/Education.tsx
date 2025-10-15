import bu from "../../../public/Boston_University.png";
<img src={bu} alt="University" />
//for my images on the web page

import styled from "styled-components";

const EducationMain = styled.main`
`;

const Box = styled.section`
  margin-top: 5%;
  margin-left: 4%;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 18px;

  h3 {
    margin: 0 0 6px 0;
    font-size: calc(16px + 0.2vw);
  }

  p {
    margin: 4px 0 10px 0;
    font-style: italic;
    color: #49596d;
    font-size: calc(12px + 0.2vw);
    border-left: 6px solid #476f95;
    padding-left: 8px; 
  }

  li {
    margin: 6px 0;
    font-size: calc(12px + 0.2vw);
  }
`;

const CImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
`;

const H1 = styled.h1`
    margin-top: 40px;
    padding-left: 20px;
`;


export default function Education() {
    return (
        <EducationMain>
            <H1>Educations</H1>

            <Box id="college">
                <h3>Boston University</h3>
                <p>Boston, MA — Expected Graduation: May 2026</p>
                <ul>
                    <li>Enrolled in Spring 2023 as a freshman in the College of General Studies</li>
                    <li>Studied a blend of liberal arts courses and computer science foundation classes during the first two years</li>
                    <li>Completed a study abroad program in <strong>London</strong> during Summer 2023</li>
                    <li>Currently a senior pursuing a <strong>Computer Science major</strong></li>
                </ul>
                <CImg src="Boston_University.png" alt="University" />
            </Box>

            <Box id="high-school">
                <h3>New Utrecht High School</h3>
                <p>Brooklyn, NY — Graduated June 2022</p>
                <ul>
                    <li>High school diploma</li>
                    <li>Actively participated in various academic and extracurricular activities</li>
                </ul>
            </Box>
        </EducationMain>
    );
}

