import express from "express";
const app = express();
const router = express.Router()

router.get("/", (_, res) => {
  res.status(200).json({ status: 200 })
});

router.get("/alive", (_, res) => {
  res.status(200).json({ message: "I\'m alive!" })
});

router.get("/docs", (_, res) => {
  res.status(200).json({ message: "docs" })
});

router.get("*", (_, res) => {
  res.status(404).json({ message: "Page Not Found!" })
});

app.use(router)

export default app;