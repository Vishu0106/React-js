import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const anotherElement = "Vishnu"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google ,',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
)
