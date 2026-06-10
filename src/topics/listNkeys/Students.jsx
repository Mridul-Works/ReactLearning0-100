function Students(){
    const studentDB = [
        {id :1, name :"John"},
        {id :2, name :"nike"},
        {id :3, name :"Mike"}
    ]
    return(
        <>
        <h4>Students with rollnumber below:-</h4>

        {studentDB.map((student)=>{
            return(
            <li key={student.id}>
                id : {student.id} - Name : {student.name}
                </li>
                
            )
        })}
        </>
    )
}

export default Students;