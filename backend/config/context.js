module.exports = async ({ req }) => {
  await require("./simulate")(req);

  const auth = req.headers.authorization;
  console.log("auth", auth);
};
