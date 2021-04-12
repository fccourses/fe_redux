import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App (props) {
  const { step, count, dispatch } = props;

  const increment = () => dispatch(ActionCreators.increment());
  const decrement = () => dispatch(ActionCreators.decrement());
  const onChange = ({ target: { value } }) =>
    dispatch(ActionCreators.setStep(Number(value)));

  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => ({ count: state.count });

export default connect(mapStateToProps)(App);
