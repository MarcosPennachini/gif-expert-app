import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {data:img, loading} = useFetchGifs(category);

    return ( 
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                { loading && <p className="animate__animated animate__flash">Loading...</p> }
            
                {img.map( (img) => {
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