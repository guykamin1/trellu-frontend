import { TaskPreview } from "./TaskPreview";

export const TaskList = ({ tasks }) => {
  return (
    <section className="task-list flex column gap">
      {tasks && tasks.map((task) => <TaskPreview task={task} key={task.id} />)}
    </section>
  );
};
