const initialState = {
    tasks : [],
    tasksOfSelectedCompany : []
}

const taskReducer = (state = initialState , action) => {
    console.log(action.type);
    if(action.type == "FETCH_TASKS_FULFILLED"){
       console.log(action.payload);
        return {
            ...state,
            tasks : action.payload
        }
    }else if(action.type == "CREATE_TASK_FULFILLED"){
        return{
            ...state,
            brands:[...state.tasks , action.payload]
        }
    }else{
        return state
    }
    
}

export default taskReducer
