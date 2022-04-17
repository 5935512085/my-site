import Image from "next/image"
import style from "../styles/Intro.module.css"
import Circle from "./Circle"

const Intro =()=>{
    return (
        <div className={style.container}>
            <Circle backgroundColor="yellow" top="-50vh" left="-50vh" />
            <Circle backgroundColor="yellow" right="-40vh" />
            <div className={style.card}>
                <h1 className={style.title}>
                    <span className={style.brand}> AKYR0S
                    </span>
                    Graphic Design
                </h1>
                <p className={style.descrip}>
                    บริการออกแบบงานกราฟฟิก โลโก้ โปสเตอร์ เมนูอาหาร แบนเนอร์ ปกหนังสือและอื่น ๆ 
                </p>
                <button className={style.button}> รายละเอียดเพิ่มเติม </button>
            </div>
            <div className={style.card}>
                <Image src="/img/person.png" 
                width="100%" hight="100%" 
                layout="fill" 
                objectFit="cover"
                alt=""/>
            </div>
        </div>
    )
}
export default Intro