import {Dialog} from '@material-ui/core'

export const TaskDetails = ({isOpen,closeDialog}) => {
    return <>
    <Dialog

      variant='temporary'
  
      open={isOpen}
      onClose={closeDialog}

    >
        Details here
    </Dialog>
    </>
}