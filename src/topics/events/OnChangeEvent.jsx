function OnChangeEvent(){

    const handleChange = (e) =>{
        console.log(e.target.value);
    }
    return (
        <>
        <h4> input below</h4>
        <input onChange={handleChange} />
        </>
    )
}

export default OnChangeEvent;