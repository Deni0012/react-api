import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ActressList from './components/ActressList'

function App() {
  const [actress, setActresses] = useState([])

  const [url, setUrl] = useState("https://www.freetestapi.com/api/v1/actresses")

  function getActress() {
    const response = axios.get(url).then((res) => setActresses(res.data))
      .catch((err => console.log(err)))
  }

  useEffect(() => getActress(), []);


  return (
    <>
      <div className="lists-container">
        {actress.map(actress => (
          <ActressList key={actress.id} actress={actress} />
        ))}
      </div>

    </>
  )
}

export default App;
