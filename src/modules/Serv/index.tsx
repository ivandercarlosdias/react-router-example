import { useParams } from 'react-router-dom'

import { IServParams } from './types'

import './style.scss'

export default function Serv(): JSX.Element {
    const { topic } = useParams<IServParams>()

    return (
        <>
            <div>Services</div>
            <p>Url params: {topic}</p>
        </>
    )
}
