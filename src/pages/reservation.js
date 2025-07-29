import { useLocation } from "react-router-dom";
import { SectionHeading } from "../globalStyles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import observer from "../functions/observer";
import Header from "../components/header";

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
        input, textarea, select{
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

    const {type, bed, price} = useLocation().state;

    let [personNum, setPersonNum] = useState(1);

    useEffect(()=>{

        document.querySelector("section").scrollIntoView();

        let chamberType = document.getElementById("chamberType");
        switch(bed){
            case "4":
                chamberType.value = "Q";
                break;
            case "3":
                chamberType.value = "T";
                break;
            case "2":
                chamberType.value = "D";
                break;
        }

        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });

    },[])

    return(
        <>
            <Header></Header>
            <ReservationContainer>
                <div className="land" ></div>
                <section>
                    <SectionHeading>
                        <h2>Réservation</h2>
                    </SectionHeading>
                    <div>
                        <form onSubmit={
                            async (e)=>{

                                document.querySelector(".loadingBackground").style.display = "flex";

                                e.preventDefault();

                                const formData = new FormData();
                                formData.append("reservation.PackageType", `${type}, ${document.getElementById("chamberType").value} .`);
                                for(let i=0;i<personNum;++i){
                                    formData.append(`reservation.Persons[${i}].Gender`, document.querySelectorAll("#maleFemale")[i].value);
                                    formData.append(`reservation.Persons[${i}].FirstName`, document.querySelectorAll("#firstName")[i].value);
                                    formData.append(`reservation.Persons[${i}].LastName`, document.querySelectorAll("#lastName")[i].value);
                                    formData.append(`reservation.Persons[${i}].BornDate`, document.querySelectorAll("#bornDate")[i].value);
                                    formData.append(`reservation.Persons[${i}].PasseportNumber`, document.querySelectorAll("#passNum")[i].value);
                                    formData.append(`reservation.Persons[${i}].PasseportExperationDate`, document.querySelectorAll("#passExp")[i].value);
                                    formData.append(`reservation.Persons[${i}].Passeport`, document.querySelectorAll("#passeport")[i].files[0]);
                                }
                                formData.append("reservation.PhoneNumber", document.getElementById("tel").value);
                                formData.append("reservation.Email", document.getElementById("email").value);
                                formData.append("reservation.WheelChairPusher", document.getElementById("wheelchair").checked.toString());
                                formData.append("reservation.TrainBooking", false);
                                formData.append("reservation.Notes", document.getElementById("notes").value);

                                await fetch("https://altawbahapi.onrender.com/reserve", {
                                    method: "POST", 
                                    body: formData
                                }).then(response => response.text())
                                .then(text =>{
                                    alert("reservation recu, nous allons vous repondre tres prochainement");
                                    window.open("/","_self");
                                })
                                .catch(error => alert(error));
                                
                                document.querySelector(".loadingBackground").style.display = "none";
                                
                            }
                        }>
                            <div>
                                <div>
                                    <label htmlFor="personNum">Nombre de personne : </label>
                                    <select id="personNum" placeholder="" required onChange={()=>{
                                        setPersonNum(+document.getElementById("personNum").value);
                                    }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="chamberType">Type de chambre : </label>
                                    <select id="chamberType" required>
                                        <option value={"D"}>Double</option>
                                        <option value={"T"}>Triple</option>
                                        <option value={"Q"}>Quadruple</option>
                                    </select>
                                </div>
                            </div>
                            {
                                [""].map(()=>{
                                    let forms = [];
                                    for(let i=0; i<personNum; ++i){
                                        forms.push(
                                            <>
                                                <p>Personne {i+1} :</p>
                                                <div>
                                                    <select id="maleFemale" name="maleFemale">
                                                        <option value={"male"}>Mr</option>
                                                        <option value={"female"}>Mrs</option>
                                                    </select>
                                                    <input type="text" id="firstName" name="firstName" placeholder="Nom" required></input>
                                                    <input type="text" id="lastName" name="lastName" placeholder="Prenom" required></input>
                                                </div>
                                                <div>
                                                    <input type="text" id="passNum" name="passNum" placeholder="Numero de passeport" required></input>
                                                    <div>
                                                        <label htmlFor="passExp">Date d'experation du passeport : </label>
                                                        <input type="date" id="passExp" required></input>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label htmlFor="bornDate">Date de naissance : </label>
                                                        <input type="date" id="bornDate" required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="passeport">Passeport : </label>
                                                        <input type="file" id="passeport" name="passeport" accept=".pdf, image/*" required></input>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    }
                                    return forms;
                                })
                            }
                            <div>
                                <input type="tel" id="tel" name="tel" placeholder="Telephone" required></input>
                                <input type="email" id="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div>
                                <div style={{flex:"1"}} >
                                    <input type="checkbox" id="wheelchair" name="wheelchair"></input>
                                    <label htmlFor="wheelcheer"> Pousseur</label>
                                </div>
                            </div>
                            <textarea placeholder="Notes" id="notes" name="notes"></textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </section>
            </ReservationContainer>
        </>
    );
}

export default Reservation;