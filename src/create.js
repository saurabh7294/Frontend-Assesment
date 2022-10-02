import { useState, useEffect } from "react";
import "./create.css"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create =()=>{
    let navigate = useNavigate();
    const [eventName, seteventName] = useState("")
    const [hostName, sethostName] = useState("")
    const [statename, setstatename] = useState("")
    const [location, setlocation] = useState("")
    const [postcode, setpostcode] = useState("")
    const [street, setstreet] = useState("")
    const [endTime, setendTime] = useState("00:00")
    const [startTime, setstartTime] = useState("00:00")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")




    return(
        <div className="mainDiv1">
        <div style={{maxWidth:"50%"}} className="row mainDiv">
            <div className="col-12">
            <label>Event Name</label>
            <input
            className="form-control" 
            value ={eventName}
            onChange={(event) =>
                seteventName(event.target.value)
            }
            placeholder="Event Name"></input>
            </div>
            <div className="col-12">
            <label>Host Name</label>
            <input placeholder="Host Name"
            value={hostName}
            onChange={(event) =>
                sethostName(event.target.value)
            }
            className="form-control"></input>
            </div>
            <div className="col-12">
            <label>Street Name</label>
            <input placeholder="Street Name"
            value={street}
            onChange={(event) =>
                setstreet(event.target.value)
            }
            className="form-control"></input>
            </div>
            <div className="col-4">
            <label>Suburb</label>
            <input placeholder="Suburb"
            value={location}
            onChange={(event) =>
                setlocation(event.target.value)
            }
            className="form-control"></input>
            </div>
            <div className="col-4">
            <label>State</label>
            <input placeholder="State"
            value={statename}
            onChange={(event) =>
                setstatename(event.target.value)
            }
            className="form-control"></input>
            </div>
            <div className="col-4">
            <label>PostCode</label>
            <input placeholder="PostCode"
            value={postcode}
            onChange={(event) =>
                setpostcode(event.target.value)
            }
            className="form-control"></input>
            </div>
            <div className="col-6">
            <label>Start Time</label>
            <input
                type="time"
                format="HH:mm"
                name="ProgramSchedule"
                className="form-control"
                onChange={(event) =>
                    setendTime(event.target.value)
                }
                value={endTime}
            />
            </div>
            <div className="col-6">
            <label>Start Date</label>
            <input  name="endDate"  type="date" 
            value={ startDate } 
            className="form-control"  onChange={(e) => setstartDate(e.target.value) } />
            </div>
            <div className="col-6">
            <label>End Time</label>
            <input
                type="time"
                format="HH:mm"
                name="ProgramSchedule"
                className="form-control"
                onChange={(event) =>
                    setstartTime(event.target.value)
                }
                value={startTime}
            />
            </div>
            <div className="col-6">
            <label>End Date</label>
            <input  name="endDate"  type="date" 
            value={ endDate } 
            className="form-control"  onChange={(e) => setendDate(e.target.value) } />
            </div>
            <div 
            style={{marginBottom:"10px"}}>
            <button className="button-create form-control" onClick={()=>{
                if(eventName == "" || hostName == "" || startTime == "" || endTime == "" || startDate == "" || endDate == "" || statename == "" || location == "" || postcode == "" || street == "" ){
                    toast.warn("Please enter all the required field", {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    return;
                }
                localStorage.setItem("eventData", JSON.stringify({
                    eventName : eventName,
                    hostName: hostName,
                    startTime: startTime,
                    endTime: endTime,
                    startDate: startDate,
                    endDate: endDate,
                    statename:statename,
                    location:location,
                    postcode:postcode,
                    street:street
                }))
                navigate("/event");
            }}>
            <div>
            Next
            </div>
            </button>
            </div>
        </div>
        </div>
    )
}

export default Create;