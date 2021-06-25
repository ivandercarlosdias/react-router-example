import { IChildrenProps } from '../MainNavbar/type'

import './style.scss'

export default function Header(props: IChildrenProps): JSX.Element {
    return <header className="p-container">{props.children}</header>
}
