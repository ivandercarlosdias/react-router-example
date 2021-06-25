import { Switch, Route } from 'react-router-dom'

import Home from '../../modules/Home'
import About from '../../modules/About'
import Serv from '../../modules/Serv'
import Contact from '../../modules/Contact'
import NotFound from '../../modules/NotFound'

import './style.scss'

export default function Content(): JSX.Element {
    return (
        <main className="p-container">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services/:topic">
                    <Serv />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}
