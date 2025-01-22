import './App.css'
import Product from "./product.jsx"
import DisplayUserName from './activity.jsx';

function ProductBox(){
  let array = ["amazon","flipkart","myntra"];
  let object = {a:"amazon",b:"blinkit",c:"chanel"};
  return (
    <div>
    <Product title="laptop" price={30000} array={array} object={object}></Product>
    <Product title="mobile" price={40000} array={array} object={object}></Product>
    <Product title="headphones" price={50000} array={array} object={object}></Product>
    </div>
  )
}
function App() {
  return(
    <>
      <DisplayUserName user="rahul" color="red"></DisplayUserName>
      <DisplayUserName user="udayan" color="blue"></DisplayUserName>
      <ProductBox></ProductBox>
    </>
  )
}

export default App;
