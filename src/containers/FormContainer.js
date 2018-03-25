import { connect } from 'react-redux'
import { saveLocation } from '../actions/locationActions'
import Form from '../components/Form'
import { bindActionCreators } from 'redux';
import { postLocation } from '../actions/locationActions';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
