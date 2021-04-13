import { connect } from 'react-redux';
import * as ActionCreators from '../actions/counterCreators';

function Counter (props) {
  const {
    step,
    count,
    incrementAction,
    decrementAction,
    setStepAction,
  } = props;

  const onChange = ({ target: { value } }) => setStepAction(Number(value));

  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrementAction}>-</button>
      <button onClick={incrementAction}>+</button>
    </div>
  );
}

const mapStateToProps = ({ counter }) => counter;
const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(ActionCreators.increment()),
  decrementAction: () => dispatch(ActionCreators.decrement()),
  setStepAction: newStep => dispatch(ActionCreators.setStep(newStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
