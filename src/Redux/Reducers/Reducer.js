const Init = {
    Carts:[]
};
export const CartRedcuer=(state=Init,action)=>{
    switch(action.type){
        case "ADD_CART":
return{
    ...state,
    Carts:[...state.Carts,action.payload]
}

case "RMV_CART":
    const data = state.Carts.filter((items) => items.id !== action.payload)
    
    return{
        ...state,
        Carts:data
    }
default :
return state
    }
}