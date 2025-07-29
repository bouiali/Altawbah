import { useRef, useState } from "react";
import styled from "styled-components";

const ImageSliderContainer = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(0 0 0 /30%);
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
    >img{
        max-height: 400px;
        max-width: 100%;
        transition: 300ms;
    }
`;

function ImageSlider({links}){

    let[index, setIndex] = useState(0);

    const img = useRef(null);

    return(
        <ImageSliderContainer>
            <i class="fa-solid fa-chevron-left" 
                onClick={()=>{
                    img.current.style.transform = `translateX(100%)`;
                    img.current.style.opacity = `0`;
                    setTimeout(()=>{
                        setIndex(index === 0 ? links.length-1 : index-1);
                        img.current.style.transform = `translateX(-100%)`;
                        setTimeout(()=>{
                            img.current.style.transform = `translateX(0)`;
                            img.current.style.opacity = `1`;
                        },300)
                    },300)
                }}
            />
            <i class="fa-solid fa-chevron-right"
                onClick={()=>{
                    img.current.style.transform = `translateX(-100%)`;
                    img.current.style.opacity = `0`;
                    setTimeout(()=>{
                        setIndex(index < links.length-1 ? index+1 : 0);
                        img.current.style.transform = `translateX(100%)`;
                        setTimeout(()=>{
                            img.current.style.transform = `translateX(0)`;
                            img.current.style.opacity = `1`;
                        },300)
                    },300)
                }}
            />
            <img alt="image" src={links[index]} ref={img}></img>
        </ImageSliderContainer>
    );
}

export default ImageSlider;