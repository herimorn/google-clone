import React,{useState} from 'react'

import "./Search.css";
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";


function Search({hiddenButtons=false}) {
  const[{},dispatch]=useStateValue();
  const[input,setInput]=useState("");
  const history=useHistory();
  const search=(e)=>{
    e.preventDefault();
   history.push('/search');
   dispatch({
     type:actionTypes.SET_SEARCH_TERM,
     term:input,
   })
  }
  return (
    <form className='search'>
        <div className="search_input">
            <SearchIcon className="search_inputIcon"/>
            <input  placeholder="search what you want" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <MicIcon/>

        </div>
           {!hiddenButtons?
           (
            <div className="search_buttons">
            <Button onClick={search} type="submit" variant="outlined">google search</Button>
            <Button variant="outlined">this is amaizing</Button>
           </div>
           ):(
            <div className="search_buttons">
            <Button onClick={search} className="search_buttonsHidden"type="submit" variant="outlined">google search</Button>
            <Button variant="outlined" className="search_buttonsHidden">this is amaizing</Button>
           </div>
           )
           }
      
      
    </form>
  )
}

export default Search
