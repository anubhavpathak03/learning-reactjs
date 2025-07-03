/* eslint-disable no-unused-vars */
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        // as object 
        href: "https://www.google.com",
        target: '_blank'
    },
    children: 'click me to visit'
}


// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}


const AnotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)


// this is how react element our own code
const areactElement = React.createElement(
    'a',
    {href: "https://www.google.com", target: "_blank"},
    'click to visit google'
)



createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    areactElement
)
