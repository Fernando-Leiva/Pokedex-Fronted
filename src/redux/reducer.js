const initState = {
    offset:0,
    limit:100
}


export const countReducer = function (state=initState, action) {
    switch (action.type) {
      case "INCREMENT_OFFSET":
          console.log("Esta llegando",state)
        return {
            ...state,
            offset:state.offset+100
        };
      case "DECREMENT_OFFSET":
        return {
            ...state,
            offset:state.offset-100
        };
        case "INCREMENT_LIMIT":
            return {
                ...state,
                limit:state.limit+100
            };
        case "DECREMENT_LIMIT":
            return {
                ...state,
                limit:state.limit-100
            };
        case "CLEAN":
         return{
             ...initState
         }
      default:
        return state;
    }
  };