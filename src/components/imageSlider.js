import { useRef } from "react";
import styled from "styled-components";

const ImageSliderContainer = styled.div`
    overflow: hidden;
    position: relative;
    .fa-solid{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        color: white;
        z-index: 2;
        &:hover{
            color: green;
        }
    }
    .fa-chevron-left{
        left: 20px;
    }
    .fa-chevron-right{
        right: 20px;
    }
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateX(0);
        transition: 300ms;
        >img{
            flex: 1;
            width: 100%;
        }
    }
`;

function ImageSlider({links}){
    let tX = 0;
    const slides = useRef(null);

    return(
        <ImageSliderContainer>
            <i class="fa-solid fa-chevron-left" 
                onClick={()=>{
                    if(tX > 0){
                        --tX;
                        slides.current.style.transform = `translateX(-${100 * (tX)}%)`;
                    }
                }}
            />
            <i class="fa-solid fa-chevron-right"
                onClick={()=>{
                    if(tX < slides.current.childNodes.length-1){
                        ++tX;
                        slides.current.style.transform = `translateX(-${100 * (tX)}%)`;
                    }else{
                        tX = 0;
                        slides.current.style.transform = `translateX(0)`;
                    }
                }}
            />
            <div ref={slides}>
                { 
                    links && links.map((link)=>{
                        return(
                            <img alt="image" src={link} ></img>
                        );
                    }) 
                }
            </div>
        </ImageSliderContainer>
    );
}

export default ImageSlider;