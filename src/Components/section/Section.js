import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ children }) => <section>{children}</section>;

Section.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Section;
