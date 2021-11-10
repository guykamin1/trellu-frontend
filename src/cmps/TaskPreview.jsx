import {TaskDetails} from './TaskDetails'
import { useState } from 'react';

export const TaskPreview = ({ task }) => {

  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return <section className="task-preview">
    <div onClick={openDialog}>
    {task.title}
    </div>
    <TaskDetails task={task} closeDialog={closeDialog} isOpen={isOpen}/>
    </section>;
};
