import React, {useEffect, useRef} from 'react'
import useImageLazyLoading from "../hooks/useImageLazyLoading";

function Card(props) {

	const imgRef = useRef(null);

	useImageLazyLoading(imgRef)

	return (
		<div className="Card text-center" >
			<picture>
				<source data-srcset={props.image} type={'image/webp'}/>
				<img ref={imgRef} data-src={props.jpg}/>
			</picture>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
