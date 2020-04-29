import React from 'react';
import { Link, Redirect } from "react-router-dom";
import SearchForm from '../components/searchForm/searchForm'
import CardWrapper from '../components/cardwrapper/cardwrapper'

const SearchPage = () => {
    return(
        <div>Search Page
        <SearchForm/>
        <CardWrapper/>
        <Link to="/saved" role="button" >Go to Saved Page</Link>
        </div>
    )
}

export default SearchPage;