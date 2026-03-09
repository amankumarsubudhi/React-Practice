import "./App.css"
import Title from "./Title"



function Description(){
  return <h3>My First React App !</h3>
}

function App() {
  return (
  <>
    <Title />
    <Description />
    <button>Follow Me</button>
  </>
  )
}

export default App
