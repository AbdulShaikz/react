const initialState = {
   count: 0
};

const counterReducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {...state,count: state.count+1};
    case 'decerement':
      return {...state,count: state.count-1};
    case 'incrementByAmount':
      return {...state,count: state.count + action.payload};
    case 'decrementByAmount':
      return {...state,count: state.count - action.payload};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export {initialState, counterReducer};