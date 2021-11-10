import { useSelector } from "react-redux"
import StarsIcon from '@mui/icons-material/Stars';
import GroupIcon from '@mui/icons-material/Group';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';

export const BoardOptions = () => {

    const board = useSelector(state => state.boardModule.board)

    return <section className="board-options flex space-between">

        <div className="options flex gap center-center">
            <span class="title">
        {
            board?.title
        }
            </span>

            <span className="icon"><StarsIcon/></span>
            <span className="icon"><GroupIcon/></span>

        </div>

        <div className="options2 flex gap center-center">
        <span className="icon"><BarChartIcon/></span>
        <span className="icon"><MoreHorizIcon/></span>
        </div>

    </section>
}