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
        <input
          onChange={(ev) => {
            setBoardTitle(ev.target.value);
          }}
          value={boardTitle}
          placeholder="Board title"
          type="text"
        />
        <button onClick={onAdd}>Add</button>
        <button
          onClick={() => {
            setAddMode(false);
            setBg("");
          }}
        >
          X
        </button>
      </div>

      <div className="body flex wrap">
        {boardUtils.getBgs().map((bg) => (
          <div
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
