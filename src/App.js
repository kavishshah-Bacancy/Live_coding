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
    if (likeflag) {
      setLike(like - 1);
      setLikeFlag(!likeflag);
    } else {
      setLike(like + 1);
      setLike(!likeflag);
      if (disLikeflag) {
        setDisLike(disLike - 1);
        setDisLikeFlag(!disLikeflag);
      }
    }
  };
  const updateDisLikeHandler = () => {
    if (disLikeflag) {
      setDisLike(like - 1);
      setDisLikeFlag(!disLikeflag);
    } else {
      setDisLike(disLike + 1);
      setDisLike(!disLikeflag);
      if (likeflag) {
        setLike(like - 1);
        setLikeFlag(!likeflag);
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
