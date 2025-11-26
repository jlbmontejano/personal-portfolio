import { useState } from "react";

export default function ContactForm() {
	const [result, setResult] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		const formData = new FormData(event.target as HTMLFormElement);
		formData.append("access_key", "1a98cdea-0d6e-45f5-8da8-66065f82cbb2");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();
		setResult(data.success ? "Success!" : "Error");
		setIsSubmitting(false);
	};

	return (
		<section className='section-container' id='other' aria-label='Other'>
			<h2 className='section-title'>── Contact Me</h2>
			<form
				onSubmit={onSubmit}
				className='flex max-w-xl flex-col space-y-2 rounded-xl bg-custom_gray p-4'
				id='contact-form'>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					required
					className='border border-solid border-black'
				/>
				<label htmlFor='email'>Email:</label>
				<input type='email' name='email' required />
				<label htmlFor='message'>Message:</label>
				<textarea name='message' required></textarea>
				<button type='submit' disabled={isSubmitting}>
					Submit
				</button>
				<p>{result}</p>
			</form>
		</section>
	);
}
