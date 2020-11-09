import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../actions/profile";

const Profile = ({ match, getProfileById, profile: { profile,loading }, auth }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);
  return (
    <Fragment>
        {profile===null || loading?(<span></span>): (  
         <Fragment>
        <Link to='/profiles' className='btn btn-light'>
        Back to profiles
      </Link>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to='/edit-profile' className='btn btn-dark'>Edit profile</Link>
            )}
    </Fragment>
        )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // if user is logged in, we can have edit button
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
