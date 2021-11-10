import {Drawer} from '@material-ui/core'
import { useState } from 'react'
export const BoardActivities = ({isOpen,closeDrawer,openDrawer,board}) =>{



    return <>
    <Drawer
   
    anchor="right"

    variant='temporary'

    open={isOpen}
    onClose={closeDrawer}

    >
       activities here
    </Drawer>
    </>
}