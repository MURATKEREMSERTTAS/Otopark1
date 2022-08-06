import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const setHeight = (h) => (height/100)*h;
const setWidth = (w) => (width/100)*w;

export default {setHeight, setWidth};