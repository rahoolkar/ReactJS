import "./product.css";

function Product(props){  //props is a js object that contains all the data that we pass during calling the component in the form of key and value.

    console.log(props); //we can see the properties in the props method

    let items = props.array.map((Element)=>{ return <li>{Element}</li>});//rendering the array  

    let discount = props.price>30000 ? "discount of 5%" : null ;

    let stylefordiv = {backgroundColor : "yellow",color : "green"}; //adding the color to the component (standard way of adding style)
    
    let stylefordiscount = { backgroundColor : props.price>30000 ? "orange" : ""}; //adding the color to the component based on any condtions (dynamic component styling)
    return (
        <div className="Product" style={stylefordiv}>
            <h1>{props.title}</h1>
            <h3>{props.price}</h3>
            <ol>{items}</ol> 
            {props.price>30000 ? <p style={stylefordiscount}>Discount of 5%</p> : null}  
        </div>
    );
}

export default Product;
