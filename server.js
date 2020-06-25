const express = require("express");
const config = require("config");
const app = express();
const connectDB = require("./config/db");
const usersRoute = require("./routes/api/users");
const postsRoute = require("./routes/api/posts");
const profileRoute = require("./routes/api/profile");
const authRoute = require("./routes/api/auth");

connectDB();

app.get("/", (req, res) => {
	res.send("abc");
});

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/profile", profileRoute);

const PORT = process.env.PORT || config.get("PORT");

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
