import {Dialog} from '@material-ui/core'

export const BoardStats = ({isOpen,closeDialog}) => {
    return <>
    <Dialog

      variant='temporary'
  
      open={isOpen}
      onClose={closeDialog}

    >
        stats here
    </Dialog>
    </>
}