function OnSubmitEvent(){
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default OnSubmitEvent;