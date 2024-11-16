import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BookingContent from "./components/BookingContent";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const LOCAL_STORAGE_KEY = "seats";
  const [seats, setSeats] = useState([]);
  const minRowCol = 12;
  const seatSerial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const availableSeats = () => {
    let seatsObj = [];
    const max = 100;
    for (let i = 1; i <= 10; i++) {
      console.log("in i", i);
      for (let j = 1; j <= 10; j++) {
        console.log("in j", j, i);
        if (j === 4 || j === 9) {
          console.log("in if j40r9--", j, i);
          seatsObj.push("/n");
        } else {
          seatsObj.push(`${seatSerial[i - 1]}${j}`);
          console.log("in push", `${seatSerial[i - 1]}${j}`);
        }
      }
    }
  };
  const addSeatHandler = (seat) => {
    const arr = [...seats, { id: uuidv4(), ...seat }];
    console.log(seat, arr);
    setSeats(arr);
  };

  const removeSeatHandler = (id) => {
    const newSeatList = seats.filter((seat) => {
      return seat.id !== id;
    });
    setSeats(newSeatList);
  };

  useEffect(() => {
    const retriveSeats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveSeats) setSeats(retriveSeats);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seats));
  }, [seats]);

  return (
    <div className="App">
      <Header addSeatHandler={addSeatHandler}></Header>
      {/* <BookingContent seats={seats} getContactId={removeSeatHandler} /> */}
    </div>
  );
};

export default App;
