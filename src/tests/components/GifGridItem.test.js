import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import { GifGridItem } from '../../components/GifGridItem'

const id = "id";
const title = "title";
const img = "url";

const wrapper = shallow(<GifGridItem id={id} title={title} img={img} />);

describe('Pruebas en GiftGridItem', () => {

    test('<GiftGridItem /> se debe renderizar correctamente', () => {

        expect(toJson(wrapper)).toMatchSnapshot();
    })

    test('<GifGridItem debe tener un párrafo con el título pasado por props />', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(title)
    })

    test('<GifGridItem debe tener un <img> con src y alt = a img y title pasado por props', () => {
        const image = wrapper.find('img');
        expect(image.prop('src')).toBe(img);
        expect(image.prop('alt')).toBe(title);
       
    })
})