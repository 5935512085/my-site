
const express = require('express'),
app = express(),
passport = require('passport'),
port = process.env.PORT || 80,
cors = require('cors')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users

require('./passport.js')

const router = require('express').Router(),
jwt = require('jsonwebtoken')


app.use(cors({ origin: 'http://localhost:3000' }))    

app.use('/', router)
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/login', async (req, res, next) => {
    try {
        const SALT_ROUND = 10
        const { username, email } = req.body
        if (db.checkExistingUser({username,email}) !== db.NOT_FOUND)
            return res.json({ status: "username or email is already exit" })

        let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
        const password = await bcrypt.hash(req.body.password, SALT_ROUND) //note2
        users.users.push({ id, username, password, email, phone, name ,surname })
        res.json({ message: "Register success" })
    } catch {
        res.json({ message: "Cannot register" })
    }
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('Login: ', req.body, user, err, info)
        if (err) return next(err)
        if (user) {
                const token = jwt.sign(user, db.SECRET,{
                    expiresIn: (req.body.remmeberme === "true")? "7d":"1d"
                })
            return res.json({ user, token })
        } else
            return res.status(422).json(info)
    })(req, res, next)
        
})

/* GET user profile. */
router.get('/profile',
passport.authenticate('jwt', { session: false }),
(req, res, next) => { 
    res.send( req.user)
});

// router.post('/register',
// async (req, res) => {
//     try {
//         const SALT_ROUND = 10
//         const { username, email } = req.body
//         if (db.checkExistingUser({username,email}) !== db.NOT_FOUND)
//             return res.json({ status: "username or email is already exit" })

//         let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
//         const password = await bcrypt.hash(req.body.password, SALT_ROUND) //note2
//         users.users.push({ id, username, password, email, phone, name ,surname })
//         res.json({ message: "Register success" })
//     } catch {
//         res.json({ message: "Cannot register" })
//     }
// })


router.get('/', (req, res, next) => {
res.send('Respond without authentication');
});

// Error Handler
app.use((err, req, res, next) => {
let statusCode = err.status || 500
res.status(statusCode);
res.json({
    error: {
        status: statusCode,
        message: err.message,
    }
});
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

