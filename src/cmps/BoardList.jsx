import { BoardPreview } from "./BoardPreview"

export const BoardList = ({boards}) => {

    return <section className="board-list flex gap wrap">
        {
            boards.map(board => <BoardPreview board={board} key={board._id}/>)
        }
    </section>
}