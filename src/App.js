import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = props => {
  return (
    <div>
      <Counter />
      <hr />
      <TaskForm />
      <TaskList />
      <hr />
    </div>
  );
};

export default App;
