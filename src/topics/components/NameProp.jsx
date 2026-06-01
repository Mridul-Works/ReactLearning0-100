function NameProp(props){
    return(
        <>
        <h2>Basically here we will render name when we call this funtion or component</h2>

        <h3>My Name is {props.name}</h3>
        <h2>Age is {props.age}</h2>

        </>
    )
}

export default NameProp;