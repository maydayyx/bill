// 账单列表store
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill', // 数据状态
    initialState: {
        billList: []
    }, reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload
        }, //同步
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})

//解构aciton
const {setBillList,addBill} = billStore.actions

// 异布
export const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))
    }
}

export const addBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:8888/ka', data)
        dispatch(addBill(res.data))
    }
}

//导出reducer
const reducer = billStore.reducer

export default reducer