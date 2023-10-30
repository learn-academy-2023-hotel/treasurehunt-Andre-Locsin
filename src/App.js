import React, { useState } from "react"

import Square from "./components/Square"

import "./App.css"

const arrayQ = ([
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
])
const App = () => {
  const [board, setBoard] = useState(arrayQ)
 

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length))
  const [gameOver, setGameOver] = useState(false)
  const [counter, setCounter] = useState(5)

  const handleSquareClick = (clickedSquareIndex) => {
    // create a variable holding copy of current state
    let updatedBoard = [...board]
    // set condition for if treasure location is same as clicked square's index show a treasure
    if (clickedSquareIndex === treasureLocation) {
      //  then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎"
      setGameOver(true)
      alert('You won!')
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣"
      setGameOver(resetGame)
      // setBoard(updatedBoard)
    } else {
      //  use index from clickedSquareIndex to update the clicked square's value with emoji using bracket notion
      updatedBoard[clickedSquareIndex] = "🌲"
      setCounter(counter -1)
      if(counter <= 0){
        setGameOver(true)
        alert('Loser')
      // update state with the new board
    } 
  }
    setBoard(updatedBoard)
  }
  const resetGame = () => {
    setBoard(arrayQ)
    setTreasureLocation((
      Math.floor(Math.random() * board.length)))
    setBombLocation((
      Math.floor(Math.random() * board.length)))
    setCounter(5)
    setGameOver(false)
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {/* Map over array and return a square for each element */}
        {board.map((value, index) => {
          console.log(value, index)
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          )
        })}
      </div>
      <p>{counter}</p>
          <button onClick={resetGame}>Play Again</button>
   </>
      )}
export default App