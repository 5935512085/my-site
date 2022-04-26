const express = require("express"),
  app = express(),
  passport = require("passport"),
  port = process.env.PORT || 80,
  cors = require("cors"),
  cookie = require("cookie");

const bcrypt = require("bcrypt");
const e = require("express");

const db = require("./database.js");
let users = db.users;


require("./passport.js");

const router = require("express").Router(),
  jwt = require("jsonwebtoken");

app.use("/api", router);
router.use(cors({ origin: "http://localhost:3000", credentials: true }));
// router.use(cors())
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/logout", (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  return res.json({ message: "Logout successful" });
});

/* GET user profile. */
router.get("/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

router.post("/register", async (req, res ,next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
        console.log("Login: ", req.body, user, err, info);
        if (err) return next(err);
        if (user) {
          const token = jwt.sign(user, db.SECRET, {
            expiresIn: "7d",
          });
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              maxAge: 60 * 60,
              sameSite: "strict",
              path: "/",
            })
          );
          res.statusCode = 200;
          return res.json({ user, token });
        } else return res.status(422).json(info);
      })(req, res, next);

  try {
    const { username, email, password, name, surname, phone } = req.body;
    if (!username || !password || !name || !surname || !email || !phone )
      return res.json({ message: "Cannot register with empty string" });
    if (db.checkExistingUser(username) !== db.NOT_FOUND)
      return res.json({ message: " This Username or Email is already exist" });

    let id = users.users.length
      ? users.users[users.users.length - 1].id + 1
      : 1;
    users.users.push({ id, username, password, email, name,surname ,phone });
    res.status(200).json({ message: "Register success" });
  } catch {
    res.status(422).json({ message: "Cannot register" });
  }
});

let tasks = db.tasks;
app.get('/designorder', async (req,res) => {
  res.json(tasks)
    try {
      console.log(req.id)
      let task = tasks.filter((item) => item.id== req.id);
      console.log(task);
      res.status(200).json({ message: "Get tasks success", data: tasks });
    } catch {
      res.status(422).json({ message: "Cannot get tasks" });
    }

    try {
      console.log("userid", req.userid);
      console.log("Tasks name", req.namepro);
      let inx = tasks.findIndex((item) => item.id === req.id);
      console.log("inx", inx);
      if (inx !== -1) {
        let idx = await tasks[inx].namepro.findIndex(
          (item) => item.namepro == req.namepro
        );
        console.log("idx", idx);
        tasks[inx].namepro.splice(idx, 1);
      }
      console.log("inx", inx);
      res.status(200).json({ message: "Delete success" });
    } catch {
      res.status(422).json({ message: "Cannot delete" });
    }
})
router.post("/designorder", async (req, res) => {
  try {
    const { namepro,service,style,colors,content,desc,price,due,sign } = req.body;
    if (db.setTasks(namepro) === db.NOT_FOUND) {
      let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      let list_tasks = [
        {
          tasksname: namepro,
          service:service,
          style:style,
          color:colors,
          content:content,
          desc:desc,
          due:due,
          sign:sign,
          price: price,
        },
      ];
      tasks.push({ id, userid, list_tasks });
    } else {
      let TaskOrder = {
          tasksname: namepro,
          service:service,
          style:style,
          color:colors,
          content:content,
          desc:desc,
          due:due,
          sign:sign,
          price: price,
      }; tasks.push(TaskOrder)
    }
    res.status(200).json({ message: "Add to cart success" });
  } catch {
    res.status(422).json({ message: "Cannot add to cart" });
  }
});

router.get("/alluser", ( res) => res.json(db.users.users));

router.get("/", ( res) => {
  res.send("Respond without authentication");
});

// Error Handler
app.use((err, res) => {
  let statusCode = err.status || 500;
  res.status(statusCode);
  res.json({
    error: {
      status: statusCode,
      message: err.message,
    },
  });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
