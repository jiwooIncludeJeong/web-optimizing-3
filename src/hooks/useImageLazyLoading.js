import {useEffect} from "react";

const useImageLazyLoading = (imgRef) => {
    useEffect(()=>{
        const options = {
            root: null,
            // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정
            rootMargin: '30px 0px 0px 0px',
            threshold: 0
        };
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target);
                }
            })
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(imgRef.current);
    },[])

}

export default useImageLazyLoading;
