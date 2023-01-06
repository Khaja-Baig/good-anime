import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Action: [
    { name: "Castlevania", rating: "8.3/10" ,descrption:"Inspired by the popular video game series, this anime series is a dark medieval fantasy. It follows the last surviving member of the disgraced Belmont clan, Trevor Belmont, trying to save Eastern Europe from extinction at the hands of Vlad Dracula Tepes."},
    { name: "Tokyo Revengers", rating: "8.1/10",descrption:"Takemichi Hanagaki learns that his former high school girlfriend, Hinaata, has died; an event takes him back twelve years, and here he does everything to prevent the young woman from being murdered." },
    { name: "Naruto: Shippuden", rating: "8.7/10",descrption:"Naruto, an adolescent ninja, dreams of becoming the Hokage in his village." }
  ],
  Fantacy: [
    { name: "Ben 10", rating: "7.4/10" ,descrption:"Ten-year-old Ben Tennyson discovers a mysterious device, the Omnitrix, on a family vacation. The device allows him to transform into ten different alien forms replete with unique superpowers."},
    { name: "Yasuke", rating: "6.2/10",descrption:"In feudal Japan, a samurai warrior of African descent must return to his life of sword and violence in order to protect a mysterious girl from dark forces." },
    { name: "Bleach", rating: "8.2/10",descrption:"Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace." }
  ],
  Romance: [
    { name: "From Me to You", rating: "7.8/10",descrption:"A misunderstood girl's life changes when she is befriended by the nicest boy in school."},
    { name: "I Want to Eat Your Pancreas ", rating: "8/10",descrption:"An aloof boy comes across a book in a hospital waiting room. He soon discovers that it is a diary kept by his very popular classmate who reveals to him that she is secretly suffering from a fatal pancreatic illness." },
    { name: " 5 Centimeters per Second ", rating: "7.5/10",descrption:"Takaki and Akari are in elementary school and over time become best friends. Their friendship is put to the test when Akari has to move to another city." }
  ]
};
var styling = {
  backgroundColor: "white",
  // color: "",
  border: "solid black 2px",
  width: "17%",
  marginLeft: "auto",
  marginRight: "auto",
  padding:"1rem",
  borderRadius:"1rem"
  // fontSize:"3rem"
};

export default function App() {
  var [selectedgenre, setGenre] = useState("Action");

  function catchaclick(genre) {
    setGenre(genre);
  }
  return (
    <body>
    <div className="App">
      <div style={{ backgroundColor: "red", padding: "3px" }}>
        <h1 style={styling}> 🌎 Anime </h1>
        <h2>Welcome to my Anime World.</h2>
        {Object.keys(moviesDB).map((genre) => {
          return (
            <button
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop:"0.5rem",
                paddingBottom:"0.5rem",
                margin: "0.5rem",
                borderRadius: "0.5rem"
              }}
              onClick={() => catchaclick(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedgenre].map((movie) => {
            return (
              <li
                keys={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "solid black 2px",
                  width: "70%",
                  // margin: "1rem 0rem",
                  borderRadius: "3rem",
                  marginTop: "2rem",
                  marginLeft: "7rem",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div><h2 style={{color:"red"}}>{movie.name}</h2></div>
                <div>{movie.rating}</div>
                <div>{movie.descrption}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </body>
  );
}