import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState={
    User:{}
    }
const users = {
    addUserToDb(state, action) {
                    const user=action.payload;
                    state.User={...user};
    }, 
 };
export default produce((state, action) => createReducer(state, action,users ), initialState);
    