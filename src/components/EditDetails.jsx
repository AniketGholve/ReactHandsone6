import { useContext } from "react"
import { Store } from "../App"
import { useNavigate, useParams } from "react-router-dom";

const EditDetails = () => {
    let data = useContext(Store).data;
    let id = useParams().id;
    let Navi = useNavigate();
    let currentData = data[id];
    const formData = {
        name: currentData.name,
        age: currentData.age,
        course: currentData.course,
        batch: currentData.batch
    }
    const handleChange = (e) => {
        formData[e.target.name] = e.target.value

    }
    const submitData = () => {
        console.log(formData)
        data[id] = formData
        Navi('/student');
    }
    return (
        <div className="d-grid">
            <div>
                <label htmlFor="">Name</label>
                <input className="editInput" type="text" name="name" defaultValue={currentData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input className="editInput" type="text" name="age" defaultValue={currentData.age} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Course</label>
                <input className="editInput" type="text" name="course" defaultValue={currentData.course} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Batch</label>
                <input className="editInput" type="text" name="batch" defaultValue={currentData.batch} onChange={handleChange} />
            </div>
            <div>
                <button onClick={() => Navi('/student')}>Back</button>
            </div>
            <div>
                <button onClick={submitData}>Update</button>
            </div>
        </div>

    )
}

export default EditDetails