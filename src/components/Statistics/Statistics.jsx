import PropTypes from 'prop-types';
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
      <StatItem>{good}</StatItem>
      <StatItem>{bad}</StatItem>
      <StatItem>{neutral}</StatItem>
      <StatItem>{total}</StatItem>
      <StatItem>{positivePercentage}</StatItem>
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
