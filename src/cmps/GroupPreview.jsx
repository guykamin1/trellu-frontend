import { TaskList } from "./TaskList";

export const GroupPreview = ({ group }) => {
  return (
    <section className="group-preview flex column gap">
      <div className="group-header flex space-between">
        <span>{group.title}</span>

        <span>***</span>
      </div>

      {group.tasks.length && <TaskList tasks={group.tasks} />}

      <div className="group-footer flex space-between">
        <div className="add flex">
          <button>+</button>
          <input placeholder="Add a task" type="text" />
        </div>

        <div className="av flex center-center">
          <small>A</small>
          <small>V</small>
        </div>
      </div>
    </section>
  );
};
