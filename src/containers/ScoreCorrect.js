import {connect} from 'react-redux';

import SimpleText from '../components/common/SimpleText';

const mapStateToProps = ({game}) => ({
  text: game.correct.toString()
});

export default connect(mapStateToProps)(SimpleText);
