import { Link } from "react-router";
import styled from "styled-components";


const NavBar = styled.nav`
  width: 25%;
  background-color: #476f95;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: row;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    width: auto;
    gap: 20px;
    margin: auto;
    padding: 10px;
  }
`;

const NavItem = styled.li`
  border: 2px solid lightskyblue;
  border-radius: 12px;

  @media screen and (max-width: 750px) {
    flex: 0 1 auto;  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  background: #476f95;
  color: white;
  font-weight: bold;
  font-size: calc(16px + 0.3vw);
  padding: 14px 20px;
  text-decoration: none;
  border-radius: 12px;

  &:hover {
    color: #d4d4d4;
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    display: inline;
    font-size: calc(12px + 0.5vw);
    padding: 10px 6px;
    white-space: nowrap;
  }
`;

export default function Nav() {
    return (
        <NavBar>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
                <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
                <NavItem><StyledLink to="/contacts">Contact</StyledLink></NavItem>
                <NavItem><StyledLink to="/credits">Credits</StyledLink></NavItem>
            </NavList>
        </NavBar>
    );
}
