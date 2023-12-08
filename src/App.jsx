import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  // Notice that you have passed the puppyList array from the data.js file as the default value.
  // Important: Always remember to pass your useState
  const [puppies, setPuppies] = useState(puppyList);

  const [featPupId, setfeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  // does the same as console.log(puppyList)
  console.log(puppies);

  return (
    // use {} to escape into/use JavaScript
    <>
      <div className='App'>

        {puppies.map((puppy) => {

          return (<p onClick={() => {
            setfeatPupId(puppy.id)
          }} key={puppy.id}>
            {puppy.name}</p>)
        })}

        {featPupId && (
          <div className='PupDetails'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
