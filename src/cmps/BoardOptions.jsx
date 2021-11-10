import { useSelector } from "react-redux"
import StarsIcon from '@mui/icons-material/Stars';
import BarChartIcon from '@mui/icons-material/BarChart';
import { BoardMenu } from "./BoardMenu";
import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { renameBoard,toggleFavorite } from "../store/actions/board.actions";
import { TrelluMembersMenu } from "./TrelluMembersMenu";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { BoardActivities } from "./BoardActivities";
import {BoardStats} from './BoardStats'

export const BoardOptions = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false)
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)
    const [boardTitle, setTitle] = useState(board?.title)
    const titleRef = useRef()

    const closeDrawer = () => {
        setDrawerOpen(false)
    }

    const openDrawer = () => {
        setDrawerOpen(true)
    }

    const closeDialog = () => {

        setDialogOpen(false)
    }

    const openDialog = () => {

        setDialogOpen(true)
    }

    const handleChange = (ev) => {
        setTitle(ev.target.value)
    }

    const onFavorite = () => {
        dispatch(toggleFavorite(board._id))
    }

    const onBlur = () => {
        dispatch(renameBoard(board._id,boardTitle))
    }

    return <section className="board-options flex space-between">

        <div className="options flex gap center-center">
            <span class="title">
            <input
            style={{
                width:`${boardTitle?.length + 0.5}ch`
            }}
            value={boardTitle} type="text"
            onChange={handleChange}
            onBlur={onBlur}
            ref={titleRef}
            />
            </span>

            <span className="icon"><StarsIcon
            style={{
                color:`${board?.isFavorite ? 'yellow' : 'black'}`
            }}
            onClick={onFavorite}
            /></span>
            <TrelluMembersMenu/>

        </div>

        <div className="options2 flex gap center-center">

        <span className="icon"><BarChartIcon onClick={openDialog}/></span>
        
           <span className="icon"> <FormatListBulletedIcon
            onClick={openDrawer}
            /></span>


        <BoardMenu titleRef={titleRef}/>

        <BoardActivities board={board} openDrawer={openDrawer} closeDrawer={closeDrawer} isOpen={isDrawerOpen}/>

            <BoardStats closeDialog={closeDialog} board={board} isOpen={isDialogOpen}/>
            
        </div>

    </section>
}