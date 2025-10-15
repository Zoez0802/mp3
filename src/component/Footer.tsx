import { Link } from "react-router";

export default function Footer() {
    return (
        <footer>
            <p>
                &#169; All Rights Reserved by Minjie Zuo&nbsp;
                <Link to="/Credits">Credits</Link>
            </p>
        </footer>
    );
}
