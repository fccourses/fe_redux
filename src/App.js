import { connect } from 'react-redux';

function App (props) {
  const { step, count, dispatch } = props;
  const increment = () => {
    const action = { type: 'increment' };
    dispatch(action);
  };
  const decrement = () => {
    const action = { type: 'decrement' };
    dispatch(action);
  };
  const onChange = event => {
    const action = {
      type: 'setStep',
      newStep: Number(event.target.value),
    };
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
