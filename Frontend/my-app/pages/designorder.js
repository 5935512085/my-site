import { useEffect,useState } from 'react'
import axios from "axios";
import config from "../config/config";

const designorder= ({token}) => {
   const [tasks, setTasks] = useState([])
   const [service, setSur] = useState('')
   const [namepro, setNam] = useState('')
   const [sign, setSig] = useState('')
   const [price, setPri] = useState('')
   const [style, setSty] = useState('')
   const [desc, setDes] = useState('')
   const [content, setCon] = useState('')
   const [color, setCol] = useState('')
   const [due, setDue] = useState('')
   const [idEdit, setIdEdit] = useState()

   async function GETT(){
    const res = await fetch(`localhost/designorder`)
    const json = await res.json()
    console.log("This json data",json)
    return json;
}
const getTasks = () => {
    return GETT()
 }     

 async function GetTasks(){
     let ts = await getTasks();
     console.log(ts)
     console.log("This ts",ts) 
     return setTasks(ts)
 }

 useEffect(() => {
        GetTasks();
    }, [] 
    )


    const deleteTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !== +id)
    setTasks(newTasks)
}

    const editTask = (id) => {
    setIdEdit(id)
    const t = tasks.find((task) => +task.id === +id)
            setSur(t.survice)
            setNam(t.namepro)
            setSig(t.sign)
            setPri(t.price)
            setSty(t.style)
            setDes(t.desc)
            setCon(t.content)
            setCol(t.color)
            setDue(t.due)
    if (+idEdit === +id) { //Press Edit again
        let newTasks = tasks.map((task, index) => {
            if (+task.id === +id){
                tasks[index].service = service
                tasks[index].namepro = namepro
                tasks[index].sign = sign 
                tasks[index].price = price
                tasks[index].style = style
                tasks[index].desc = desc
                tasks[index].color = color
                tasks[index].due = due
            }
            return task
        })
        setTasks(newTasks)
        setIdEdit(0)
    }}

    const addTask = (id) => {
        if (service == "" || namepro =="")
           return;
        if (tasks.length == 0)
           setTasks([{ id: 0,survice:'draft', namepro:'draft' }]);
        if(tasks.length <= 9 && tasks != ''){
            setTasks([...tasks, { id:tasks.length <= 0 ? 1 : tasks[tasks.length - 1].id + 1, service,namepro,sign,price,style,desc,color,due,content}])
            console.log(tasks)
        }  }

    
    const renderTasks = () => {
        if (tasks !== ''){
            return tasks.map((task, index) => (
                <li key={index} className="relative bg-orange-200 m-4 border-2 border-double p-8 rounded-lg drop-shadow-lg w-screen">
                    <div className="flex flex-col bottom-0 right-0 text-xl mr-2 text-white ">{index+1}</div>
                    {(idEdit !== task.id) ?
                        <div className="text-lg justify-center">
                            <h1>{tasks.namepro}</h1>
                            <h1>{tasks.survice}</h1>
                            <h1>{tasks.style}</h1>
                            <h1>{tasks.color}</h1>
                            <h1>{tasks.sign}</h1>
                            <h1>{tasks.desc}</h1>
                            <h1>{tasks.price}</h1>
                            <h1>{tasks.due}</h1>
                            <p> สถานะ: กำลังตรวจสอบ ..</p>
                            </div> :
                        <div className=' flex flex-col px-2 py-2'>
                            <div className='justify-center'>
                            <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="namepro"
                            placeholder='ชื่องาน'
                            value={namepro}
                            onChange={(e) => setNam(e.target.value)}
                            />
                            <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="survice"
                            placeholder='ประเภทบริการ'
                            value={service}
                            onChange={(e) => setSur(e.target.value)}
                        />
                        <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="style"
                            placeholder='รูปแบบมาตรฐาน ลายเส้น'
                            value={style}
                            onChange={(e) => setSty(e.target.value)}
                        />
                        <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="color"
                            placeholder='สีหรือธีมสีที่ใช้'
                            value={color}
                            onChange={(e) => setCol(e.target.value)}
                        /> 
                        <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="content"
                            placeholder='คอนเซป หรือ ธีมเนื้อหาหลัก'
                            value={content}
                            onChange={(e) => setCon(e.target.value)}
                        />
                        <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="description"
                            placeholder='รายละเอียดเพิ่มเติม'
                            value={desc}
                            onChange={(e) => setDes(e.target.value)}
                        />
                         <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="price"
                            placeholder='งาบประมาณ(บาท)'
                            value={price}
                            onChange={(e) => setPri(e.target.value)}
                        />
                         <input
                            className="w-1/2 bg-yellow-200 text-xl text-black border-2 rounded-lg"
                            type="text"
                            name="due"
                            placeholder='วัน/เดือน/ปี ที่จะรับงาน'
                            value={due}
                            onChange={(e) => setDue(e.target.value)}
                        />
                            
                        </div>
                        </div>
                       
                    }
                    <div className="mt-8 flex justify-center" >
                        <button
                            className="w-1/2 mr-4 p-2 text-black hover:text-white bg-yellow-400 hover:bg-yellow-500  rounded-lg drop-shadow-lg"
                            onClick={() => editTask(task.id)}>
                            แก้ไข
                        </button>
                        <button
                            className="w-1/2 p-2 text-black hover:text-white bg-red-400 hover:bg-red-500 rounded-lg drop-shadow-lg"
                            onClick={() => deleteTask(task.id)}>
                            ลบ
                        </button>
                    </div>
                </li>))
        }else if(tasks === null){
            return tasks.map()
        }
    
    }


