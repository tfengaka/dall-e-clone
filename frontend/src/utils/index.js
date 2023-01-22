import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	if (surpriseMePrompts[randomIndex] === prompt) return getRandomPrompt(prompt);
	return surpriseMePrompts[randomIndex];
}
