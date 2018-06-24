const loginReducer=(state={isAuth:false,country:'Russia'},action)=>{
    switch(action.type){
        case 'LOGIN':
        return {
            ...state,
            isAuth:true
        }
        default:
        return state
    }
}

export default loginReducer