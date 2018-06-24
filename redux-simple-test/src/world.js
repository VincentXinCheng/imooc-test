import {combineReducers} from 'redux'

export default  worldCupReducer=(state={seededTeam:false,country:'WorldCup'},action)=>{
    switch(action.type){
        case 'LOGIN':
        return {
            ...state,
            seededTeam:true   
        }
        case 'LOGOUT':
        return {
            ...state,
            seededTeam:false
        }
        default:
        return state
    }
}

// export function login(){
//     return {
//         type:'LOGIN',
//     }
// }
// export function logout(){
//     return {
//         type:'LOGOUT',
//     }
// }