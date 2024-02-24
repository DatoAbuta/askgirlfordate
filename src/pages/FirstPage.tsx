import { useState } from 'react'
import { Link } from 'react-router-dom'
import './first.css'

export default function FirstPage() {

    
  const [top,setTop] = useState(460)
  const [left,setLeft] = useState(990)

  const handleClick = () => {
    setTop(Math.floor(Math.random() * 1000))
    setLeft(Math.floor(Math.random() * 1000))
  }

  return (
    <>
    <div>
      <img src="https://media3.giphy.com/media/DYckNX9XyU9zdynEYm/200w.gif?cid=6c09b952xkiyrh6rbiqghvhxejofw99nh0mh6wo89uyxa6iy&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
      <h1>Will you be my girl for your entire life?</h1>
    </div>

    <div className="n2">

    <Link to={'/secondpage'}>
      <button className='ghilaki'>Yes</button>
    </Link>
      <button className='ghilaki' onClick={handleClick} style={{left:`${left}px`, top:`${top}px`}}>No</button>
    </div>
    </>
  )
}
