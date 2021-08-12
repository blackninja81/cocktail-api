
function Card() {
    return (
        <div className="card-body">
            <h1>Cocktail Name</h1>
            <div className="part1">
                <div className='cocktail_img'>
                    <img src="https://images.pexels.com/photos/4667081/pexels-photo-4667081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className='cocktail_ingridients'>
                    <h2>Ingridients Needed</h2>
                    <h4>Lemon</h4>
                    <h4>Lemon</h4>
                </div>
            </div>
            <div className='cocktail_prep'>
                <h2>Procedure</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum</h4>
            </div>

        </div>
    )
}
export default Card;