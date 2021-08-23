import '../index.css';
import 'react-router-dom';
import NavigationBar from '../Components/NavBar';
import Card from '../Components/Card';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function SearchPage() {
    const [cocktail, setCocktail] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        fetch(API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.drinks);
                setCocktail(data.drinks);
            });
    }

    const handleChange = (e) => {
        setsearchTerm(e.target.value);
    };

    return (
        <div className="Upper-home">
            <NavigationBar />
            <div className="search-box">
                <form id='search-box' onSubmit={handleOnSubmit}>
                    <input type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search Cocktails"
                        name="search"
                        autoComplete='off' />
                </form>
            </div>
            <div className="Search-button">
                <button id="search_button" type="button" className="btn btn-white"> <AiOutlineSearch /></button>
                <h3> Search results for <u><b>{searchTerm}</b></u></h3>
            </div>
            {
                cocktail.length > 0 && cocktail.map((info) => <Card key={info.idDrink} {...info} />)
            }
        </div>
    )
}
export default SearchPage;