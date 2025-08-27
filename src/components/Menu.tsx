import { MENU_OPTIONS } from "../constants/index";

const Menu = () => {
	const handleClick = (scrollTo: string) => {
		document
			.getElementById(scrollTo)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='menu sticky top-0 z-50 bg-off_white sm:text-lg'>
			<a onClick={() => handleClick("home")}>Jorge Buenrostro</a>
			<div className='flex gap-3 lg:gap-6'>
				{MENU_OPTIONS.map(option => (
					<a
						onClick={() => handleClick(option.scrollTo)}
						key={option.name}>
						{option.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default Menu;
