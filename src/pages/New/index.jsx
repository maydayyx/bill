import {Button, DatePicker, Input, NavBar} from 'antd-mobile'
import Icon from '@/components/Icon/index.jsx'
import './index.scss'
import classNames from 'classnames'
import {billListData} from '@/contants'
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import {addBillList} from "@/store/modules/billStore.js";
import {useDispatch} from "react-redux";
import dayjs from "dayjs";

const New = () => {
    const navigate = useNavigate()
    // 控制收入支出的状态 pay 支出 income 收入
    const [billType, setBillType] = useState('pay')
    // 收集金额
    const [money, setMoney] = useState(0)
    const moneyChane = (value) => {
        setMoney(value)
    }
    const dispatch = useDispatch()
    // 收集账单类型
    const [useFor, setUseFor] = useState('')
    // 保存账单
    const saveBill = () => {
        //     收集表单数据
        const data = {
            type: billType,
            money: billType === 'pay' ? -money : +money,
            date: date,
            useFor: useFor
        }
        dispatch(addBillList(data))
        navigate('/')
    }
    // 存储选择的时间
    const [date, setDate] = useState()
    // 控制时间打开关闭
    const [dateVisible, setDateVisible] = useState(false)
    // 确认选择时间
    const dateConfim = (value) => {
        setDate(value)
        setDateVisible(false)
    }
    return (
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
                记一笔
            </NavBar>

            <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        className={classNames(billType === 'pay' ? 'selected' : '')}
                        onClick={() => setBillType('pay')}
                    >
                        支出
                    </Button>
                    <Button
                        className={classNames(billType === 'income' ? 'selected' : '')}
                        shape="rounded"
                        onClick={() => setBillType('income')}
                    >
                        收入
                    </Button>
                </div>

                <div className="kaFormWrapper">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type="calendar" className="icon"/>
                            <span className="text"
                                  onClick={() => setDateVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
                            <DatePicker
                                className="kaDate"
                                title="记账日期"
                                max={new Date()}
                                visible={dateVisible}
                                onConfirm={dateConfim}
                            />
                        </div>
                        <div className="kaInput">
                            <Input
                                className="input"
                                placeholder="0.00"
                                type="number"
                                value={money}
                                onChange={moneyChane}
                            />
                            <span className="iconYuan">¥</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kaTypeList">
                {billListData[billType].map(item => {
                    return (
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item => {
                                    return (
                                        // selected
                                        <div
                                            className={classNames(
                                                'item', useFor === item.type ? 'selected' : ''
                                            )}
                                            key={item.type}
                                            onClick={() => setUseFor(item.type)}
                                        >
                                            <div className="icon">
                                                <Icon type={item.type}/>
                                            </div>
                                            <div className="text">{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="btns">
                <Button className="btn save" onClick={() => saveBill()}>
                    保 存
                </Button>
            </div>
        </div>
    )
}

export default New