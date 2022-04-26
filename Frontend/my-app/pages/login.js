
import React, { useState } from 'react'
import axios from 'axios'
import config from "../config/config";
import { useRouter } from "next/router";

export const login =({token})=>{

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const register = async () => {
        let result = await axios
          .post(
            `${config.URL}/login`,
            { username, password, email,name,surname,phone },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            router.push("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const loginform = () => {
          return (
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
                           placeholder='User ID'
                           onChange={(e) => setUsername(e.target.value)} 
                       /></div>
                   <div className="flex flex-row p-1 mx-1 ">
                       <h2 className=" w-1/3">รหัสผ่าน:</h2>
                       <input
                           className="flex w-2/3 rounded-lg px-2 mx-2 bg-slate-200"
                           type="text"
                           name="addTask"
                           placeholder='Password'
                           onChange={(e) => setPass(e.target.value)}
                       /></div>
                   <div className="flex flex-row justify-center">
                       <button className=" w-4/5 p-1 m-1 bg-yellow-300 hover:bg-red-300 rounded-lg "
                           onClick={() => logincheck()}>
                           เข้าสู่ระบบ
                       </button>
                       </div>
                 </div>
            </div>
          );
      };
      const logincheck = async (req, res) => {
        let result = await axios
          .post(
            `${config.URL}/login`,
            { username, password },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
           // localStorage.setUsers("userid", res.data.user.id);
            window.location.replace("/service");
          })
          .catch((error) => {
            console.log(error);
          });
      };

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
                                name="addUser"
                                placeholder="User ID"
                                onChange={(e) => setUsername(e.target.value)}
                            /></div>
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/4">รหัสผ่าน:</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addPass"
                                placeholder="Password"
                                onChange={(e) => setPass(e.target.value)}
                            /></div>
                        < div className="flex flex-row p-1 mx-1 ">
                             <h2 className=" w-1/4">ชื่อ :</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addName"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            /></div>
                        <div className="flex flex-row p-1 mx-1 ">
                            <h2 className=" w-1/4">นามสกุล :</h2>
                            <input
                                className="flex w-3/4 rounded-lg px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addSurname"
                                placeholder="Surname"
                                onChange={(e) => setSurname(e.target.value)}
                            /></div>
                        <div className="flex flex-row p-1 mx-1">
                            <h2 className=" w-1/4">เบอร์โทรศัพท์ :</h2>
                            <input
                                className="flex w-3/4 rounded-lg  px-2 mx-2 bg-slate-200"
                                type="text"
                                name="addPhone"
                                placeholder="Phone number"
                                onChange={(e) => setPhone(e.target.value)}
                            /></div>
                        <div className="flex flex-row p-1 mx-1">
                            <h2 className=" w-1/4"> e-mail :</h2>
                            <input
                                className="flex rounded-lg px-2 mx-2 bg-slate-200 w-3/4"
                                type="text"
                                name="addEmail"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)}
                            /></div>
                        <div className="flex flex-row justify-center">
                            <button className=" w-4/5 p-1 m-1 bg-yellow-300 hover:bg-red-300 rounded-lg "
                                onClick={() => register() }>
                                ลงทะเบียน
                            </button>
                            </div>
                      </div>
                 </div>
                 {loginform()}
            
         </div>
     </div>

 )   
}
export default login
  
export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } 
}}
  