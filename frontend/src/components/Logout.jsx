import { useSignOut } from "react-auth-kit";
import * as actions from "../store/action/action";
import { connect } from "react-redux";
import { removeCookie } from 'react-auth-kit';
import { useNavigate } from "react-router-dom";
const Logout = props => {
    const signOut = useSignOut();
    const nav = useNavigate();
    const handleLogout = async () => {
        await props.processLogout();
        signOut();
        nav('/');

    }
    return (
        <>
            <div style={{ cursor: 'pointer' }} onClick={() => { handleLogout(); }}>Log Out</div>
        </>
    )
}
const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        processLogout: async () => dispatch(actions.processLogout()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);