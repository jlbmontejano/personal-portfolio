import { MENU_OPTIONS } from "../constants/index";
import { MenuNavigation } from "../types";

type MenuProps = {
	setCurrent: React.Dispatch<React.SetStateAction<MenuNavigation>>;
};

const Menu = ({ setCurrent }: MenuProps) => {
	return (
		<div className='menu'>
			{MENU_OPTIONS.map(option => (
				<a onClick={() => setCurrent(option.scrollTo)} key={option.name}>
					{option.name}
				</a>
			))}
		</div>
	);
};

export default Menu;
