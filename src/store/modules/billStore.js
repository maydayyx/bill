// 账单列表store
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    // 数据状态
    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

//解构aciton
const {setBillList} = billStore.actions

// 异布
export const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))
    }
}



//导出reducer
const reducer = billStore.reducer

export default reducer