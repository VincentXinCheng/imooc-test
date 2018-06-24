export const reducer=(state=0,action)=>{
    switch(action.type){
           case 'ADD_GUN':
           return state+action.number
           case 'ADD_DBL_GUN':
           return state+action.number
           case 'REDUCE_GUN':
           return state+action.number
           default:
           return state
    }
}

export function addGun(){
    return {
        type:'ADD_GUN',
        number:1
    }
}

export function addDblGun(){
    return {
        type:'ADD_DBL_GUN',
        number:10
    }
}

export function reduceGun(){
    return {
        type:'REDUCE_GUN',
        number:-1
    }
}
export function asyncAddGun(dispatch){
    return dispatch=>{
        setTimeout(() => {
            dispatch(addDblGun())
        }, 2000);
    }
}