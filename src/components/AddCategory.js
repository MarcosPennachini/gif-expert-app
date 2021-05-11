import React, {useState} from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( [...categories, inputValue] );
            setInputValue('');
        }
        
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Agrega una categoría"
                value={inputValue}
                onChange={ handleChange }
            >
            </input>
        </form>
     );
}
 
export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
