// Libraries 
import { Outlet } from 'react-router-dom'
//Styles
import "./HumanResourceStyle.scss"

const HumanResourcePage = () => {
  return (
    <div className='human-resource'>
      <Outlet/>
    </div>
  )
}

export default HumanResourcePage