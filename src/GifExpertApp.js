import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({title}) => {

    const [categories, setCategories] = useState(['One punch']);

    return ( 
        <>
            <h2>{title}</h2>
            <AddCategory 
                categories={categories}
                setCategories={setCategories}
            />
            <hr />
            <ol>
                { categories.map( (category) => 
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ) }
            </ol>
        </>
     );
}
 
export default GifExpertApp;