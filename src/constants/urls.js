const baseURL = 'https://api.themoviedb.org/3';


const movies = '/discover/movie';
const genre = '/genre/movie/list';

const urls = {
    movies:{
        base:movies,
        byId:(id)=>`${movies}/${id}`
},
genre:{
    base: genre,
    byId:(id)=>`${genre}/${id}`
}
}



export {
    baseURL,
    urls
}