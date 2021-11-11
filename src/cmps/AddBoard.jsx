import { boardUtils } from "../services/board-utils";
export const AddBoard = ({
  setAddMode,
  setBg,
  boardTitle,
  setBoardTitle,
  onAdd,
}) => {
  return (
    <section className="cmp">
      <div className="head flex">
        <form 
        onSubmit={(ev) => {
          ev.preventDefault()
          onAdd()
        }}
        
        className="flex" action="">

        <input
          onChange={(ev) => {
            setBoardTitle(ev.target.value);
          }}
          value={boardTitle}
          placeholder="Board title"
          type="text"
          />
        <button>+</button>
        <button
          onClick={() => {
            setAddMode(false);
            setBg("");
          }}
        >
          x
        </button>
          </form>
       
      </div>

      <div className="body flex wrap">
        {boardUtils.getBgs().map((bg,idx) => (
          <div key={idx}
            onClick={() => {
              setBg(bg);
            }}
            className="option"
          >
            <img src={bg} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};
