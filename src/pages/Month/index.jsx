import {NavBar, DatePicker} from 'antd-mobile'
import './index.scss'
import {useMemo, useState} from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import {useSelector} from "react-redux";
import _ from 'lodash'


const Month = () => {
    // 按月分组数据
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(() => {
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    }, [billList]);

    // 控制弹窗的打开关闭
    const [dateVisible, setDateVisible] = useState(false)

    // 控制时间显示
    const [currnetDate, setCurrentDate] = useState(() => {
        return dayjs(new Date()).format('YYYY-MM')
    })

    const [currentMonthList, setCurrentMonthList] = useState([])

    const monthResult = useMemo(() => {
            const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
            const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
            return {
                pay,
                income,
                total: pay + income
            }
        }
        , [currentMonthList])

    //时间选择器确认
    const onConfirm = (time) => {
        setDateVisible(false)
        //把选中的时间赋值给currentDate
        const formatDate = dayjs(time).format('YYYY-MM')
        // 点击后获取当月的数据
        setCurrentMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate)

    }
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
             {currnetDate.toString()} 月账单
            </span>
                        <span className={classNames('arrow', dateVisible && 'expand')}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{monthResult.pay}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dateVisible}
                        max={new Date()}
                        onCancel={() => setDateVisible(false)}
                        onConfirm={onConfirm}
                        onClose={() => setDateVisible(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Month