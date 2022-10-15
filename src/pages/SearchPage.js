import React from 'react'
import { useStateValue } from '../StateProvider';
import Response from './Response';
import "./SearchPage.css";
import useGoogleSearch from './useGoogleSearch';
import {Link} from "react-router-dom";
import Search from "../components/Search"
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import RoomIcon from '@mui/icons-material/Room'
import MoreVertIcon from '@mui/icons-material/MoreVert'
function SearchPage() {
  const[{term},dispatch]=useStateValue();
 const{data}=useGoogleSearch(term); 
 //const data=Response;
 //console.log(data.searchInformation.formattedTotalResults);

  return (
    <div className="searchPage">
        <div className='searchPage__header'>
        <Link to="./">
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" className="SearchPage__logo"/>
          </Link>
            <div className="searchPage__headerBody">
            <Search hiddenButtons/>
            <div className="searchPage__options">
              <div className="searchPage_optionsLeft">
                <div className="searchPage__option">
                <SearchIcon/>
                <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                <DescriptionIcon/>
                <Link to="/news">News</Link>
                </div>
                <div className="searchPage__option">
                <ImageIcon/>
                <Link to="/images">images</Link>
                </div>
                <div className="searchPage__option">
                <LocalOfferIcon/>
                <Link to="/shopping">shopping</Link>
                </div>
                <div className="searchPage__option">
                <RoomIcon/>
                <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage__option">
                <MoreVertIcon/>
                <Link to="/maps">more</Link>
                </div>
              </div>
              <div className="searchPage_optionsRight">
              <div className="searchPage__option">
              <Link to="/settings">settings</Link>
                </div>
                <div className="searchPage__option">
              <Link to="/tools">tools</Link>
                </div>
              </div>

            </div>
            </div>
        </div>
        {term &&(
              <div className="searchPage__results">
                <p className="searchPage_resultCount">
                  about { data && data.searchInformation.formattedTotalResults} millions results
                  ({data && data.searchInformation.formattedSearchTime} sec) for {term}
                </p>
                {data && data.items.map(item=>(
                  <div className="searchPage__result">
                    <a href={item.link}>
                    {item.displayLink}
                    </a>
                    <br/>
                    <a href={item.link} className="searchPage__resultTitle">
                    {item.title}
                    </a>
                    <p className="searchPage__resultSnippet">
                     {item.snippet}
                    </p>
                  </div>
                ))}
              </div>
        )}
     
    </div>
  )
}

export default SearchPage
