import React, {useEffect, useRef} from 'react'

function Card(props) {

	const imgRef = useRef(null);

	useEffect(()=>{
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				//entry.isIntersecting : 화면 안에 해당 element가 있는가?
				if(entry.isIntersecting){
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			})
		};
		const options = {
			root: null,
			// 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정
			rootMargin: '30px 0px 0px 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver(callback, options);

		observer.observe(imgRef.current);
	},[])


	return (
		<div className="Card text-center" >
			<img ref={imgRef} data-src={props.image}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
