import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Seperator, VehicleService } from '../Components'
import { Display } from '../Utils'
import { Colors, styles} from '../Constant'

const Reporting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={Display.setHeight(6)}  />
      <View style={styles.headerContainer} >
        <Text style={styles.headerText} >Otapark Yönetim Sistemi</Text>
        <Seperator height={Display.setHeight(6)}  />
      </View>
    <VehicleService/>
    </View>
  )
}

export default Reporting
