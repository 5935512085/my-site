import style from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link href='/'> AKYROS </Link>
            <ul className={style.list}>
                <li className={style.listItem}>
                <Link href='/XYZ/Design'> Design </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/XYZ/Dev'> Dev </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/XYZ/DashBoard'> Dashboard </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/SYN/Education'> Education </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/SYN/Certificate'> About Me </Link>
                </li>
               

            </ul>
        </div>
    )
}
export default Navbar
