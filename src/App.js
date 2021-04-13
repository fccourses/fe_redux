import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';

const App = props => {
  return (
    <div>
      <Counter />
      <hr />
      <TaskForm />
      <TaskList />
      <hr />
      <HeroForm />
      <HeroList />
    </div>
  );
};

export default App;
