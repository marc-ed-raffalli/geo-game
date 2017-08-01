import React from 'react';
import {connect} from 'react-redux';

import SimpleText from '../components/common/SimpleText';

const Timer = ({active, timeout}) => {
    const text = active ? timeout.toString() : 'End';
    return <SimpleText text={text}/>;
  },
  mapStateToProps = state => ({
    active: state.timer.active,
    timeout: state.timer.timeout
  });

export default connect(mapStateToProps)(Timer);
