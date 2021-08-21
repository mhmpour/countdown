import React from 'react';
import {Link} from 'react-router-dom';

import {useLocation} from 'react-router-dom' //***********

function Header()
{
    let {pathname} = useLocation();//***********

    return (
        <div>
        <div>{pathname} </div>
        <ul >
            <li>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </li>
            <li>
                <Link to="/type1">
                    <button> Countdown Type1</button>
                </Link>
            </li>
            <li>
                <Link to="/type2">
                    <button>Countdown Type2</button>
                </Link>
            </li>
        </ul>
        </div>
    );
}
export default Header;