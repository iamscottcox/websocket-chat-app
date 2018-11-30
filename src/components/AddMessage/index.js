import { connect } from 'react-redux';
import { addMessage } from '../../actions';

import AddMessage from './display';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addMessage(message, author) {
    dispatch(addMessage(message, author));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);