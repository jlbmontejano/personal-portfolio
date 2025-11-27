import { z } from "zod";

export const contactMeSchema = z.object({
	name: z
		.string()
		.min(2, "Your name must be at least 2 characters")
		.max(50, "Your name must be 50 characters or less"),
	email: z.email("Please enter a valid email address"),
	message: z
		.string()
		.min(10, "Your message must be at least 10 characters")
		.max(1000, "Your message must be 1,000 characters or less"),
});
