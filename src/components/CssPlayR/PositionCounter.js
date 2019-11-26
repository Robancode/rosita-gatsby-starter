import React from "react"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

const PositionCounter = ({ min = 0, max = 9, useHomePage }) => {
  // This isn't a hook, it's just array destructuring from the parent
  const [position, setPosition] = useHomePage
  const increment = () => {
    if (position + 1 > max) return
    setPosition(position + 1)
  }
  const decrement = () => {
    if (position - 1 < min) return
    setPosition(position - 1)
  }
  return (
    <div>
      <button onClick={increment}>
        <IoIosArrowDown />
      </button>
      <button onClick={decrement}>
        <IoIosArrowUp />
      </button>
    </div>
  )
}

export default PositionCounter
