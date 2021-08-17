function Card({ strDrink, strAlcoholic, strImageSource, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13,
    strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
    strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
    strMeasure13, strMeasure14, strMeasure15 }) {
    return (
        <>
            <div className="card-body">
                <h1>{strDrink}({strAlcoholic})</h1>
                <div className="part1">
                    <div className='cocktail_img'>
                        <img src={ strImageSource } alt="" />
                    </div>
                    <div className='cocktail_ingridients'>
                        <h2>Ingridients Needed</h2>
                        <h4>{strIngredient1} <b>{strMeasure1}</b></h4>
                        <h4>{strIngredient2} <b>{strMeasure2}</b></h4>
                        <h4>{strIngredient3} <b>{strMeasure3}</b></h4>
                        <h4>{strIngredient4} <b>{strMeasure4}</b></h4>
                        <h4>{strIngredient5} <b>{strMeasure5}</b></h4>
                        <h4>{strIngredient6} <b>{strMeasure6}</b></h4>
                        <h4>{strIngredient7} <b>{strMeasure7}</b></h4>
                        <h4>{strIngredient8} <b>{strMeasure8}</b></h4>
                        <h4>{strIngredient9} <b>{strMeasure9}</b></h4>
                        <h4>{strIngredient10} <b>{strMeasure10}</b></h4>
                        <h4>{strIngredient11} <b>{strMeasure11}</b></h4>
                        <h4>{strIngredient12} <b>{strMeasure12}</b></h4>
                        <h4>{strIngredient13} <b>{strMeasure13}</b></h4>
                        <h4>{strIngredient14} <b>{strMeasure14}</b></h4>
                        <h4>{strIngredient15} <b>{strMeasure15}</b></h4>

                    </div>
                </div>
                <div className='cocktail_prep'>
                    <h2>Procedure</h2>
                    <h4>{strInstructions}</h4>
                </div>

            </div>
        </>
    )
}
export default Card;