import MyAppv1 from "../assets/MyAppv1.png";
function postMocks() {
  return [
    {
      username: "NachoCisss Dev",
      account: "@Nachocisss",
      date: "5 de Agosto",
      content: "¡Primera version de My CV App! 🎆💻 #MyApp",
      likes: "4",
      comments: "2",
      image: [MyAppv1],
    },
    {
      username: "World Cup Quiz",
      account: "@John_Doe",
      date: "4 de julio",
      content:
        "¡Viva el futbol! 🏆 Mira el nuevo quiz sobre mundiales de este maravilloso deporte ⚽️ #Futbol #WorldCup Juega y supera a tus amigos en esta divertida trivia ¿Quien sabe más sobre futbol?. 🎯 #Challenge #Game ",
      likes: "4",
      link: "https://github.com/Nachocisss/soccerQuiz",
      comments: "2",
      image: [
        "https://github.com/Nachocisss/soccerQuiz/raw/main/public/homePage.png",
        "https://github.com/Nachocisss/soccerQuiz/raw/main/public/gameScreenv2.png",
        "https://github.com/Nachocisss/soccerQuiz/raw/main/public/highScores.png",
        "https://github.com/Nachocisss/soccerQuiz/raw/main/public/endGame.png",
      ],
    },
  ];
}

export default postMocks;
