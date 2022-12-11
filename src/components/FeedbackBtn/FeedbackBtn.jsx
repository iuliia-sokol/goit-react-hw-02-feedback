import PropTypes from 'prop-types';
import { Btn } from './Feedbackbtn.styled';

export const Feedbackbtn = ({ text, status }) => {
  return <Btn status={status}>{text}</Btn>;
};

Feedbackbtn.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
