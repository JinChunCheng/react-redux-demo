import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as allActions from '../actions/index';
import {GetData} from '../components/dashbord/Main';
const mapStateToProps = state => ({
    btnVal: state.getDataReducer.btnVal,
    name:state.getDataReducer.name,
    age:state.getDataReducer.age
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
});
const GetDataConnect = connect(mapStateToProps, mapDispatchToProps)(GetData);
export default GetDataConnect;