return (
    <div  className="bg-state-300 flex px-5 py-5">
        <div className="flex flex-col justify-center px-5 py-7 border-2 rounded-lg shadow-lg bg-yellow-200">
            <h1 className="text-4xl justify-center my-2"> ใบสั่งจัดทำ </h1>
           <div className='flex flex-row py-2 px-2'>
               <h1 className='text-xl  w-1/3'> ชื่องาน </h1>
                <input
                    className="rounded-lg  w-2/3 pl-2 ml-2 mr-4"
                    type="text"
                    name="addTask"
                    placeholder='ชื่อโครงการ หรือ ชื่องาน'
                    onChange={(e) => (setNam(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lgw-1/3 '> ประเภทบริการ </h1>
                <input
                    className=" rounded-lg w-2/3 pl-2 ml-2 mr-4"
                    type="text"
                    name="addsurvice"
                    placeholder='ออกแบบโลโก้ หรือ อื่น ๆ'
                    onChange={(e) => (setSur(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lg w-1/3'> รูปแบบให้ทำ </h1>
                <input
                    className="rounded-lg w-2/3 pl-2 ml-2 mr-4"
                    type="text"
                    name="addstyle"
                    placeholder='คลาสสิก ลายเส้น มาตรฐาน'
                    onChange={(e) => (setSty(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lg w-1/3'> ชุดสี </h1>
                <input
                    className="rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="addColors"
                    placeholder='สีดำ แดง เหลือง'
                    onChange={(e) => (setCol(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lg w-1/3'> รูปแบบสัญลักษณ์ </h1>
                <input
                    className="rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="addSign"
                    placeholder='รูปนกบิน'
                    onChange={(e) => (setSig(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lg w-1/3 '> เนื้อหาหลักที่ใช้ </h1>
                <input
                    className="rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="addContent"
                    placeholder='คอนเซปงาน ธีม'
                    onChange={(e) => (setCon(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2 '>
               <h1 className='text-lg w-1/3'> อธิบายเพิ่มเติม </h1>
                <input
                    className="rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="addDec"
                    placeholder='รายละเอียดงานอื่น ๆ'
                    onChange={(e) => (setDes(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className='text-lg w-1/3 '>รับงานภายในวันที่ </h1>
                <input
                    className="rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="adddue"
                    placeholder='วัน/เดือน/ปี'
                    onChange={(e) => (setDue(e.target.value))}
                />
               </div> 
               <div className='flex flex-row py-2 px-2'>
               <h1 className=' text-lg w-1/3'>งบประมาณงาน </h1>
                <input
                    className=" rounded-lg pl-2 ml-2 mr-4 w-2/3"
                    type="text"
                    name="adddue"
                    placeholder='จำนวนเงิน(บาท)'
                    onChange={(e) => (setPri(e.target.value))}
                />
               </div>

            <button
                className="w-1/3 bg-blue-400 text-black hover:text-white hover:bg-blue-500 p-2 rounded-lg"
                onClick={() => {
                    addTask({service,namepro,sign,price,style,desc,color,due,content})
                    }}>สั่งทำ</button>
        </div>
        <ul className="flex flex-wrap justify-start mb-8 w-1/2">
            {renderTasks()}
        </ul>
    </div>
)
}

export default designorder
export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
  }