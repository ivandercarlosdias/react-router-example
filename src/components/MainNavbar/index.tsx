import { Link } from 'react-router-dom'
import './style.scss'

export default function MainNavbar(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services/tech">Tech Services</Link>
                </li>
                <li>
                    <Link to="/services/infra">Infra Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
