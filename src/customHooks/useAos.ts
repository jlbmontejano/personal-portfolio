import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useAOS = () => {
	useEffect(() => {
		AOS.init({
			delay: 100,
			duration: 1200,
			easing: "ease",
		});
	}, []);

	useEffect(() => {
		AOS.refresh();
	});
};

export default useAOS;
