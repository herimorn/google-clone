import React from 'react'
import "./home.css";
import {Link, link} from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../components/Search';
function Home() {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="home_headerLeft">
          {/*link*/}
          <Link to="about">about</Link>
          <Link to="store">store</Link>
          {/*link*/}

        </div>
        <div className="home_headerRight">
        <Link to="gmail">gmail</Link>
        <Link to="images">images</Link>
          {/*icon*/}
          <AppsIcon/>
          <Avatar/>
          {/*avatar*/}

        </div>

      </div>
      <div className='home_body'>
           <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"/>
            <div className="home_inputContainer">
             <Search hiddenButtons/>
            </div>
      </div>
    
    </div>
  )
}

export default Home
