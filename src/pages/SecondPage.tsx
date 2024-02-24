import { Link } from 'react-router-dom'
import './second.css'

export default function SecondPage() {
  return (
    <div>
      <h1>This Is Literally Us</h1>
      <img src="https://gifdb.com/images/high/kitty-kitten-cuddle-kc0cy70321ou2ayg.gif" alt="" />
      <h1>You Are The Best Person I've Ever Met</h1>
      <h1>Mwah Mwah Mwah Mwah Mwah</h1>
      <Link to={'/'}>
        <button className='bombachka'>Go Back</button>
      </Link>
    </div>
  )
}
