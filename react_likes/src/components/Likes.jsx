import { useState } from "react";

const Likes = () => {
  //
  let [totalLikes, setTotalLikes] = useState(0)

  const clickUp = (event) => {
    let clickResult = totalLikes;
    if (event.target.className === "increment") {
      clickResult += 1;
      console.log(clickResult)
    } else if (event.target.className === "decrement") {
      clickResult -= 1;
    }
    if (clickResult >=0) {
      setTotalLikes(clickResult);
    }
  }

  return (
    <div>
      <p>{totalLikes}</p>
      <button className="increment" onClick={clickUp}>+</button>
      <button className="decrement" onClick={clickUp}>-</button>
    </div>
  )
}

export default Likes