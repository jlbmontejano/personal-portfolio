import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CarouselProps = {
	liveLink: string;
	images: {
		url: string;
		alt: string;
	}[];
};

const Carousel = ({ liveLink, images }: CarouselProps) => {
	const [currentIdx, setCurrentIdx] = useState(0);

	const handlePrev = () => {
		if (currentIdx === 0) {
			setCurrentIdx(images.length - 1);
		} else {
			setCurrentIdx(prev => prev - 1);
		}
	};

	const handleNext = () => {
		if (currentIdx === images.length - 1) {
			setCurrentIdx(0);
		} else {
			setCurrentIdx(prev => prev + 1);
		}
	};

	return (
		<section className='relative h-full w-full overflow-hidden rounded-xl'>
			<div
				className='flex h-full transition-transform duration-300'
				style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
				{images.map(({ url, alt }, idx) => (
					<a
						key={`${url}-${idx}`}
						href={liveLink}
						target='_blank'
						rel='noopener noreferrer'
						className='block h-full w-full flex-shrink-0'
						aria-hidden={currentIdx !== idx}>
						<img
							src={`assets/${url}`}
							alt={alt}
							className='h-full w-full rounded-xl object-cover'
						/>
					</a>
				))}
			</div>
			<button
				onClick={handlePrev}
				aria-label='Previous slide'
				className='carousel-btn left-2'>
				<FaArrowLeft />
			</button>
			<button
				onClick={handleNext}
				aria-label='Next slide'
				className='carousel-btn right-2'>
				<FaArrowRight />
			</button>
		</section>
	);
};

export default Carousel;
