import style from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={style.container}>
            <img src="/img/logo2.png" href ='/' className="w-max h-10 "
                alt=""  />
            <ul className={style.list}>
                <li className={style.listItem}>
                <Link href='/XYZ/Design'> Services </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/XYZ/DashBoard'> Dashboard </Link>
                </li>
                <li className={style.listItem}>
                <Link href='/SYN/Education'> About Us </Link>
                </li>
                <li className={style.listItem}>
                <Link href="/Log-in"> Log-in </Link>
                </li>
               

            </ul>
        </div>
    )
}
export default Navbar
