

export const Login =()=>{
 return(
     <div className= " bg-slate-300 w-screen h-screen ">
         <div className=" flex flex-row justify-center ">
             <div className=" flex flex-col justify-items-center justify-center my-5 py-5 mx-1  bg-blue-500 shadow-xl rounded-tl-xl rounded-bl-xl w-2/5"> 
                 <h1 className=" text-center text-5xl text-white px-2"> ลงทะเบียนสมัครสมาชิก </h1>
                 <div className="flex flex-col bg-white m-2 px-1 rounded-md py-2">
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/4">ชื่อผู้ใช้งาน :</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/4">รหัสผ่าน:</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/4">ชื่อ :</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row p-1 mx-1 ">
                            <h2 className=" w-1/4">นามสกุล :</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row p-1 mx-1">
                            <h2 className=" w-1/4">เบอร์โทรศัพท์ :</h2>
                            <input
                                className="flex w-3/4 rounded-lg  px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row p-1 mx-1">
                            <h2 className=" w-1/4"> e-mail :</h2>
                            <input
                                className="flex rounded-lg px-2 mx-2 bg-slate-200 w-3/4"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row justify-center">
                            <button className=" w-4/5 p-1 m-1 bg-yellow-300 hover:bg-red-300 rounded-lg ">
                                ลงทะเบียน
                            </button>
                            </div>
                      </div>
                 </div>
            <div className=" flex flex-col justify-items-center my-5 py-5 mx-1 bg-blue-500 shadow-xl rounded-tr-xl rounded-br-xl w-1/4">
                 <div className="flex flex-col justify-center">
                    <img src="img/Login.gif" className="flex relative w-full rounded-tl-xl rounded-bl-xl"></img>
                    <h1 className="my-2 flex flex-center text-center text-3xl text-white px-5"> ลงทะเบียนเข้าสู่ระบบ </h1>
                 </div>
                 
                 <div className="flex flex-col bg-white mx-2 px-1 rounded-md py-2">
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/3">ชื่อผู้ใช้งาน :</h2>
                            <input
                                className="flex w-2/3 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row p-1 mx-1 ">
                            <h2 className=" w-1/3">รหัสผ่าน:</h2>
                            <input
                                className="flex w-2/3 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addTask"
                            /></div>
                        <div className="flex flex-row justify-center">
                            <button className=" w-4/5 p-1 m-1 bg-yellow-300 hover:bg-red-300 rounded-lg ">
                                เข้าสู่ระบบ
                            </button>
                            </div>
                      </div>
                 </div>
            
         </div>
     </div>

 )   
}
export default Login