function Card({ strDrink, strAlcoholic, strDrinkThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13,
    strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
    strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
    strMeasure13, strMeasure14, strMeasure15 }) {
    return (
        <>
            <div className="card-body col">
                <h1>{strDrink}({strAlcoholic})</h1>
                <div className="part1 col">
                    <div className='cocktail_img row'>
                        <img src={ strDrinkThumb } alt="" />
                    </div>
                    <div className='cocktail_ingridients row'>
                        <h2>Ingridients Needed</h2>
                        <h4> <b>{strMeasure1}</b> {strIngredient1} </h4>
                        <h4> <b>{strMeasure2}</b> {strIngredient2} </h4>
                        <h4> <b>{strMeasure3}</b> {strIngredient3} </h4>
                        <h4> <b>{strMeasure4}</b> {strIngredient4} </h4>
                        <h4> <b>{strMeasure5}</b> {strIngredient5} </h4>
                        <h4> <b>{strMeasure6}</b> {strIngredient6} </h4>
                        <h4> <b>{strMeasure7}</b> {strIngredient7} </h4>
                        <h4> <b>{strMeasure8}</b> {strIngredient8} </h4>
                        <h4> <b>{strMeasure9}</b> {strIngredient9} </h4>
                        <h4> <b>{strMeasure10}</b> {strIngredient10} </h4>
                        <h4> <b>{strMeasure11}</b> {strIngredient11} </h4>
                        <h4> <b>{strMeasure12}</b> {strIngredient12} </h4>
                        <h4> <b>{strMeasure13}</b> {strIngredient13} </h4>
                        <h4> <b>{strMeasure14}</b> {strIngredient14} </h4>
                        <h4> <b>{strMeasure15}</b> {strIngredient15} </h4>

                    </div>
                </div>
                <div className='cocktail_prep row'>
                    <h2>Procedure</h2>
                    <h4>{strInstructions}</h4>
                </div>

            </div>
        </>
    )
}
export default Card;