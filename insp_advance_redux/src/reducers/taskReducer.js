import { uniqueId } from '../actions/actions.js'

const mockTasks = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "InProgress"
  },
  {
    id: uniqueId(),
    title: "Go to office",
    description: "Get Up, Get Ready and Go to Office.",
    status: "Unstarted"
  }
];

export default function(state = mockTasks, action) {
  console.log("action:", action);
  if (action.type === 'CREATE_TASK') {
    const payload = [action.payload];
    const newState = state.concat(payload);
    return newState;
  }
  return state;
}
