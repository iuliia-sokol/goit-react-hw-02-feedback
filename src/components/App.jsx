import {
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from 'react-icons/bs';

import { Container, BtnWrapper } from './App.styled';
import { Header } from './Header/Header';
import { Feedbackbtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Header text="Please leave feedback"></Header>
      <BtnWrapper>
        <Feedbackbtn
          icon={BsEmojiHeartEyesFill}
          status="good"
          text="Good"
        ></Feedbackbtn>
        <Feedbackbtn
          icon={BsEmojiNeutralFill}
          status="neutral"
          text="Neutral"
        ></Feedbackbtn>
        <Feedbackbtn
          icon={BsEmojiFrownFill}
          status="bad"
          text="Bad"
        ></Feedbackbtn>
      </BtnWrapper>
      <Header text="Statistics"></Header>
      <Statistics
        good="0"
        neutral="0"
        bad="0"
        total="0"
        positivePercentage="0"
      />
    </Container>
  );
};

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
