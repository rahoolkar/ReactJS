import "./product.css";

function Product(props){  //props is a js object that contains all the data that we pass during calling the component in the form of key and value.
    console.log(props); //we can see the properties in the props method
    return (
        <div className="Product">
            <h1>{props.title}</h1>
            <h3>{"$ "+props.price}</h3>
            <p>{props.array}</p>
            <p>{props.object.c}</p>
        </div>
    );
}

export default Product;
