import PropTypes from 'prop-types';
import { Btn } from './Feedbackbtn.styled';

export const Feedbackbtn = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,

  onClick,
}) => {
  return (
    <Btn status={status} type="button" disabled={disabled} onClick={onClick}>
      {Icon && <Icon />}
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
