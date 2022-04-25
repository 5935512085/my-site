import { useEffect,useState } from 'react'
 
const logodesign= () => {
 
   const [tasks, setTasks] = useState([])
   const [name, setName] = useState('')
   const [Thai, setThai] = useState('')
   const [idEdit, setIdEdit] = useState(0)
   
   
    async function GETT(){
        const res = await fetch('http://localhost:8000/')
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


    const editTask = (id) => {
    setIdEdit(id)
    const t = tasks.find((task) => +task.id === +id)
    setName(t.name)
    setThai(t.Thai)
    if (+idEdit === +id) { //Press Edit again
        let newTasks = tasks.map((task, index) => {
            if (+task.id === +id)
                tasks[index].name = name
                tasks[index].Thai = Thai
            return task
        })
        setTasks(newTasks)
        setIdEdit(0)
    }}

    const deleteTask = (id) => {
        console.log('delete id: ', id)
        let newTasks = tasks.filter((task) => task.id !== +id)
        setTasks(newTasks)}

    const addTask = (animal) => {
        if (name == "" || Thai =="")
           return;
        if (tasks.length == 0)
           setTasks([{ id: 1, name, Thai }]);
        if(tasks.length <= 9 && animal != ''){
            setTasks([...tasks, { id: tasks.length <= 0 ? 1 : tasks[tasks.length - 1].id + 1, name ,Thai}])
            console.log(tasks)
        }  }

    
    const renderTasks = () => {
        console.log("This is what in tasks frontend : ",tasks)
        if (tasks && tasks.length){
            return tasks.map((task, index) => (
                <li key={index} className="relative bg-green-400 m-4 border-2 border-double p-8 rounded-lg drop-shadow-lg">
                    <div className="absolute bottom-0 right-0 text-xl mr-2 text-white">{index+1}</div>
                    {(idEdit !== task.id) ?
                        <div className="text-3xl  max-w-xs">{task.name} : {task.Thai}</div> :
                        <div className='flex flex-row justify-center'>
                            <input
                            className="w-1/2 bg-yellow-200 text-3xl text-black border-2 rounded-lg"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                            <input
                            className="w-1/2 bg-yellow-200 text-3xl text-black border-2 rounded-lg"
                            type="text"
                            name="Thai"
                            value={Thai}
                            onChange={(e) => setThai(e.target.value)}
                        />
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
    <div  className="h-screen bg-green-200 border-2 flex flex-col items-center">
        <h1 className="m-8  text-4xl drop-shadow-lg" >
            <div className="flex w-2/3 justify-center mb-8"> 
                <img src={avatar_url} width="100" className=' m-4  rounded-full'/>
                 กำลังทำงาน.. <span>{login} </span>
            </div>
       
        </h1>

        <div className="flex w-2/3 justify-center mb-8">
            <input
                className="w-1/5 rounded-lg pl-2 ml-2 mr-4"
                type="text"
                name="addTask"
                onChange={(e) => (setName(e.target.value))}
            /><h1 className='text-4xl '>:</h1>
            <input
                className="w-1/5 rounded-lg pl-2 ml-2 mr-4"
                type="text"
                name="addTask"
                onChange={(e) => (setThai(e.target.value))}
            />
            <button
                className="w-1/3 bg-blue-400 text-black hover:text-white hover:bg-blue-500 p-2 rounded-lg"
                onClick={() => addTask({name,Thai})}>เพิ่ม</button>
        </div>
        <ul className="flex flex-wrap mb-8">
            {renderTasks()}
        </ul>
    </div>
)
}

export default logodesign