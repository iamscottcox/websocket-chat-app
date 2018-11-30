import { connect } from 'react-redux';

import MessagesList from './display';

const mapStateToProps = (state) => {
  console.log('state', state)
  return ({
    messages: state.messages,
  });
};

export default connect(mapStateToProps)(MessagesList);