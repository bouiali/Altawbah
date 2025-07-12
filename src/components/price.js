import { Link } from "react-router-dom";
import styled from "styled-components";

const PriceContainer = styled.div`
    text-align: center;
    h4{
        font-size: 25px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 10px 0;
        p{
            font-size: 30px;
            color: green;
        }
        p:last-child{
            color: black;
            line-height: 0.5;
            text-align: end;
            span{
                font-size: 10px;
            }
        }
    }
    button{
        color: green;
        width: 100%;
        background-color: transparent;
        transition: 500ms;
        &:hover{
            color: white;
            background-color: green;
        }
    }
`;

function Price({type, chamber, bed, price}){
    return(
        <PriceContainer>
            <h4>Chambre {chamber}</h4>
            <div>
                <p>
                    <i class="fa-solid fa-bed" />X{bed}    
                </p>
                <p>
                    {price} 
                    <br/>
                    <span>PAR PERSONNE</span>
                </p>
            </div>
            <Link to="/Reservation" state={{type: type, bed: bed, price: price}} style={{border: "none"}}>
                <button>Réserver </button>
            </Link>
        </PriceContainer>
    );
}

export default Price;