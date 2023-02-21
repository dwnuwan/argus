const initialState = {
    documents : [],
    document : []
    
}

const docuementReducer = (state = initialState , action) => {
   
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
        
    }
    else if(action.type == "GET_DOCUMENT_BY_ID_FULFILLED"){
       
        return{
            ...state,
            document: action.payload
           
        }
        
    }
    else if(action.type == "DELETE_DOCUMENT_FULFILLED"){
        return{
            ...state,
            documents:[...state.documents , action.payload]
        }
    }
    else{
        return state
    }
    
}

export default docuementReducer