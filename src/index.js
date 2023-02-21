const fastify = require("fastify")({
  logger: true,
});

(async () => {
  try {
    fastify.listen({ port: 8080 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();

fastify.register(require("./router/userRoute"), { prefix: "/api" });

fastify.get("/", (req, res) => {
  return res.code(200).send("hello world");
});
