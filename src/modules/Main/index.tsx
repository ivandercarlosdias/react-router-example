import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainNavbar from '../../components/MainNavbar'
import './style.scss'

export default function App() {
    return (
        <div className="main">
            <Header>
                <MainNavbar></MainNavbar>
            </Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}
