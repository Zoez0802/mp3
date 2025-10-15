import styled from "styled-components";

const Timeline = styled.section`
    /* #timeline */
    border-left: 4px solid orange;
    margin: 30px 40px;
    padding-left: 20px;
`;

const Item = styled.div`
    /* #timeline div */
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    padding: 12px 16px;
    margin-bottom: 20px;

    /* #timeline h3 */
    h3 {
        margin: 0 0 4px 0;
        color: black;
    }

    /* #timeline p */
    p {
        margin: 2px 0 8px 0;
        font-style: italic;
        color: gray;
    }

    /* #timeline li */
    li {
        margin: 4px 0;
    }
`;

const H2 = styled.h2`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: calc(20px + 0.5vw);
  padding-left: 40px;
`;


export default function Experience() {
    return (
        <main className="timeline">
            {/* h2 spacing/size comes from your global CSS */}
            <H2>Experience</H2>

            <Timeline id="timeline">
                <Item>
                    <h3>May–Aug 2025 : Program Monitor</h3>
                    <p>Chinese American Planning Council · Brooklyn, NY</p>
                    <ul>
                        <li>Coordinated enrollment/compliance for a DYCD-funded youth employment program.</li>
                        <li>Ran site visits; evaluated supervision quality and tracked participant outcomes.</li>
                        <li>Led orientations/workshops on job readiness and workplace skills.</li>
                    </ul>
                </Item>

                <Item>
                    <h3>May–Aug 2024 : Software Development Intern</h3>
                    <p>Alphabet Inc. · Remote</p>
                    <ul>
                        <li>Contributed to backend API design and database integration on a web platform.</li>
                        <li>Implemented JWT-based authentication and access control.</li>
                        <li>Troubleshot and resolved issues in a fast, collaborative environment.</li>
                    </ul>
                </Item>

                <Item>
                    <h3>Nov 2023 : BostonHacks Winner</h3>
                    <p>Boston, MA</p>
                    <ul>
                        <li>
                            Developed a JRPG-inspired game using JavaScript and p5.js, incorporating HTML and CSS for
                            styling and interface design.
                        </li>
                        <li>
                            Implemented interactive gameplay features, including NPC dialogues, quest progression, and
                            narrative-driven exploration.
                        </li>
                    </ul>
                </Item>
            </Timeline>
        </main>
    );
}

