import "./App.css"
import Title from "./Title"
import Name from "./Name"
import ProductCard from "./ProductCard"
import MesBox from "./MesBox"



function Description(){
  return <h4>This Is My First React App !</h4>
}

function App() {
  return (
  <>
  <MesBox userName="Aman" textColor="#9e00c2" />
    <Name />
    <Title />
    <Description />
    <ProductCard />
    <button> <a href="https://github.com/amankumarsubudhi" target="_blank">Follow Me</a></button>
  </>
  )
}

export default App;
