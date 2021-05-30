import React from 'react'
import AddCategory from '../../components/AddCategory';
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json';

describe('Pruebas sobre componente <AddCategory />', () => {
    test('Componente <AddCategory se renderiza correctamente />', () => {
        const wrapper = shallow(<AddCategory category="categoria" setCategories={()=>{}} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})