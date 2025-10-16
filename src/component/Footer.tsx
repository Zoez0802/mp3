import { Link } from "react-router";
import styled from "styled-components";


const Foot = styled.footer`
    margin-top: 120px;
    text-align: center;
    background-color: #476f95;
    color: white;
    flex-wrap: wrap;

    p {
        margin: 0;
        padding: 8px 10px;
    }

    a {
        color: white;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }

    @media screen and (max-width: 750px) {
        margin-top: 24px;
        padding: 8px 10px;
    }
`;


export default function Footer() {
    return (
        <Foot>
            <p>
                &#169; All Rights Reserved by Minjie Zuo&nbsp;
                <Link to="/Credits">Credits</Link>
            </p>
        </Foot>
    );
}
