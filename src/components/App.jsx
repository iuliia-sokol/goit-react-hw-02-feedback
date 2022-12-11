import { Container, BtnWrapper } from './App.styled';
import { Header } from './Header/Header';
import { Feedbackbtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Header text="Please leave feedback"></Header>
      <BtnWrapper>
        <Feedbackbtn status="good" text="Good"></Feedbackbtn>
        <Feedbackbtn status="neutral" text="Neutral"></Feedbackbtn>
        <Feedbackbtn status="bad" text="Bad"></Feedbackbtn>
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
