import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(100);
  const [disLike, setDisLike] = useState(25);
  const [likeflag, setLikeFlag] = useState(false);
  const [disLikeflag, setDisLikeFlag] = useState(false);

  const likeClass = [];
  likeClass.push("like-button");
  const updateLikeHandler = () => {
    console.log(like);
    if (likeflag) {
      setLike(like - 1);
      console.log(like);
      setLikeFlag(false);
    } else {
      setLike(like + 1);
      setLikeFlag(true);
      if (disLikeflag) {
        setDisLike(disLike - 1);
        setDisLikeFlag(false);
      }
    }
  };
  const updateDisLikeHandler = () => {
    if (disLikeflag) {
      setDisLike(disLike - 1);
      setDisLikeFlag(false);
    } else {
      setDisLike(disLike + 1);
      setDisLikeFlag(true);
      if (likeflag) {
        setLike(like - 1);
        setLikeFlag(false);
      }
    }
  };

  return (
    <div className="App">
      <button
        className={likeflag ? "like-button liked" : "like-button"}
        onClick={updateLikeHandler}
      >
        Like | {like}
      </button>
      <button
        className={disLikeflag ? "dislike-button disliked" : "dislike-button"}
        onClick={updateDisLikeHandler}
      >
        Dislike | {disLike}
      </button>
    </div>
  );
}

export default App;
