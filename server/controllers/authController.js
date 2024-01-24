import User from "../models/User.js";

export const handleRegister = async (req, res) => {
  try {
    console.log("🚀 ~ Register:", req.body);

    const user = await User.create(req.body);

    res.status(201).send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in register:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleLogin = async (req, res) => {
  try {
    console.log("🚀 ~ Login:", req.body);

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    }).select("username");
    console.log("🚀 ~ user:", user);

    if (!user)
      return res.send({
        success: false,
        error: "Username or password not correct",
      });

    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};