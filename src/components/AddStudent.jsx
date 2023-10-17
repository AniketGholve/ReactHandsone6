import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";

const AddStudent = () => {
    let data=useContext(Store).data
    let Navi = useNavigate();
    const formData = {
        name: '',
        age: '',
        course: '',
        batch: ''
    }
    const handleChange = (e) => {
        formData[e.target.name] = e.target.value;
    }
    const submitData = () => {
        data.push(formData)
        Navi("/student")
    }
    return (
        <div className="d-grid">
            <div>
                <label htmlFor="">Name</label>
                <input className="editInput" placeholder="Enter Name" type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input className="editInput"  placeholder="Enter Age"type="text" name="age" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Course</label>
                <input className="editInput" placeholder="Enter Couse" type="text" name="course" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Batch</label>
                <input className="editInput" placeholder="Enter Batch" type="text" name="batch" onChange={handleChange} />
            </div>
            <div>
                <button onClick={() => Navi('/student')}>Back</button>
            </div>
            <div>
                <button onClick={submitData}>Add Data</button>
            </div>
        </div>
    )
}

export default AddStudent