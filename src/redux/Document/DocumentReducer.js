const initialState = {
    documents : []
    
}

const docuementReducer = (state = initialState , action) => {
    console.log(action.type);
    if(action.type == "FETCH_DOCUMENTS_FULFILLED"){
       console.log(action.payload);
        return {
            ...state,
            documents : action.payload
        }
    }else if(action.type == "CREATE_DOCUMENT_FULFILLED"){
        return{
            ...state,
            documents:[...state.documents , action.payload]
        }
    }else{
        return state
    }
    
}

export default docuementReducer