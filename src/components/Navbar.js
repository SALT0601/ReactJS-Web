import styles from "../components/Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className={ styles.nav }>
            <Link className={ styles.a } to="/">Home</Link>
        </div>
    )
}

export default Navbar