import { useState } from "react";

function App1() {

  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App" style={{padding: 20}}>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

// other example 22222222222222

const gifts = [
  'gift 1',
  'gift 2',
  'gift 3'
]

function App2() {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index]);
  }

  return (
    <div style={{padding: 20}}>
        <h1>{gift || 'no gift'}</h1>
        <button onClick={randomGift}>Take gift</button>
    </div>
  )
}

// example 3333333333333333333333333

function App3() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  return (
    <div style={{padding: 30}}>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
        />

        <input 
          value={mail}
          onChange={e => setMail(e.target.value)}
        />

        <button onClick={() => setName('meo')}>change</button>
    </div>

  )
}

// example RADIO 444444444444444444444444

const courses = [
  {id: 1, name: 'course 1'},
  {id: 2, name: 'course 2'},
  {id: 3, name: 'course 3'}
]

function App4() {
  const [checked, setChecked] = useState(1)

  const handleSubmit =() => {
    // call API
    console.log({id: checked});
  }

  return (
    <div style={{padding: 30}}>
      {courses.map(course => (
        <div> key={course.id}
            <input 
              type="radio"
              checked = {checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}></button>
    </div>
  )
}

function App() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', isChecked: false },
    { id: 2, label: 'Checkbox 2', isChecked: false },
    { id: 3, label: 'Checkbox 3', isChecked: false },
  ]);

  const handleCheckboxChange = (checkboxId) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === checkboxId
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id}>
          <input
            type="checkbox"
            checked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <label>{checkbox.label}</label>
        </div>
      ))}
    </div>
  );
}

// export default CheckboxGroup;

export default App;
