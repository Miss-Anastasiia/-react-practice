import User from '../User/User';
import PropTypes from 'prop-types';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <User user={{ name, email }} />
        </li>
      ))}
    </ul>
  );
};

UsersList.protoType = {
    users: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
    }).isRequired,
).isRequired,
}