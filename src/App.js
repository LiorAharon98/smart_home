import React, { useState } from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import CreateRoom from "./componente/CreateRoom";
import SpesificRoom from "./componente/SpesificRoom";
import HomePageRoom from "./componente/HomePageRoom"
import Title from "./componente/Title";
import "./componente/style.css"
const App = () => {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomColor, setRoomColor] = useState("");
  const [roomProducts, setRoomProducts] = useState("");
  const [rooms, setRooms] = useState([]);
  const CreatedRoom = new Room(roomType, roomName, roomColor, roomProducts);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Title/>
        <Routes>
  
          <Route
            path="/smart_home/"
            element={<HomePageRoom index2={index} setIndex={setIndex}  room={rooms} />}
          >
            {" "}
          </Route>
          {<Route
            path="/smart_home/createroom"
            element={
              <CreateRoom
              roomName = {roomName}
              roomProducts={roomProducts}
                setRooms={setRooms}
                room={CreatedRoom}
                setRoomName={setRoomName}
                setRoomType={setRoomType}
                setRoomColor={setRoomColor}
              />
            }
          >
            {" "}
          </Route> }
          <Route
            path="/smart_home/room:id"
            element={
              <SpesificRoom
                CreatedRoom={CreatedRoom}
                rooms={rooms}
                index2={index}
                roomProducts={roomProducts}
                setRoomProducts={setRoomProducts}
                setRooms={setRooms}
                room={CreatedRoom}
              />
            }
          >
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
class Room {
  constructor(roomType, roomName, roomColor, products) {
    this.roomType = roomType;
    this.roomName = roomName;
    this.roomColor = roomColor;
    this.products = products;
  }
}

export default App;
