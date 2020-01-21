import { connect } from "react-redux";
import { binActionCreator, bindActionCreators } from "redux";
import * as clientActions from "../actions/clientAction";

import welcom from "../../pages/welcome";
import { getCliName } from "../selectors";

const mapStateToProps = state => ({
  clients: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(clientActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(welcom);
