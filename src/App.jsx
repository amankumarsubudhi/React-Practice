import "./App.css"
import Title from "./Title"
import Name from "./Name"
import ProductCard from "./ProductCard"
import MesBox from "./MesBox"
import ButtonCard from "./ButtonCard"



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
    <ButtonCard />
  </>
  )
}

export default App;
