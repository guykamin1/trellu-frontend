import {Dialog} from '@material-ui/core'

export const TaskDetails = ({isOpen,closeDialog}) => {
    return <section className="task-details">
    <Dialog

      variant='temporary'
  
      open={isOpen}
      onClose={closeDialog}

    >
        Details here
    </Dialog>
    </section>
}