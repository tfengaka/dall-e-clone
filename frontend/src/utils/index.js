import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	if (surpriseMePrompts[randomIndex] === prompt) return getRandomPrompt(prompt);
	return surpriseMePrompts[randomIndex];
}

export async function downloadImage(_id, photo) {
	await FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
