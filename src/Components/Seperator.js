import { View, Text } from 'react-native'
import React from 'react'

const Seperator = ({height,width, ...extraprobs}) =>(
     <View style={{height:height,width:width, ...extraprobs}} />  
);

Seperator.defaultProps = {
    height:0,
    width:0,
}

export default Seperator