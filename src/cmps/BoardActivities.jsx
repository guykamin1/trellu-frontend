import {Drawer} from '@material-ui/core'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export const BoardActivities = ({isOpen,closeDrawer,openDrawer,board}) =>{


    return <>
    <Drawer
   
    anchor="right"

    variant='temporary'

    open={isOpen}
    onClose={closeDrawer}

    >
        <div className="title">
            Activity Log
        </div>
       {
           board?.activities?.length ? board?.activities?.map(activity =>
            <div>
                {
                    activity.entity+' '+activity.action
                }
            </div>
              ) : ''
       }

    </Drawer>
    </>
}