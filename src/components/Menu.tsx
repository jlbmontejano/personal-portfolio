import { MENU_OPTIONS } from "@/constants/index";

const Menu = () => {
	const handleClick = (scrollTo: string) => {
		document
			.getElementById(scrollTo)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className='menu bg-off_white sticky top-0 z-50 sm:text-lg'>
			<button
				onClick={() => handleClick("home")}
				className='transition-colors duration-500 hover:cursor-pointer hover:text-[#e3caa6]'>
				Jorge Buenrostro
			</button>
			<div className='flex gap-2 lg:gap-6'>
				{MENU_OPTIONS.map(option => (
					<button
						onClick={() => handleClick(option.scrollTo)}
						key={option.name}
						className='transition-colors duration-500 hover:cursor-pointer hover:text-[#e3caa6]'>
						{option.name}
					</button>
				))}
			</div>
		</header>
	);
};

export default Menu;
