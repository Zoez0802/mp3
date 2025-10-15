import styled from "styled-components";

const Credit = styled.main`
  margin: 30px 40px;
`;

const H1 = styled.h1`
    margin-top: 40px;
    padding-left: 20px;
`;


export default function Credits() {
    return (
        <Credit>
            <H1>Credits</H1>
            <p>Website designed and developed by Minjie (Zoe) Zuo. 2025.</p>
            <p>
                Fonts from{" "}
                <a href="https://fonts.google.com/" target="_blank">
                    Google Fonts
                </a>
            </p>
        </Credit>
    );
}