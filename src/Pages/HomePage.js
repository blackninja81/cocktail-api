import Card from '../Components/Card';

function HomePage() {
    return (
        <div className='homePage'>
            <div className="Search-button">
                <button id="search_button" type="button" class="btn btn-success">Search For Cocktail</button>
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
                <div className='about_img' />
            </div>

            <div className='Cocktails'>
                <div className='cocktails_img' />
                <div className='cocktails_text'>
                    <h2>Our Cocktails</h2>
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
        </div>
    )
}
export default HomePage;