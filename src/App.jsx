import "./App.css"
import Title from "./Title"
import Name from "./Name"



function Description(){
  return <h4>This Is My First React App !</h4>
}

function App() {
  return (
  <>
    <Name/>
    <Title />
    <Description />
    <button> <a href="https://github.com/amankumarsubudhi" target="_blank">Follow Me</a></button>
  </>
  )
}

export default App
