import {Outlet} from "react-router-dom";

import Header from "../header/Header";

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <div className={css.header}><Header/></div>
            <div className={css.outlet}><Outlet/></div>
            <div className={css.footer}>@ReactRouterDom</div>
        </div>
    );
};

export {Layout};