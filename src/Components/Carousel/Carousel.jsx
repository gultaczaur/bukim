import React, { useContext, useEffect, useRef, useState } from 'react'
import "./carousel.css"
import Cards from '../Cards/Cards'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Carousel = ({ children, slideCount = null }) => {

    const childArray = Array.isArray(children) ? React.Children.toArray(children) : [children];
    const [media, setMedia] = useState(window.innerWidth < 600);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("left");
    const [startX, setStartX] = useState(null);
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState();
    const [containerWidth, setContainerWidth] = useState(0);
    const [visibleItem, setVisibleItem] = useState();

    const handleNext = () => {
        if (activeIndex < childArray.length - visibleItem) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };
    
    const handleResize = () => {
        setMedia(window.innerWidth < 600);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {

        if (!isDragging) return;
        const currentX = e.clientX;
        setOffset(currentX - startX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        const maxIndex = !media && childArray.length > visibleItem - 1 ? childArray.length - visibleItem : childArray.length - 1;
        const changeIndex = Math.round(offset / slideWidth);
        let newIndex = activeIndex - changeIndex;

        if (newIndex < 0) newIndex = 0;
        if (newIndex > maxIndex) newIndex = maxIndex;

        setActiveIndex(newIndex);
        setOffset(0);
        setIsDragging(false);
        setStartX(null);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    useEffect(() => {

        const maxIndex = !media ? childArray.length - (visibleItem - 1) : childArray.length;
        if (maxIndex > 0) {
            const interval = setInterval(() => {
                setDirection('left');
                setActiveIndex((prevIndex) =>
                    prevIndex === maxIndex - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [childArray]);


    useEffect(() => {
        const resize = () => setMedia(window.innerWidth < 600); //! böyükdür işarəsi olmalıdır
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);


    const handleDotClick = (index) => {
        setDirection(index > activeIndex ? "left" : "right");
        setTimeout(() => {
            setActiveIndex(index);
        }, 200);

    };
    useEffect(() => {
        if (carouselRef.current) {
            const firstChild = carouselRef.current.querySelector(".dishes-item > *");
            if (firstChild) {
                setSlideWidth(firstChild.offsetWidth);
            }
        }
    }, [children]);

    const updateContainerSize = () => {
        const screen90Percent = window.innerWidth * 0.9;

        if (carouselRef.current) {
            const childrenWidths = Array.from(carouselRef.current.querySelectorAll(".dishes-item *")).reduce(
                (total, child) => total + child.offsetWidth,
                0
            );
            const oneChildWidth = carouselRef.current.querySelector(".dishes-item > *").offsetWidth;

            const visibleItemCount = Math.floor(screen90Percent / oneChildWidth)
            let calculatedWidth;

            if (slideCount !== null) {
                
                calculatedWidth = slideCount * oneChildWidth;
                setVisibleItem(slideCount);
            } else {
               
                calculatedWidth = childrenWidths < screen90Percent ? childrenWidths : visibleItemCount * oneChildWidth;
                setVisibleItem(visibleItemCount);
            }
            setContainerWidth(calculatedWidth);


        }
    };
    useEffect(() => {
        updateContainerSize();
        window.addEventListener("resize", updateContainerSize);
        return () => {
            window.removeEventListener("resize", updateContainerSize);
        };
    }, [slideWidth, slideCount]);



    return (
        <div>
            <div className='carousel-container'>
                <button className='prev' onClick={handlePrev} disabled={activeIndex == 0}>
                    <IoIosArrowBack className='prev-icon' /> </button>
                <div
                    ref={carouselRef}
                    className='dishes-container'
                    style={{ display: "flex", width: `${containerWidth}px`, overflow: "hidden" }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={(e) => handleMouseDown(e.touches[0])}
                    onTouchMove={(e) => handleMouseMove(e.touches[0])}
                    onTouchEnd={handleMouseUp}
                >

                    <div className={'dishes-item'}

                        // style={{
                        //     transform: media
                        //         ? `translateX(${(-activeIndex * 420)}px)`
                        //         : `translateX(${(-activeIndex * 240)}px)`,
                        //     transition: "transform .4s ease-in-out",
                        // }}

                        style={{
                            transform: `translateX(${!media
                                ? -activeIndex * slideWidth + offset
                                : -activeIndex * slideWidth + offset}px)`,
                            transition: isDragging ? "none" : "transform .4s ease-in-out",
                        }}
                    >
                        {childArray}
                    </div>
                </div>
                <button className='next' onClick={handleNext} disabled={!media && childArray.length > (visibleItem - 1) ? activeIndex == childArray.length - visibleItem : activeIndex == childArray.length - 1}>
                    <IoIosArrowForward className='next-icon' /></button>
            </div>


            <div className="dots">
                {
                    childArray.slice(0, !media && childArray.length > (visibleItem - 1) ? childArray.length - (visibleItem - 1) : childArray.length).map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleDotClick(index)}
                            style={{
                                cursor: 'pointer',
                                height: '13px',
                                width: '13px',
                                backgroundColor: activeIndex === index ? '#373a36' : '#ccc',
                                borderRadius: '50%',
                                display: 'inline-block',
                                margin: '0 5px',
                            }}
                        ></span>
                    ))}
            </div>


        </div>
    )
}

export default Carousel