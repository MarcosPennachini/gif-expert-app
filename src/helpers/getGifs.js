const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jraPQPbAiTsSqr8046LYkZDRMqTLJkIX&q=${ encodeURI(category) }&limit=12`;

    try {
        const response = await fetch(url);
        const {data} = await response.json();
        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                img: gif.images.downsized_medium.url
            }
        } )
        console.log(gifs);
        return gifs;
    } catch (error) {
        console.log(error);
    }
}

export default getGifs;