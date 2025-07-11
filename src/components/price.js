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
        padding: 10px 0;
        p{
            font-size: 30px;
            color: green;
        }
        p:last-child{
            color: black;
        }
    }
    button{
        color: green;
        width: 100%;
        background-color: transparent
    }
`;

function Price({chamber, bad, price}){
    return(
        <PriceContainer>
            <h4>Chambre {chamber}</h4>
            <div>
                <p>
                    <i class="fa-solid fa-bed" />X{bad}    
                </p>
                <p>{price}</p>
            </div>
            <Link to="/Reservation" state={{type: bad, price: price}} style={{border: "none"}}>
                <button>Réserver </button>
            </Link>
        </PriceContainer>
    );
}

export default Price;