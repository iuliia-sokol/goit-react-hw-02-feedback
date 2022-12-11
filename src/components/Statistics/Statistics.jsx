import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { AiOutlinePercentage } from 'react-icons/ai';
import { TbFileLike } from 'react-icons/tb';
import { StatWrapper, StatItem } from './Statistics.styled';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatWrapper>
      <NotificationMessage text="There is no feedback"></NotificationMessage>

      <StatItem>
        <BsEmojiHeartEyes></BsEmojiHeartEyes>
        {good}
      </StatItem>

      <StatItem>
        <BsEmojiNeutral></BsEmojiNeutral>
        {neutral}
      </StatItem>

      <StatItem>
        <BsEmojiFrown></BsEmojiFrown>
        {bad}
      </StatItem>
      <StatItem>
        <TbFileLike></TbFileLike>
        {total}
      </StatItem>
      <StatItem>
        <AiOutlinePercentage></AiOutlinePercentage>
        {positivePercentage}
      </StatItem>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
