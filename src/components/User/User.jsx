import PropTypes from 'prop-types';


const User = ({ user: { name, email }}) => {
  return (
    <>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
    </>
  );
};

User.propTypes = {
    user:PropTypes.shape({
        name: PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
    }).isRequired,
}
export default User
