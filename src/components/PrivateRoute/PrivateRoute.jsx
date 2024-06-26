import PropTypes from 'prop-types';
import useAuth from '../../hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
   children: PropTypes.any 
};

export default PrivateRoute;