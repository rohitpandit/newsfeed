import axios from "axios";
import { useEffect, useState,  Fragment } from "react";
import CardElem  from '../components/Card.js'
import Loader from "../components/Loader.js";
import Error from '../components/Error.js'
import Navbar from "../components/Navbar.js";

const Home = ({favourites, setFavourites})=>{

    let [posts, setPosts] = useState([]);
    let [error, setError] = useState(null);
    let [currentState, setCurrentState] = useState('loading');

    const toggleFavourites = (post) =>{
        let temp = {title: post.title, author: post.author, id:post.url, description: post.description}
        let index = favourites.findIndex(item => item.id === post.url);
        console.log('index: ', index)
        if(index === -1){
            console.log('coming insdie')
            setFavourites(favourites=> [...favourites, temp])
        }else{
            setFavourites(favourites => favourites.filter(item => item.id !== post.id))
        }
        console.log(favourites)
    }

   

    useEffect(  ()=>{
        let getPosts = async  ()=>{
            return axios.get('https://newsapi.org/v2/everything?q=new&apiKey=f37622f897c24d7cb36ba78dea863fd7');
        };
        
        getPosts()
        .then(item => {
            console.log('item: ', item);
            setPosts(item.data.articles);
            setCurrentState('success')
        })
        .catch(error => {
            console.log(error)
            setError(error);
            setCurrentState('error')
        })

    },[])


    return <>
        <Navbar />
        <div className="mx-5">
            {currentState === 'loading' && <Loader />}
            {currentState === 'error' && <Error error={error} />}

            {currentState === 'success' && posts.map(item => <Fragment key = {item.id}>
                <CardElem data = {item} toggleFavourites={toggleFavourites} favourites={favourites} />
            </Fragment>)}

        </div>
        
    </>
}


export default Home;