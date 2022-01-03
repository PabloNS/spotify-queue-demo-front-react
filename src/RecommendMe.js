import React from "react";
import axios from "axios";

function RecommendMe() {
  return (
    <div>
      <button onClick={() => 
        navigator.geolocation.getCurrentPosition(function(position) {
          axios
            .post("http://localhost:8080/user/recommendMe",
            {
              positionLatitude: position.coords.latitude,
              positionLongitude: position.coords.longitude,
              positionAccuracy: position.coords.accuracy
            })
            .then((response) => {

            })
            .catch(() => {
            });
        })
        }>
        Recommend Me</button>
    </div>
  );
};

export default RecommendMe;