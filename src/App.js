import { useState } from 'react'

function App() {

  const courses = [
    {
      id: 1,
      name: 'Javascript',
      price: 1000
    },
    {
      id: 2,
      name: 'PHP',
      price: 2000
    },
    {
      id: 3,
      name: 'Python',
      price: 3000
    },
    {
      id: 4,
      name: 'HTML',
      price: 3000
    },
    {
      id: 5,
      name: 'C++',
      price: 3000
    },
  ]

  const [checked, setChecked] = useState([])

  console.log(checked);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => {
          return item !== id
        })
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    // console.log(courses[checked - 1].name);
  }

  return (
    <div className="App" style={{ padding: '32px' }}>
      {
        courses.map((course) =>
          <div key={course.id}>
            <input
              type="checkbox"
              id={course.id}
              onChange={() => handleCheck(course.id)}
              checked={checked.includes(course.id)}
            />
            <label htmlFor={course.id}>{course.name}</label>
          </div>
        )
      }
      <br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
