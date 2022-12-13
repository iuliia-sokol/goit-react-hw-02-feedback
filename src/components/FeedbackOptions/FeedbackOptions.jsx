import PropTypes from 'prop-types';

import { BtnWrapper } from './FeedbackOptions.styled';
import { Feedbackbtn } from '../FeedbackBtn/FeedbackBtn';
import { icons } from './icons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <Feedbackbtn
            key={option}
            icon={icons[option]}
            type="button"
            status={option}
            text={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Feedbackbtn>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
