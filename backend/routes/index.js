import express from "express";
import PostRouter from "./post.route.js";
import DalleRouter from "./dalle.route.js";
const router = express.Router();

router.get("/", (req, res) =>
	res.status(200).json({
		status: "ok",
	})
);

router.use("/post", PostRouter);
router.use("/dalle", DalleRouter);

export default router;
