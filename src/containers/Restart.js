import React, {Component} from 'react';
import {connect} from 'react-redux';

import {restartGame} from '../actions/gameActions';
import Button from '../components/common/Button';

class Restart extends Component {
  render() {
    return <Button text={'Restart'}
                   size={'small'}
                   onClick={this.props.onClick}/>
  }
}


const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(restartGame());
  }
});

export default connect(null, mapDispatchToProps)(Restart);
