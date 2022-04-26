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
   
   console.log("This is in tasks",tasks)
   async function GETT(){
    const res = await fetch(`http://localhost/api/designorder`)
    const json = await res.json()
    console.log("This json data",json)
    return json;
}
const getTasks = () => {
    return GETT()
 }     

 async function GetTasks(){
     let ts = await getTasks();
     ts = ts.data.tasks
     console.log(ts)
     console.log("This is ts",ts) 
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
    const task = tasks.find((task) => +task.id === +id)
            setSur(task.survice)
            setNam(task.namepro)
            setSig(task.sign)
            setPri(task.price)
            setSty(task.style)
            setDes(task.desc)
            setCon(task.content)
            setCol(task.color)
            setDue(task.due)
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
        if(tasks.length <= 9 && tasks != ''){
            setTasks([...tasks, { id:tasks.length <= 0 ? 1 : tasks[tasks.length - 1].id + 1, service, namepro, sign, price, style, desc, color, due, content}])
            console.log(tasks)
        }  }

    
    const renderTasks = () => {
        if (tasks && tasks.length){
            return tasks.map((task, index) => (
                <li key={index} className="relative bg-orange-200 m-4 border-2 border-double p-8 rounded-lg drop-shadow-lg w-screen">
                    <div className="flex flex-col bottom-0 right-0 text-4xl mr-2 "> Order No: {index}</div>
                    {(idEdit !== task.id) ?
                        <div className="text-lg justify-center">
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>ชื่องาน</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.namepro}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>ประเภทงาน</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.survice}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>สไตล์งาน</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.style}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>ธีมสีที่ใช้</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.color}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>สัญลักษณ์</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.sign}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>เนื้อหาหลักที่ใช้</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.content}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>รายละเอียดเพิ่มเติม</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.desc}</h1>
                            </div>
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>งบประมาณจ้างงาน</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.price}</h1>
                            </div>
                            
                            <div className='flex flex-row'>
                                <h1 className='flex px-2 w-1/5'>วันที่รับงาน</h1>
                                <h1 className='flex px-2 py-1 bg-orange-100 w-4/5 border-b-2 border-dashed border-gray-300'>{task.due}</h1>
                            </div>
                            
                            <p className=' bg-orange-400 px-3 py-2 text-lg my-2'> สถานะ: กำลังตรวจสอบ ..</p>
                            </div> :
                        <div className=' flex flex-col px-2 py-2'>
                            <div className='flex flex-row py-2 px-2'>
                            <h1 className='text-xl  w-1/3'> ชื่องาน </h1>
                                <input
                                    className="rounded-lg  w-2/3 pl-2 ml-2 mr-4"
                                    type="text"
                                    name="addTask"
                                    placeholder='ชื่อโครงการ หรือ ชื่องาน'
                                    onChange={(e) => (setNam(e.target.value))}/>
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