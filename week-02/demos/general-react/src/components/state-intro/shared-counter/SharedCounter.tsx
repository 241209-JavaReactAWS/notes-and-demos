
/*
This function needs to receive values from its parent component that contain the stateful variable AND the
function to update it
*/

interface SharedCounterProps{
    counterValue: number,
    setCounterValue : (counterValue: number) => void
}

function SharedCounter(props: SharedCounterProps) {
  return (
    <div>
        <p>Shared value for counter is {props.counterValue}</p>
        <button onClick={() => {props.setCounterValue(props.counterValue + 1)}}>Increment shared counter</button>
      
    </div>
  )
}

export default SharedCounter
