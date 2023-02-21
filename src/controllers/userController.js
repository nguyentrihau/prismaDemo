const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const getLikeResSchema = {
  schema: {
    params: {
      user_id: { type: "number" },
    },
  },
};

const getLikedRes = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await model.restaurant.findMany({
      where: {
        like_res: {
          some: {
            user_id,
          },
        },
      },
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.code(500).send("Lỗi backend");
  }
};

module.exports = {
  getLikedRes,
  getLikeResSchema,
};
