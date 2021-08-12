import '../index.css';
import 'react-router-dom';
import NavigationBar from '../Components/NavBar';
import Card from '../Components/Card';
import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
const API = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

function SearchPage() {
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCocktail(data);
            });
    }, []);


    return (
        <div className="Upper-home">
            <NavigationBar />
            <div className="search-box">
                <form id='search-box'>
                    <input type="text" placeholder="Search Cocktails" name="search" autoComplete='off' />
                </form>
            </div>
            <div className="Search-button">
                <h3>Search for Cocktail by:</h3>
                <button id="search_button" type="button" className="btn btn-white">Name <AiOutlineSearch /></button>
                <button id="search_button" type="button" className="btn btn-white">First Letter <AiOutlineSearch /></button>
                {/* <button id="search_button" type="button" class="btn btn-white">Ingridients <AiOutlineSearch /></button> */}
            </div>
            <Card/>
        </div>
    )
}
export default SearchPage;