import React, { useState } from "react";
import classes from './Counter.module.scss'

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(x => x + 1)} className={classes.qwe}>incriment</button>
    </div>
  )
}

export default Counter;