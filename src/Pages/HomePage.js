
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
const API = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

function HomePage() {

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
        <div className='homePage'>
            <div className="home-h1">
                <h1>The Bootstrap Bar</h1>
            </div>
            <div className="search-box">
                <form id='search-box'>
                    <input type="text" placeholder="Search Cocktails" name="search" autoComplete='off' />
                </form>
            </div>
            <div className="Search-button">
                <h3>Search for Cocktail by:</h3>
                <button id="search_button" type="button" class="btn btn-white">Name <AiOutlineSearch /></button>
                <button id="search_button" type="button" class="btn btn-white">First Letter <AiOutlineSearch /></button>
                <button id="search_button" type="button" class="btn btn-white">Ingridients <AiOutlineSearch /></button>

                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum
                </h4>
            </div>
            <Card />
            <div className='About'>
                <div className='about_text'>
                    <h2>About Us</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum
                    </h4>
                </div>
                <div className='about_img'>
                    <img src='https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                </div>
            </div>
            <div className='cock-info'>
                <h2>Sample Cocktails</h2>

                <img id='s1' src='https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=""/>
                <img id='s1' src='https://images.pexels.com/photos/724259/pexels-photo-724259.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                <img id='s1' src='https://images.pexels.com/photos/890475/pexels-photo-890475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                <img id='s1' src='https://images.pexels.com/photos/1126975/pexels-photo-1126975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                <img id='s1' src='https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
            </div>
            <div className='Cocktails'>
                <div className='cocktails_img'>
                    <img src="https://images.pexels.com/photos/4667081/pexels-photo-4667081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className='cocktails_text'>
                    <h2>Our History</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum
                        <button id="learn_more" type="button" class="btn btn-white">Learn More</button>

                    </h4>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage;