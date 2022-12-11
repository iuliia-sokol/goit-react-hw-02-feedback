import PropTypes from 'prop-types';
import { Title } from './Header.styled';

export const Header = ({ text }) => {
  return <Title>{text}</Title>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
