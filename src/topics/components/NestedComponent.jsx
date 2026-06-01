import BasicComponent from "./BasicComponent";
import NameProp from "./NameProp";

function NestedComponent({count}) {

    // const {count} = props

// const abs = props.count
     // destructuiring on fly 

    return(
        <>
         <h2>`this will contain various components thats why this is nested components {count}</h2>

        <h4>Below would be Basic Component :-</h4>
        <BasicComponent/>

        <h2>----- below is props component (functional componet) -----------</h2>
        <NameProp  name="XYZ" age ={23} />
        <h3>------------------------------</h3>

        </>
       

    )
}

export default NestedComponent;