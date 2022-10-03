import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navigation = () => {
    const navigate = useNavigate()
    const handleNavigation = (navigationPath) => {
       navigate(`${navigationPath}`)
    }
    const  navContent = [ 
    {
       name: "Table",
       path: "/table"
    },
    {
        name:"Radio Buttons",
        path: "/radioButtons"
    },
    {
        name: "Checkbox",
        path: "/checkbox"
    },
    {
        name: "Input Box",
        path: "/inputBox"
    },
    {
        name: "Cards",
        path: "/cards"
    }

]

    return (
        <div>
            <ul>
          {navContent.map((item, idx) => {
            return (
            <li onClick = { () => handleNavigation(item.path)  }> {item.name}</li>    
            )        
          }
            )}
            </ul>
        
        </div>
    )
}

export default Navigation;