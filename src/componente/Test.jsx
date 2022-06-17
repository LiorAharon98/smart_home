import React from "react";

const Test = () => {
  const array = [
    { name: "lior", age: 24 },
    { name: "yuval", age: 25 },
    { name: "idan", age: 26 },
  ];
  return <div>
    {/* <button onClick={()=>{
        const updateArr = array.map((val,index)=>{
            const returnValue = {...val};
          
            return {...returnValue, age : 30 , name : 'orasd'}
        })
        console.log(array)
        console.log(updateArr)
    }}></button> */}
  </div>;
};

export default Test;
