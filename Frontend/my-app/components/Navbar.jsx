import style from "../styles/Navbar.module.css"
import { useRouter } from "next/router";

  const login = (token) =>{
    const router = useRouter();
    if(token!='')
      return (
        <button className="bg-yellow-300 hover:bg-orange-500 rounded-xl text-blue-500 hover:text-white mx-1 px-2"
                    onClick={() => {
                      router.push("/login");
                    }} > Log-in </button>)
    else return (
        <button className="bg-blue-300 hover:bg-orange-500 rounded-xl text-blue-500 hover:text-white mx-1 px-2"
                    onClick={() => {
                      router.push("/");
                    }} > Sign out</button>
      )
  }
const Navbar = () => {
    const router = useRouter();
    return (
        <div className={style.container}>
            <img src="/img/logo2.png" 
                 className="w-max h-10 "
                 alt=""
                 onClick={() => {
                    router.push("/");
                  }} />
            <ul className={style.list}>
                <li className={style.listItem}>
                <button onClick={() => {
                    router.push("/service");
                  }} 
                > Services </button>
                </li>
                <li className={style.listItem}>
                <button 
                onClick={() => {
                    router.push("/aboutus");
                  }} > About Us </button>
                </li>
            </ul>
            <div className="flex flex-wrap">
                {login()}
                </div>
        </div>
    )
}
export default Navbar
export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.token || "" } };
}