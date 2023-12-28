// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./Header";
import Note from "./Note";
import Footer from "./footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header></Header>
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
