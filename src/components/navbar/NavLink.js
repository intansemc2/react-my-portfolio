import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function NavLink({ label, to, exact }) {
    let match = useRouteMatch({
        path: to,
        exact: exact,
    });
    return (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    );
}

export default NavLink;
