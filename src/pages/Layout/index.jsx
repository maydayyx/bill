import {Link, Outlet} from "react-router-dom";
import {Button} from "antd-mobile";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getBillList} from "@/store/modules/billStore.js";

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])
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