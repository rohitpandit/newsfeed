const AuthorCard = ({data})=>{
    return <div className="m-4 " >
        <p className="my-1">Author: {data.author}</p>
    </div>
}

export default AuthorCard;