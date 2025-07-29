import styled from "styled-components";
import { Link } from "react-router-dom";
import starsMaker from "../functions/starsMaker";

const TripContainer = styled.div`
    position: relative;
    background-color: white;
    box-shadow: 0 2px 10px #777;
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    transition: 500ms;
    max-width: 380px;
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
        margin-bottom: 40px;
    }
    &:hover::before{
        width: 100%;
    }
    >h3{
        text-align: center;
        color: green;
        font-size: 30px;
        font-weight: 900;
        margin: 20px 0;
    }
    img{
        width: 100%;
        border-radius: 10px;
        transition: 500ms;
    }
    .more{
        display: flex;
        justify-content: center;
        padding: 20px;
        button{
            position: relative;
            color: green;
            background-color: white;
            transition: 500ms;
            z-index: 0;
            &::before{
                content: '';
                position: absolute;
                width: 0;
                height: 100%;
                left: 0;
                top: 0;
                background-color: green;
                transition: 500ms;
                z-index: -1;
                
            }
            &:hover{
                color: white;
            }
        }
        button:hover::before{
            width: 100%;
        }
    }
`;

function Trip({el, index}){

    return(
        <TripContainer>
            <h3>Omra {el.month}</h3>
            <h3 style={{fontSize : "25px", fontWeight: "normal"}}>Depart de {el.from}</h3>
            <div style={{textAlign :"center", padding : "20px 0"}}>
                {
                    starsMaker(el.package_type)
                }
            </div>
            <img alt="trip-image" src={el.image}/>
            <h3 style={{fontSize : "35px", fontWeight: "normal"}}>{el.start_from_price}</h3>
            {
                el.start_from_price != "BIENTÔT" ?(
                    <div className='more'>
                        <Link to="/TripDetails" state={{ trip: el, tripIndex: index}}>
                            <button>Details</button>
                        </Link>
                    </div>
                ) : null
            }
        </TripContainer>
    );
}

export default Trip;