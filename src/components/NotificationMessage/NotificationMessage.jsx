import PropTypes from 'prop-types';
import { NotificationText } from './NotificationMessage.styled';

export const NotificationMessage = ({ text }) => {
  return <NotificationText>{text}</NotificationText>;
};

NotificationMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
