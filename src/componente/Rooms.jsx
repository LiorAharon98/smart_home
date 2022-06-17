import { Link } from "react-router-dom";
const Rooms = ({ room, index2, setIndex, index, roomName, roomColor }) => {
  return (
    <div>
      <div className="rooms">
        <Link style={{ textDecoration: "none" }} to={`/room-${roomName}`}>
          {" "}
          <div
            onClick={() => {
              setIndex(index);
            }}
            className="room"
            style={{ backgroundColor: roomColor }}
          >
            {roomName}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
