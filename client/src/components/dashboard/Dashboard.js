import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import DashboardActions from './DashboardActions';
import Education from "./Education";
import Experience from "./Experience";

const Dashboard = ({ getCurrentProfile,deleteAccount, auth: { user }, profile:{profile,loading} }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? <Fragment>
        <DashboardActions/>
        <Experience experience={profile.experience}/>
        <Education education={profile.education}/>
        <div className="my-2">
          <button className="btn btn-danger" onClick={()=>deleteAccount()}>
            <i className="fas fa-user-minus"></i>Delete account
          </button>
        </div>
      </Fragment> : 
      <Fragment>You have not yet setup a profile, add some info
          <Link to='/create-profile' className="btn btn-primary my-1">
              Create profile
              </Link>
          </Fragment>}
    </Fragment>
  );
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile,deleteAccount })(Dashboard);
