import { Link, useNavigate } from 'react-router-dom'
import data from './Data.js'
const Student = () => {
  let Navi = useNavigate()
  const handleDelete = (key) => {
    delete data[key];
  }
  return (
    <div>
      <div className='heading'>
        <h1>Student Details</h1>
        <button onClick={() => Navi('/addStudent')}>Add New Student</button>
      </div>
      <div className='studentTable'>
        <table className='' border={1} cellPadding={30}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link to={`/edit/${key}`}>Edit</Link></td>
                <td><Link onClick={() => handleDelete(key)}>Delete</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student