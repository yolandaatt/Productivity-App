import React from "react"
import Events from "./Events"



function AddEvent({addEvent, name, startTime, endTime, startDate, endDate, setName, setStartTime, setStartDate, setEndTime, setEndDate }) {
    return (
        <div>
            <form onSubmit={addEvent}>
                <label>
                    Ny händelse:&nbsp;&nbsp;
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <br />

                <label>
                    Starttid:&nbsp;&nbsp;
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <br />
                <br />
            
                <label>
                    Sluttid:
                    &nbsp;&nbsp;
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <br />

                <button className= "addEventBtn" type="submit">Lägg till</button>
            </form>

        </div>
    )
}

export default AddEvent