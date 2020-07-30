import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32810.06237481645!2d7.327164064793074!3d9.005793252468377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73d6ec667269%3A0x99b6450e10b58697!2sLugbe%20Plaza!5e0!3m2!1sen!2sng!4v1596035181748!5m2!1sen!2sng"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="myFrame"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
