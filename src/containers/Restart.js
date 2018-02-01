import React, {Component} from 'react';
import {connect} from 'react-redux';

import {restartGame} from '../actions/gameActions';

class Restart extends Component {
  render() {
    const props = this.props;

    return (
      <div onClick={props.onClick}>
        {props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(restartGame())
});

export default connect(null, mapDispatchToProps)(Restart);
