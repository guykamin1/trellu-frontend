import { TaskList } from "./TaskList"

export const GroupPreview = ({group}) => {
    return <section className="group-preview flex column gap">
        
    <div className="group-header flex space-between">
    <span>
        {
            group.title
        }
    </span>

    <span>***</span>
    </div>

    {
        group.tasks.length && <TaskList tasks={group.tasks}/>
    }

    <div className="group-footer flex space-between">
    
    <div>
        <button>+</button>
        <input placeholder="Add a task" type="text" />
    </div>

    <div>
    <span>A</span>
    <span>V</span>
    </div>
   
    </div>


    </section>
}