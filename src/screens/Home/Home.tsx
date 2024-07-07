import React from "react";
import "./Home.css";
import Post from "../../components/Post/Post";
export default function HomeScreen() {
  const postContentLorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor minima reiciendis, repellendus modi sequi sit ullam impedit laborum quod, ab corrupti itaque sapiente cupiditate necessitatibus nulla eos! Illo, blanditiis minus!";

  const postsData = [
    {
      username: "John Doe",
      account: "@John_Doe",
      date: "4 de julio",
      content: "¡Feliz 4 de julio a todos! 🎆🇺🇸 #IndependenceDay",
      likes: "4",
      comments: "2",
      image: "edwe",
    },
    {
      username: "Jane Smith",
      account: "@Jane_Smith",
      date: "5 de julio",
      content: "Hoy fue un día increíble en la playa. 🌊☀️ #SummerVibes",
      likes: "15",
      comments: "3",
      image: "sdf",
    },
    {
      username: "Carlos Ruiz",
      account: "@Carlos_R",
      date: "6 de julio",
      content:
        "Disfrutando de una buena taza de café en la mañana. ☕️ #CoffeeLover",
      likes: "23",
      comments: "5",
    },
    {
      username: "Laura Gomez",
      account: "@LauraGomez",
      date: "7 de julio",
      content:
        "Increíble concierto anoche, la banda estuvo genial! 🎸🎤 #LiveMusic",
      likes: "34",
      comments: "7",
      image: "d",
    },
    {
      username: "Pedro Martinez",
      account: "@Pedro_M",
      date: "8 de julio",
      content: "Explorando nuevos destinos. 🗺️✈️ #TravelDiaries",
      likes: "42",
      comments: "8",
    },
  ];
  return (
    <div className="homeContainer">
      {postsData.map((p, index) => {
        return <Post key={`post${index}`} {...p} />;
      })}
    </div>
  );
}
