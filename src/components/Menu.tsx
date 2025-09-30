import { MENU_OPTIONS } from "../constants/index";

const Menu = () => {
	const handleClick = (scrollTo: string) => {
		document
			.getElementById(scrollTo)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className='menu sticky top-0 z-50 bg-off_white sm:text-lg'>
			<button
				onClick={() => handleClick("home")}
				className='animate-fadeIn'>
				Jorge Buenrostro
			</button>
			<div className='flex animate-fadeIn gap-2 lg:gap-6'>
				{MENU_OPTIONS.map(option => (
					<button
						onClick={() => handleClick(option.scrollTo)}
						key={option.name}>
						{option.name}
					</button>
				))}
			</div>
		</header>
	);
};

export default Menu;
