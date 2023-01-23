import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./models/index.js";
import Routers from "./routes/index.js";
dotenv.config();

const initialServer = () => {
	const app = express();
	app.use(express.json({ limit: "50mb" }));
	app.use(cors());

	app.use("/api", Routers);

	app.listen(process.env.PORT, () =>
		console.log(`🚀Server has started on http://localhost:${process.env.PORT}`)
	);
};

connectDatabase()
	.then(() => console.log("🚀 MongoDB Connected..."))
	.then(() => initialServer())
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
