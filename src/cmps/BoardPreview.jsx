import { useHistory } from "react-router"

export const BoardPreview = ({board}) => {

    const history = useHistory()

    return <section onClick={()=>{
        history.push(`/board/${board._id}`)
    }} className="board-preview"
     style={
         {
            backgroundImage: `url(${board.style.bgImg})`
         }
     }   
    >
       {
           <span>
               {board.title}
           </span>
       }
    </section>
}