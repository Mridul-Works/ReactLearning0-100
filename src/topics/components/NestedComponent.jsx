import BasicComponent from "./BasicComponent"

function NestedComponent() {
    return(
        <>
         <h2>this will contain various components thats why this is nested components</h2>

        <h4>Below would be Basic Component :-</h4>
        <BasicComponent/>
        </>
       

    )
}

export default NestedComponent;