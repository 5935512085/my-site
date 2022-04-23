import Image from "next/image"
import style from "../styles/Intro.module.css"

const Intro =()=>{
    return (
        <div className="flex flex-row w-screen my-7">
            <div className="flex w-2/5 flex-col mx-5">
                <h1 className={style.title}>
                    <span className={style.brand}> AKYR0S
                    </span>
                    UP-NEXDEV 
                </h1>
                <div className="m-2 flex flex-col">
                    <h1> โดดเด่น ทันสมัย รวดเร็ว</h1>
                    <h> บริการ ออกแบบ วิเคราะห์ข้อมูล พัฒนาเว็ปไซต์ แชทบอท และอื่น ๆ เหมาะสำหรับงานที่ต้องการประหยัดเวลา งานเล็กที่สำคัญไม่แพ้งานใหญ่ </h>
                    <h2> FUS : Design เทคนิคออกแบบ เอกลักษณ์</h2>
                    <h2> XYX : Design เทคนิคออกแบบ 3 ขั้นตอน</h2>
                    <h2> SYN : Design เทคนิคออกแบบ ผสานส่วน</h2>
                    <h2> PEN : Analysis เทคนิควิเคราะห์ข้อมูล 3 ขั้นตอน</h2>
                    <h2> LIN : Dev เทคนิคพัฒนางาน 3 ขั้นตอน</h2>
                    <button className={style.button}> รายละเอียดเพิ่มเติม </button>
                </div>
                
            </div>
            <div className="flex w-3/5 h-max">
                <img src="/img/banner.gif" className="w-full"/>
                <div className="flex flex-row justify-center">
                    <button className="mx-2 py-2 bg-yellow-300 hover:bg-yellow-500 rounded-lg"> ลงชื่อเข้าใช้งาน</button>
                </div>
                
            </div>
        </div>
    )
}
export default Intro