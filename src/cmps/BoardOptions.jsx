import { useSelector } from "react-redux"

export const BoardOptions = () => {

    const board = useSelector(state => state.boardModule.board)

    return <section className="board-options flex space-between">

        <div className="options flex gap center-center">
            <span>
        {
            board?.title
        }
            </span>

            <button>favorite</button>
            <button>members</button>

        </div>

        <div className="options2 flex gap center-center">
        <button>charts</button>
        <button>menu</button>
        </div>

    </section>
}