function DisplayUserName(props){

    let usercolor = props.color ; 
    let style = {color:usercolor};
    return (
        <div style={style}>
            <h1>{props.user}</h1>
        </div>
    )
}

export default DisplayUserName;