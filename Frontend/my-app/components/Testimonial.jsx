import Image from "next/image"
import { users } from "../data"
import style from "../styles/Testimonial.module.css"
import Circle from "./Circle"

const Testimonial = () =>{
    return (
        <div className={style.container}>
            <Circle backgroundColor="darkblue" top="-70vh" right="0"  left="0"/>
            <h1 className={style.title}>Testimonials</h1>
            {/* <div className={style.wrapper}>
                {users.map(user =>(
                    <div className={style.card}>
                       
                    </div>
                ))}
            </div> */}
        </div>
    )
}
export default Testimonial