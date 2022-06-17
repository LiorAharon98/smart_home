import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddedProducts = ({ CreatedRoom, rooms, index2, roomProducts, setRoomProducts, setRooms, room }) => {
  const [displayProductsOption,setDisplayProductsOption] = useState('none')
  return (
    <div style={{ backgroundColor: rooms[index2].roomColor }} className="spesificRoomContainer">
      <div className="spesificRoom">
        <h1>Room!</h1>
        <div className="spesificRoomDeatils">room type : {rooms[index2].roomType}</div>
        <div className="spesificRoomDeatils">room name : {rooms[index2].roomName}</div>
        {typeof rooms[index2].products[0] !== "undefined" ? (
          <div className="spesificRoomDeatils">products : {rooms[index2].products[0].roomProducts}</div>
        ) : (
          ""
        )}
      </div>
<button onClick={(e)=>{
  setDisplayProductsOption('block')
  e.target.style.display = 'none'
}} className="addProcutsBtn">add product</button>
<div style={{display : displayProductsOption }} className="spesificRoomDisplay">


      <select
        id="selectAddProducts"
        onChange={(e) => {
          setRoomProducts(e.target.value);
        }}
      >
        <option value="">choose product</option>
        <option value="air conditioner">air conditioner</option>
        <option value="boiler">boiler</option>
        <option value="lamp">lamp</option>
        <option value="stereo">stereo</option>
      </select>

      <Link to={"./"}>
        <button id="addProductsSpesificRoom"
          
          onClick={() => {
            if (rooms[index2].roomType !== "bathRoom") {
              if (roomProducts == "boiler") return alert("err");
            }
            setRooms(() => {
              const roomAfterMap = rooms.map((val, index) => {
                const returnValue = { ...val };
                if (rooms[index2] == val) {
                  return { ...returnValue, products: [{ roomProducts, switch: false }] };
                } else return { ...returnValue };
              });

              return roomAfterMap;
            });
          }}
        >
          Add!
        </button>
      </Link>
      </div>
    </div>
  );
};

export default AddedProducts;
