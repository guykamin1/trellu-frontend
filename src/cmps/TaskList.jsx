import { TaskPreview } from "./TaskPreview";
import { Draggable } from "react-beautiful-dnd";
export const TaskList = ({ tasks,groupId }) => {
  return (
    <section
    
   
    className="task-list flex column gap">
      {tasks && tasks.map((task,idx) =>

        <Draggable key={task.id} draggableId={task.id+`$$${groupId}`} index={idx}>
          {(provided)=>(

            
            <TaskPreview groupId={groupId} provided={provided} task={task} />

          )}

        </Draggable>


       )}
    </section>
  );
};
