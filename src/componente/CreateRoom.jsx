import { Link } from "react-router-dom";
const CreateRoom = ({ roomName, setRooms, room, setRoomName, setRoomType, setRoomColor }) => {
  return (
    <div className="createRoomContainer">
      <h1> create room!</h1>
      <select
        className="createRoomInp"
        onChange={(e) => {
          setRoomType(e.target.value);
        }}
      >
        <option value="chooseType">choose type</option>
        <option value="bedRoom">bedRoom</option>
        <option value="bathRoom">bathRoom</option>
        <option value="kitchen">kitchen</option>
      </select>
      <input
        className="createRoomInp"
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
        type="text"
        placeholder="roomName"
      />
      <input
        className="createRoomInp"
        onChange={(e) => {
          setRoomColor(e.target.value);
        }}
        type="text"
        placeholder="roomColor"
      />
      <Link to={"./"}>
        <button
          id="createRoomBtn"
          onClick={() => {
            if (roomName.length > 5) return alert("error");
            else if (roomName == "") {
              alert("error2");
            }
            setRooms((prevRoom) => {
              return [...prevRoom, room];
            });
          }}
        >
          Add!
        </button>
      </Link>
    </div>
  );
};

export default CreateRoom;
