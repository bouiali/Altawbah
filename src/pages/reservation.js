import { useLocation } from "react-router-dom";
import { SectionHeading } from "../globalStyles";
import { useEffect } from "react";
import styled from "styled-components";

const ReservationContainer = styled.div`
    .land{
        width: 100%;
        height: 35vh; 
        background-color: rgb(0 5 0 / 80%);
    }
    section{
        background-color: white;
        >div:last-child{
            display: flex;
            justify-content: space-around;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        >div, >input , textarea{
            display: flex;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            width: 100%;
            input{
                flex: 1;
            }
        }
        input, textarea{
            padding: 10px 5px;
            resize: none;
            &:focus{
                outline: none;
                border: 2px solid green;
            }
        }
        button{
            color: green;
            background-color: transparent;
            transition: 500ms;
            &:hover{
                color: white;
                background-color: green;
            }
        }
    }
`;

function Reservation(){

    const {type, price} = useLocation().state;

    useEffect(()=>{
        document.querySelector("section").scrollIntoView();
    },[])

    return(
        <ReservationContainer>
            <div className="land" ></div>
            <section>
                <SectionHeading>
                    <h2>Réservation</h2>
                </SectionHeading>
                <div>
                    <form>
                        <div>
                            <select id="male||female">
                                <option value={"male"}>Mr</option>
                                <option value={"female"}>Mrs</option>
                            </select>
                            <input type="text" id="first-name" placeholder="Nom" required></input>
                            <input type="text" id="last-name" placeholder="Prenom" required></input>
                        </div>
                        <div>
                            <input type="tel" id="tel" placeholder="Telephone" required></input>
                            <input type="email" id="email" placeholder="Email" required></input>
                        </div>
                        <div>
                            <input type="text" id="passNum" placeholder="Numero de passeport" required></input>
                            <div>
                                <label htmlFor="passeport">Passeport : </label>
                                <input type="file" id="passeport" accept=".pdf, image/*" required></input>
                            </div>
                        </div>
                        <div>
                            <div style={{flex:"1"}}>
                                <input type="checkbox" id="TGV"></input>
                                <label htmlFor="TGV"> Réservation de TGV</label>
                            </div>
                            <div style={{flex:"1"}} >
                                <input type="checkbox" id="wheelcheer"></input>
                                <label htmlFor="wheelcheer"> Pousseur</label>
                            </div>
                        </div>
                        <textarea placeholder="Notes" id="notes"></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>
        </ReservationContainer>
    );
}

export default Reservation;