import { NavLink } from "react-router";
import { MENU_OPTIONS } from "../constants/index";

const Menu = () => {
	return (
		<div className='menu'>
			{MENU_OPTIONS.map(option => (
				<NavLink
					to={option.goTo}
					className={({ isActive }) => `${isActive ? "font-bold" : ""} `}
					key={option.name}>
					{option.name}
				</NavLink>
			))}
		</div>
	);
};

export default Menu;
