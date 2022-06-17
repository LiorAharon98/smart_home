import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Rooms from "./Rooms";
const HomePageRoom = ({ index2, setIndex, room, setSpesificRoom }) => {
  return (
    <div>
    <Link to={"/smart_home/createroom"}>
        <button id="addRoomBtn" >Add Room!</button>
      </Link>

        <div className="roomsContainer">
      {room.map((val, index) => {
        return (
          <Rooms
            room={room}
            index2={index2}
            setIndex={setIndex}
            index={index}
            key={index}
            roomColor={val.roomColor}
            roomName={val.roomName}
          />
        );
      })}
    </div>
    </div>
  );
};

export default HomePageRoom;
