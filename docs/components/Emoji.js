import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ emoji }) => (
  <span role="img" aria-label="emoji">
    {emoji}
  </span>
);

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
};

export default Emoji;
