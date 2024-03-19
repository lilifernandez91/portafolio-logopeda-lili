import { Fragment } from "react";
import FooterComponent from "./footer";
import MenuComponent from "./menu";

const Layout = (props) => {
    return (
        <Fragment>
            <MenuComponent />
            <main className="main-website">{props.children}</main>
            <FooterComponent />
        </Fragment>
    );
}

export default Layout;