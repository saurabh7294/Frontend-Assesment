import { useState, useEffect } from "react";
import "./event.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { ImCalendar, ImLocation } from "react-icons/im";

const Event = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("eventData")));
  }, []);
  return (
    <div className="row">
      <div className="col-6 text-main2">
        <div>
          <div className="eventName">{data.eventName}</div>
          <div className="hostName">Hosted by {data.hostName}</div>
          <div className="dateName">
            <div className="dataNameicon">
              <ImCalendar />
            </div>
            <div className="datemain">
              <div className="startDate">
                {data.startDate} {data.startTime}
              </div>
              <div className="startDate2">
                {" "}
                to {data.endDate} {data.endTime}
              </div>
            </div>
          </div>
          <div className="dateName">
          <div className="dataNameicon" >
            <ImLocation />
            </div>
            <div className="datemain">
            <div className="startDate">
              {data.street} {data.startTime}
            </div>
            <div className="startDate2">
              {" "}
              {data.location}, {data.statename}, {data.postcode}
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 landing-main">
        <div className="landing-image">
          <img
            className=""
            // style={{marginTop:"100px"}}
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T050207Z&X-Amz-Expires=86400&X-Amz-Signature=dec902a51ec5b20e873244e675f4bfbca4e43195c6e9baa7b187ac948c76a5ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
