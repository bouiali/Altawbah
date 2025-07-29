function pathMaker(path){
    return (
        <div className="path">
            <div>
                <p>{path.airline}</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="depart">
                        <i class="fa-solid fa-plane-departure" ></i>
                        <p>{path.from}</p>
                        <p>{path.depart.date}</p>
                        <p>{path.depart.time}</p>
                    </div>
                    <div className="arrival">
                        <i class="fa-solid fa-plane-arrival" ></i>
                        <p>{path.to}</p>
                        <p>{path.arrival.date}</p>
                        <p>{path.arrival.time}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <p>bagages</p>
                <div className="baggage">
                    <p>enregistré: {path.checked_baggage}</p>
                    <p>cabin: {path.cabin_baggage}</p>
                </div>
            </div>
        </div>
    );
}

export default pathMaker;