import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { AiOutlinePercentage } from 'react-icons/ai';
import { TbFileLike } from 'react-icons/tb';
import { StatWrapper, StatItem } from './Statistics.styled';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  if (good || neutral || bad) {
    return (
      <StatWrapper>
        <StatItem>
          <BsEmojiHeartEyes />
          {good}
        </StatItem>
        <StatItem>
          <BsEmojiNeutral />
          {neutral}
        </StatItem>
        <StatItem>
          <BsEmojiFrown />
          {bad}
        </StatItem>
        <StatItem>
          <TbFileLike />
          {total}
        </StatItem>
        <StatItem>
          <AiOutlinePercentage />
          {positivePercentage}
        </StatItem>
      </StatWrapper>
    );
  } else {
    return <NotificationMessage text="There is no feedback" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
