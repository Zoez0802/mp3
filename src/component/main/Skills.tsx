// src/component/main/Skills.tsx
import styled from "styled-components";



const SkillsSection = styled.section`
    margin: 30px 40px;
`;

const SkillCard = styled.div`
    background: #ffffff;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
    margin-top: 20px;
    margin-bottom: 50px;

    h3 {
        margin: 0 0 12px 0;
        font-size: calc(16px + 0.2vw);
    }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin: 6px 8px 0 0;
    padding: 8px 14px;
    background: #fdf3d8;
    border: 1px solid #f3d694;
    border-radius: 666px;
    font-size: calc(12px + 0.2vw);
    color: #444;
  }
`;

const H2 = styled.h2`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: calc(20px + 0.5vw);
  padding-left: 40px;
`;

export default function Skills() {
    return (
        <main>
            <H2>Skills</H2>

            <SkillsSection id="skills">
                <SkillCard>
                    <h3>Technical</h3>
                    <SkillList>
                        <li>Python</li>
                        <li>Java</li>
                        <li>OCaml</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Microsoft Office</li>
                        <li>Google Suite</li>
                    </SkillList>
                </SkillCard>

                <SkillCard>
                    <h3>Communication &amp; Interpersonal</h3>
                    <SkillList>
                        <li>Bilingual (English &amp; Chinese)</li>
                        <li>Problem-solving</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                        <li>Creativity</li>
                        <li>Collaboration</li>
                    </SkillList>
                </SkillCard>
            </SkillsSection>
        </main>
    );
}
