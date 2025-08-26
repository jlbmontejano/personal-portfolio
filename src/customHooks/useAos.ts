import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
	useEffect(() => {
		AOS.init({
			delay: 100,
			duration: 1000,
			easing: 'ease',
		});
	}, []);

	useEffect(() => {
		AOS.refresh();
	});
};

export default useAOS;
