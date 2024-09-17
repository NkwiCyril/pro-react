import profilePicture from "../assets/main_pic_clear.jpeg";
import styles from './Card.module.css';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <img src={profilePicture} alt="profile picture" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.isStudent ? 'Yes' : 'No'}</p>
      </div>
      <br />
    </>
  );
}

// working with prop types in order to validate prop datatype
Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  isStudent: PropTypes.bool,
}

// Including default properties
Card.defaultProps = {
  name: "Guest",
  description: "I am here to learn",
  isStudent: false,
}

export default Card;
