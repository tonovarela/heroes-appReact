import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';



export const Navbar = () => {
    const {user,dispatch} = useContext(AuthContext);        
    const navigate = useNavigate();
    
    const logOut =()=>{        
        const action = { type:types.logout}
        dispatch(action)
        navigate("/login",{replace:true})
         

    }

    const verificarActive =({isActive})=>`nav-item nav-link ${(isActive?'active':'')}`;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={verificarActive}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={verificarActive}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={verificarActive}
                        to="/search"
                    >
                        Seach
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button
                    onClick={logOut}
                        className="nav-item nav-link btn">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}