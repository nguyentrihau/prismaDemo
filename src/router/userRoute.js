const {
  getLikedRes,
  getLikeResSchema,
} = require("../controllers/userController");

const userRoute = async (server) => {
  server.get("/getLikedRes/:user_id", getLikeResSchema, getLikedRes);
};

module.exports = userRoute;
