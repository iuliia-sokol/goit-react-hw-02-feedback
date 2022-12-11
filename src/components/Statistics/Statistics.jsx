import PropTypes from 'prop-types';
import { StatWrapper, StatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatWrapper>
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
