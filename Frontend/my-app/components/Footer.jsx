const Footer = () => {
    return (
        <div className=" w-screen bg-slate-800 text-white justify-center">
            <h1 className="flex justify-end mx-4 text-yellow-100"> Draft for future </h1>
            <div className="flex flex-row mx-2 justify-center">
             <img src="/img/logo2.png" 
                 className="w-max h-10 "
                 alt=""
                 onClick={() => {
                    router.push("/");
                  }} /> 
            <a href="https://www.facebook.com/aff.an.71" className="px-2 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                    className=" w-10"/>
                </a>
            </div>
           
            <p className="flex justify-center"> 49 Moo.8 Ban-Bayo Baroh, Yaha, Yala 95120</p>
            <p className="flex justify-center">Copyrigth by Affan Dolohmi</p>
        </div>
    )
}
export default Footer