import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            I am Layout
            <Link to='/'>月度</Link>
            <Link to='/year'>年度</Link>
        <Outlet/>
        </div>
    )
}

export default Layout