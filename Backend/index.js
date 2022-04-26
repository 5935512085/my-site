const express = require("express"),
  app = express(),
  passport = require("passport"),
  port = process.env.PORT || 80,
  cors = require("cors"),
  cookie = require("cookie");
  
require("./passport.js");
const bcrypt = require("bcrypt");
const e = require("express");

const db = require("./database.js");
let users = db.users;

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

router.post("/login", async (req, res ,next) => {
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
});

router.post("/register", async(req,res)=>{
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

})


let tasks = db.tasks;
router.get("/designorder", (req, res) => {
  try {
    console.log(req.headers.search);
    let ts = tasks.tasks.filter((item) => item.userid == req.headers.search);
    console.log(ts);
    res.status(200).json({ message: "Get tasks success", data: tasks });
  } catch {
    res.status(422).json({ message: "Cannot get tasks" });
  }
});

router.post("/designorder", async (req, res) => {
  try {
    const { userid, project, style, service, color, sign,due, price,content,desc } = req.body;
    if (db.checkExistingUidOrder(userid) === db.NOT_FOUND) {
      let id = tasks.tasks.length ? tasks.tasks[tasks.tasks.length - 1].id + 1 : 1;
      console.log("1");
      let products = [
        {
          project: project,
          style :style,
          service : service,
          color : color,
          sign: sign,
          due:due,
          content:content,
          desc:desc,
          price: price,
        },
      ];
      tasks.tasks.push({ id, products });
    } else {
      console.log("2");
      let productObject = {
          project: project,
          style :style,
          service : service,
          color : color,
          sign: sign,
          due:due,
          content:content,
          desc:desc,
          price: price,
      };
      tasks.tasks.map(async (item) => {
        if (item.userid === userid) {
          let isExisting = await item.products.filter(
            (pd) => pd.productName == productName
          );
          console.log("isExisting", isExisting[0]);
          if (isExisting[0] === undefined) {
            console.log("3");
            item.products.push(productObject);
          } else {
            console.log("4");
            item.products.map((pd) => {
              if (pd.productName === productName) {
                pd.quantity = pd.quantity + quantity;
              }
            });
          }
        }
      });
    }
    res.status(200).json({ message: "Add to order success" });
  } catch {
    res.status(422).json({ message: "Cannot add to order" });
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
