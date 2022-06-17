import React, { useState } from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";

import CreateRoom from "./componente/SmartHome2/CreateRoom"
import SpesificRoom from "./componente/SmartHome2/SpesificRoom";
import HomePageRoom from "./componente/SmartHome2/HomePageRoom";
import Title from "./componente/SmartHome2//Title";
import Test from "./componente/SmartHome2/Test";
const App = () => {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomColor, setRoomColor] = useState("");
  const [roomProducts, setRoomProducts] = useState("");
  const [rooms, setRooms] = useState([]);
  const [spesificRoom, setSpesificRoom] = useState([]);
  const CreatedRoom = new Room(roomType, roomName, roomColor, roomProducts);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <Title/>
        <Routes>
          <Route
            path="/"
            element={<HomePageRoom index2={index} setIndex={setIndex} setSpesificRoom={setSpesificRoom} room={rooms} />}
          >
            {" "}
          </Route>
          <Route
            path="/createroom"
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
          </Route>
          <Route
            path="/room:id"
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
