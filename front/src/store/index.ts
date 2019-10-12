import { createStore } from 'redux'
import reducers from './reducers'

export {
  addPlayer
} from './actions'


export const store = createStore(reducers)

// export const initRedux = function():any {
//   const submitButton = <HTMLFormElement>document.getElementById('form');
//   const input = <HTMLInputElement>document.getElementById('todo');

//   submitButton.addEventListener('submit', function(e){
//     e.preventDefault()
//     store.dispatch(addPlayer({name: input.value, life : 20}))
//     console.log(store.getState())
//     return false;
//   })
//   // Log the initial state
//   const store = createStore(reducers)

//   console.log('init Redux');
//   console.log(store.getState())

//   // Every time the state changes, log it
//   // Note that subscribe() returns a function for unregistering the listener
//   const unsubscribe = store.subscribe(() => {
//     console.log('subscribe')
//     console.log(store.getState())
//   })

//   // // Dispatch some actions
//   // store.dispatch(addTodo('Learn about actions'))
//   // store.dispatch(addTodo('Learn about reducers'))
//   // store.dispatch(addTodo('Learn about store'))
//   // store.dispatch(toggleTodo(0))
//   // store.dispatch(toggleTodo(1))
//   // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

//   // Stop listening to state updates
//   //unsubscribe()
// }
