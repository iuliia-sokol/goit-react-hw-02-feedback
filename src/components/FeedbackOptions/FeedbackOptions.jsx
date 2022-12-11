import PropTypes from 'prop-types';

import {
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from 'react-icons/bs';

import { BtnWrapper } from './FeedbackOptions.styled';
import { Feedbackbtn } from '../FeedbackBtn/FeedbackBtn';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <Feedbackbtn
        icon={BsEmojiHeartEyesFill}
        status={options[0]}
        text={options[0]}
        onClick={onLeaveFeedback[0]}
      ></Feedbackbtn>
      <Feedbackbtn
        icon={BsEmojiNeutralFill}
        status={options[1]}
        text={options[1]}
        onClick={onLeaveFeedback[1]}
      ></Feedbackbtn>
      <Feedbackbtn
        icon={BsEmojiFrownFill}
        status={options[2]}
        text={options[2]}
        onClick={onLeaveFeedback[2]}
      ></Feedbackbtn>
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};
