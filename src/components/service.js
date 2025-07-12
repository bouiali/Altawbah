import { useRef } from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
    position: relative;
    background-color: white;
    box-shadow: 0 2px 10px #777;
    border-radius: 5px;
    padding: 20px 0 0 0;
    margin: 10px;
    width: 300px;
    transition: 500ms;
    text-align: center;
    height: fit-content;
    .icon_con{
        display: flex;
        justify-content: center;
        i{
            color: #cecece;
            font-size: 70px;
        }
    }
    h3{
        padding: 10px;
        margin: 0;
        font-size: 25px;
        font-weight: bolder;
        color: green;
    }
    .details{
        display: none;
        p{
            text-align: start;
            line-height: 1.5;
            padding: 0 0 0 5px;
        }
        span{
            color: green;
            line-height: 2.5;
        }
    }
    .details_button{
        display: flex;
        justify-content: end;
        background-color: #cecece;
        padding: 15px;
        p, i{
            color: green;
            font-size: large;
            cursor: pointer;
        }
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: green;
        transition: 500ms;
    }
    &:hover{
        margin-top: 0;
        margin-bottom: 20px;
    }
    &:hover::before{
        width: 100%;
    }
`;

function Service({el}){

    const front = useRef(null);
    const details = useRef(null);

    return(
        <ServiceContainer>
            <div className='front' ref={front}>
                <div className='icon_con'>
                    <i class={el.icon} />
                </div>
                <h3>{el.name}</h3>
                <div className='details_button'>
                    <p onClick={()=>{
                        front.current.style.display = "none";
                        details.current.style.display = "block";
                    }}>Details</p>
                </div>
            </div>
            <div className='details' ref={details}>
                <p>{el.description}</p>
                <span>choisissez-le lors de la réservation</span>
                <div className='details_button'>
                    <i class="fa-solid fa-arrow-right" onClick={()=>{
                        details.current.style.display = "none";
                        front.current.style.display = "block";     
                    }}></i>
                </div>
            </div>
        </ServiceContainer>
    );
}

export default Service