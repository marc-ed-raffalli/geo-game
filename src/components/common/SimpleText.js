import React from 'react';
import PropTypes from 'prop-types';

const SimpleText = props => (<span>{props.text}</span>);

SimpleText.propTypes = {
  text: PropTypes.string.isRequired
};

export default SimpleText;
