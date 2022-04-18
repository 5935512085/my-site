import style from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
    return (
        <div className={style.container}>
            <Image src="/img/logo2.png" href ='/' height="60px" width="180px"
                alt=""  />
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
