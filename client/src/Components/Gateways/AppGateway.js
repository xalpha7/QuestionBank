import Contributor from "../../Users/contributor";
import Reviewer from '../../Users/Reviewer';
import { useSelector, useDispatch } from 'react-redux';

const AppGateway = () => {


    const dispatch = useDispatch();
    const user = useSelector(state => state.users);
    const role = useSelector(state => state.userrole)
    

    

    return (
        <>
        {role === 'contributor' ? <Contributor />  : null}
        {role === 'reviewer' ? <Reviewer />  : null}
            
          

        </>
    );
}

export default AppGateway;