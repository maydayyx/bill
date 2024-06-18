import {Link, Outlet} from "react-router-dom";
import {Button} from "antd-mobile";

const Layout = () => {
    return (
        <div>
            I am Layout
            <Link to='/'>月度</Link>
            <Link to='/year'>年度</Link>
        <Outlet/>
            <Button color='primary'>测试</Button>
            <div className='purple-theme'>
                <Button color='primary'>局部</Button>
            </div>
        </div>
    )
}

export default Layout