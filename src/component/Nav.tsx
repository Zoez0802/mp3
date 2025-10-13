import {Link} from "react-router";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/Education`}>Education</Link></li>
                <li><Link to={`/Experience`}>Experience</Link></li>
                <li><Link to={`/Projects`}>Projects</Link></li>
                <li><Link to={`/Skills`}>Skills</Link></li>
                <li><Link to={`/Contacts`}>Contacts</Link></li>


            </ul>
        </nav>
    );
}
