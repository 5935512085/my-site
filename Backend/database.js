const bcrypt = require("bcrypt");

let users = {
  users: [
    {
        id: 1, username: 'affan', password: 'abcd',
        name:"Affan", surname:"Dolohmi",
        email:'affan2409@gmail.com',phone:"0937255297" ,
    },
  ],
};

let tasks = {
  tasks :[
    { service:"service",namepro:"Name Project",sign:"Bird",price:"500",style:" Drawing",desc:"-",content:"3 Bird 3 Directions",color:"blue,red,green",due:"-" },
  ],
};



const SECRET = "your_jwt_secret";
const NOT_FOUND = -1;

exports.users = users;
exports.tasks = tasks;

exports.SECRET = SECRET;
exports.NOT_FOUND = NOT_FOUND;

exports.setTasks = function (_tasks){
  tasks = _tasks
}

exports.setUsers = function (_users) {
  users = _users;
};

// === validate username/password ===
exports.isValidUser = async (username, password) => {
  const index = users.users.findIndex((item) => item.username === username);
  return users.users[index].password
};

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
  return users.users.findIndex((item) => item.username === username);
};
exports.checkExistingUidOrder = (uid) => {
  return cart.cart.findIndex((item) => item.userid === uid);
};