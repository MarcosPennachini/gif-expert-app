import React, {useEffect, useState} from 'react';
import { GifGridItem } from './GifGridItem';
import getGifs from '../helpers/getGifs';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        return getGifs(category)
            .then( imgs => setImages(imgs));
    }, [])

    

    return ( 
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            
                {images.map( (img) => {
                    return <GifGridItem 
                        key={img.id}
                        {...img}
                    /> 
                } )}
            </div>
        </>
    );
}
 
export default GifGrid;