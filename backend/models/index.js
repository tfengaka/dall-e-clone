import mongoose from "mongoose";

export default async function connectDatabase() {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		throw err;
	}
}

export { default as PostModel } from "./post.model.js";
