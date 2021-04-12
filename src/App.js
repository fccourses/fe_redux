import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App (props) {
  const { step, count, dispatch } = props;
  const increment = () => {
    const action = ActionCreators.increment();
    dispatch(action);
  };
  const decrement = () => {
    const action = ActionCreators.decrement();
    dispatch(action);
  };
  const onChange = event => {
    const action = ActionCreators.setStep(Number(event.target.value));
    dispatch(action);
  };
  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
const mapStateToProps = state => state;
/* 
const withProps = connect(mapStateToProps);
const ComponentWithProps = withProps(App);
export default ComponentWithProps; 
*/
export default connect(mapStateToProps)(App);
