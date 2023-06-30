
const CardElem =({data, toggleFavourites, favourites}) =>{

    console.log('data: ', data.url.split('/').at(-1))
    return (
        <div className="shadow-sm p-3 mt-5">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <button className=" btn btn-primary" onClick={()=>{toggleFavourites(data)}}>
                {favourites.findIndex(item => item.id === data.url) === -1 ? `Add to Favourites` : `remove Favourite`}
            </button>
        </div>
    )
}


export default CardElem;
