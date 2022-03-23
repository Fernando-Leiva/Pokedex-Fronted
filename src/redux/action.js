

export const incrementOffset = () => (dispatch)=>{
    try {
        dispatch({type:'INCREMENT_OFFSET'})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}

export const decrementOffset = () => (dispatch)=>{
    try {
        dispatch({type:'DECREMENT_OFFSET'})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}

export const incrementLimit = () => (dispatch)=>{
    try {
        dispatch({type:'INCREMENT_LIMIT'})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}

export const decrementLimit = () => (dispatch)=>{
    try {
        dispatch({type:'DECREMENT_LIMIT'})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}
export const myToggle = (value) => (dispatch)=>{
    try {
        dispatch({type:'TOGGLE',payload:value})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}
export const clean = () => (dispatch)=>{
    try {
        dispatch({type:'CLEAN'})
    } catch (error) {   
        console.error('An error ocurred',error)
    }
}