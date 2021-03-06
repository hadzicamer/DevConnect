import React from "react";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>
      {company}
      <p>
        <Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </h3>
  </div>
);

export default ProfileExperience;
