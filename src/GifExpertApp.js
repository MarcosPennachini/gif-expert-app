import React, {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = ({title}) => {

    const [categories, setCategories] = useState(['One Punch', 'Evangelion', 'Full Metal Alchemist']);

    return ( 
        <>
            <h2>{title}</h2>
            <AddCategory 
                categories={categories}
                setCategories={setCategories}
            />
            <hr />
            <ol>
                { categories.map( (category) => {
                    return <li key={category}>{category}</li>
                } ) }
            </ol>
        </>
     );
}
 
export default GifExpertApp;