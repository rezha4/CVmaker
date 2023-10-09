import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Title, Greetings } from '../src/components/general.jsx'
import { Education } from './components/education.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Greetings /> */}
    <Title />
    <Education />
  </React.StrictMode>,
)
