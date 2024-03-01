import { MENU_OPTIONS } from "../constants/index";

const Menu = () => {
	const handleClick = (scrollTo: string) => {
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='mobile-menu xl:desktop-menu'>
			{MENU_OPTIONS.map(option => (
				<a onClick={() => handleClick(option.scrollTo)} key={option.name} className='hover:xl:scale-110 origin-bottom-right duration-150 xl:w-min'>
					{option.name}
				</a>
			))}
		</div>
	);
};

export default Menu;
