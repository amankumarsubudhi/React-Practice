import "./App.css"
import Title from "./Title"



function Description(){
  return <h3>My First React App !</h3>
}

function App() {
  return (
  <div>
    <Title />
    <Description />
    <button>Follow Me</button>
  </div>
  )
}

export default App
