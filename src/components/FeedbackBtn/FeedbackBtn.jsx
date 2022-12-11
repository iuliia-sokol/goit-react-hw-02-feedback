import PropTypes from 'prop-types';
import { Btn } from './Feedbackbtn.styled';

export const Feedbackbtn = ({
  text,
  status,
  // disabled = false,
  icon: Icon,
}) => {
  return (
    <Btn status={status} type="button">
      {Icon && <Icon></Icon>}
      {text}
    </Btn>
  );
};

Feedbackbtn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
