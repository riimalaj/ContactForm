
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return(
        <div className={navStyles.nav}>            
            <ul>
                <li>
                    <Link href = "/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href = "/About"><a>About</a></Link>
                </li>
                <li>
                    <Link href = "/CForm"><a>Formi</a></Link>
                </li>
                <li>
                    <Link href = "/api/Read"><a>Read</a></Link>
                </li>
                <li>
                    <Link href = "/ContactList"><a>Output</a></Link>
                </li>

            </ul>
        </div>
    )

}

export default Nav