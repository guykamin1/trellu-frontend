import { TaskPreview } from "./TaskPreview";

export const TaskList = ({ tasks }) => {
  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <TaskPreview task={task} key={task.id} />)}
    </section>
  );
};
