import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactMeSchema } from "@/lib/zod/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof contactMeSchema>>({
		resolver: zodResolver(contactMeSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof contactMeSchema>) => {
		setIsSubmitting(true);
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("email", values.email);
		formData.append("message", values.message);
		formData.append("access_key", "1a98cdea-0d6e-45f5-8da8-66065f82cbb2");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();

			if (!data.success) {
				throw new Error("Error!!!");
			}

			toast.success("Information sent successfully.");
			form.reset();
		} catch (err) {
			console.log(err);
			toast.error("Error sending information. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			className='section-container'
			id='contact-me'
			aria-label='Other'>
			<h2 className='section-title'>── Contact Me</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex w-full max-w-lg flex-col space-y-2'
					id='contact-form'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										disabled={isSubmitting}
									/>
								</FormControl>
								<div className='flex justify-between'>
									<FormMessage />
									<FormDescription className='ml-auto'>
										{form.getValues().message.length} / 1000
									</FormDescription>
								</div>
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						disabled={isSubmitting}
						className='self-center'>
						{isSubmitting ? "Submitting" : "Submit"}
					</Button>
				</form>
			</Form>
		</section>
	);
}
