export const INITIAL_STATE={

    user:null,
    token:null

}

export const actionTypes={
    SET_USER:'SET_USER',
    SET_TOKEN:'SET_TOKEN'
}

const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionTypes.SET_USER:
        console.log('prev state',state)
        console.log('current state', { ...state, user: action.payload })
        return { ...state, user: action.payload };

       case actionTypes.SET_TOKEN:
         console.log('prev state',state)
        console.log('current state', { ...state, token: action.payload })
        return { ...state, token: action.payload };
      
      default:
        return state;
    }
  };
  
  export default reducer;