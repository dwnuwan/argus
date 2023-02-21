const initialState = {
    projects : [],
    projectsByOwner : [],
    project :[],
    taksByProject:[]
    
}

const projectReducer = (state = initialState , action) => {
   
    console.log(action.type);
    if(action.type == "FETCH_PROJECTS_FULFILLED"){
      
        return {
            ...state,
            projects : action.payload
        }
    }
    if(action.type == "GET_TASK_BY_PROJECT_ID_FULFILLED"){
       
            return {
                ...state,
                taksByProject : action.payload
            }
    }else if(action.type == "CREATE_DOCUMENT_FULFILLED"){
        return{
            ...state,
            projects:[...state.projects , action.payload]
        }
        
    }
    else if(action.type == "GET_PROJECT_BY_ID_FULFILLED"){
       
        return{
            ...state,
            project: action.payload
           
        }
        
    }
    else if(action.type == "DELETE_DOCUMENT_FULFILLED"){
        return{
            ...state,
            projects:[...state.projects , action.payload]
        }
    }
    else{
        return state
    }
    
}

export default projectReducer