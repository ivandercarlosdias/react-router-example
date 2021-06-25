import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../../components/Header'
import MainNavbar from '../../components/MainNavbar'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

import './style.scss'

export default function App(): JSX.Element {
    return (
        <div className="main">
            <Router>
                <Header>
                    <MainNavbar></MainNavbar>
                </Header>
                <Content></Content>
                <Footer></Footer>
            </Router>
        </div>
    )
}
