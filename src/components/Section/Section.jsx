import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';
import { Header } from '../Header/Header';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Header text={title}></Header>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
