import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school,degree,fieldOfStudy, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark'>
      {school}
      <p>
        <Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field of study: </strong> {fieldOfStudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    
    </h3>
  </div>
);

export default ProfileEducation;
