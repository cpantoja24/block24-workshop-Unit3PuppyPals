import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  // Notice that you have passed the puppyList array from the data.js file as the default value.
  // Important: Always remember to pass your useState
  const [puppies, setPuppies] = useState(puppyList);

  // does the same as console.log(puppyList)
  console.log(puppies);

  return (
    // use {} to escape into/use JavaScript
    <>
      <div className='App'>
        {puppies.map((puppy) => {
          return <p key={puppy.id}>
            {puppy.name}</p>
        })};
      </div>
    </>
  )
}

export default App
