import { useSelector } from "react-redux"
import StarsIcon from '@mui/icons-material/Stars';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import { BoardMenu } from "./BoardMenu";
import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { renameBoard,toggleFavorite } from "../store/actions/board.actions";

export const BoardOptions = () => {

    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)
    const [boardTitle, setTitle] = useState(board?.title)
    const titleRef = useRef()

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
            <span className="icon"><GroupIcon/></span>

        </div>

        <div className="options2 flex gap center-center">
        <span className="icon"><BarChartIcon/></span>
        <BoardMenu titleRef={titleRef}/>
        </div>

    </section>
}