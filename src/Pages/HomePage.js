import 'react-router-dom';
import NavigationBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function HomePage() {

    return (
        <div className='homePage'>
            <NavigationBar />
            <div className="Upper-home">
                <div className="home-h1">
                    <h1>The Bootstrap Bar</h1>
                </div>
                <div className="Upper-home-text">
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
            </div>
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
                        
                    </h4>
                    <button id="learn_more" type="button" class="btn btn-white">Learn More</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage;