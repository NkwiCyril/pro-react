// Conditional rendering
import PropTypes from 'prop-types';

function UserGreeting(props) {
  if (!props.isLoggedIn) {
    return (
      <>
        <h1 className="red">Please log in to continue</h1>
      </>
    );
  } else {
    return (
      <>
        <h1 className="green">You are logged in! Welcome {props.username}</h1>
      </>
    );
  }
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
};

export default UserGreeting;
