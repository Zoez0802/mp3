import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1100px;
  padding: 16px;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ProfileImg = styled.img`
    max-width: 40%;
    height: auto;
    border-radius: 10px;
    border: 3px solid #476f95;
`;

const AboutMe = styled.p`
  font-size: calc(12px + 0.2vw);
  color: #111;
  max-width: 600px;
  line-height: 1.6;
`;

const H2 = styled.h2`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: calc(20px + 0.5vw);
  padding-left: 40px;
`;


export default function Home() {
    return (
        <Main id="main-content">
            <H2>Home</H2>
            <Intro className="intro">
                <ProfileImg src="Zoe.jpg" alt="Zoe Zuo" />
                <AboutMe id="about-me">
                    Hi, I’m Minjie (Zoe) Zuo. This website is my personal portfolio and resume,
                    <br/>
                    I’m currently a senior student at Boston University majoring in Computer Science.
                    <br/>
                    Always aiming to find effective solutions while staying open to learning something new.
                    <br/>
                    I believe that <u>NOTHING</u> is unsolvable with time and dedication!
                    <br/>
                    Diving into the diverse fields of computer science and actively seeking more opportunities to gain
                    hands-on experience in the tech industry.
                    <br/>
                    Passionate about <u>learning</u>, <u>growing</u>, and <u>building</u> meaningful connections with
                    individuals and professionals who share interests in the technical side of CS.
                </AboutMe>
            </Intro>
        </Main>
    );
}







