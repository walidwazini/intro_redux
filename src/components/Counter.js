import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counterDispatch = useDispatch()
  // useSelector is to abstract data from store
  const counter = useSelector(state => (
    state.counter.value
  ))
  const show = useSelector(state => state.counter.showCounter)
  const warning = useSelector(state => state.counter.showWarning)

  const plusHandler = () => {
    counterDispatch(counterActions.increment())
  }

  const minusHandler = () => {
    console.log('hello')
    counterDispatch(counterActions.decrement())
  }

  const add10 = () => {
    counterDispatch(counterActions.increaseBy10(10))  // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const resetHandler = () => counterDispatch(counterActions.reset())

  const toggleCounterHandler = () => { counterDispatch(counterActions.toggleCounter()) };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div>
          <div className={classes.value}>-- {counter} --</div>
          {warning && (<p>This is minimum value.</p>)}
        </div>
      )}
      <div>
        <button style={{ backgroundColor: 'red' }} onClick={minusHandler} >Minus</button>
        <button style={{ backgroundColor: 'grey' }} onClick={resetHandler} >Reset</button>
        <button style={{ backgroundColor: 'blue' }} onClick={plusHandler} >Plus</button>
        <button onClick={add10} >+ 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
