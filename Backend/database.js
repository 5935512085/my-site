const bcrypt = require('bcrypt')

let users = {
    users: [
        {   id: 1, username: 'affan', password: 'abcd',
            name:"Affan", surname:"Dolohmi",
            email:'affan2409@gmail.com',phone:"0937255297" ,
            rememberme:"false",},
    ]
}

const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND

exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}