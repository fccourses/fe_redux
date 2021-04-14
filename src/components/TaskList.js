import { connect } from 'react-redux';
import * as TaskCreators from '../actions/taskCreators';

const TaskList = props => {
  const { tasks, updateAction, deleteAction } = props;

  

  return (
    <section>
      <h1>Task LIST</h1>
      <ul>
        {tasks.map(({ id, ...task }) => (
          <li key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1>ID: {id}</h1>
              <div>{task.body}</div>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) =>
                  updateAction({
                    id,
                    values: {
                      isDone: checked,
                    },
                  })
                }
              />
            </div>
            <button onClick={() => deleteAction(id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ task: { tasks } }) => ({ tasks });
const mapDispatchToProps = dispatch => ({
  deleteAction: id => dispatch(TaskCreators.deleteTask(id)),
  updateAction: ({ id, values }) =>
    dispatch(TaskCreators.updateTask({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
