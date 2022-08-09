import { StatusBar,Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Seperator} from '../Components'
import { Colors, styles } from '../Constant'
import {Display} from '../Utils'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

const Home = ({navigation}) => {
const dispatch = useDispatch();
const NormalValue = (value) => {
  dispatch({type:"NORMAL_PARKING",payload: {
    NormalPark:value}}) }
const MotorValue = (value) => {
  dispatch({type:"MOTOR_PARKING",payload: {
    MotorPark:value}}) }
const ToplamPValue = (value,value2) => {
  dispatch({type:"PARK_KAPASİTE",payload: {
    NormalPark:value,MotorPark:value2}}) }
const VehicleList = (value) => {
  dispatch({type:"ARAC_LISTESI",payload: {
    Araçlar:value}})}
const AraçReducer = (Value) => {
  dispatch({type:"ARAC_SAYISI",payload: {
    AraçSayısı:Value}});};
const ArabaReducer = (Value) => {
  dispatch({type:"ARABA_SAYISI",payload: {
    ArabaSayısı:Value}});};
const KamyonReducer = (Value) => {
  dispatch({type:"KAMYON_SAYISI",payload: {
    KamyonSayısı:Value}});};
const MotorReducer = (Value) => {
  dispatch({type:"MOTOR_SAYISI",payload: {
    MotorSayısı:Value}});};
var araba=0;
var kamyon=0;
var Motor=0;
var Toplam=0;
const araçlar = useSelector((state) => state.OtoparkReducer.Araçlar);
const araçValue =araçlar.Araçlar
const NormalPark = useSelector((state) => state.OtoparkReducer.NormalPark);
const normalValue =NormalPark.NormalPark
const MotorPark = useSelector((state) => state.OtoparkReducer.MotorPark);
const motorPValue =MotorPark.MotorPark
const MotorCSayısı = useSelector((state) => state.OtoparkReducer.MotorCSayısı);
const motorCSayısı =MotorCSayısı.MotorCSayısı
const [loading,setLoading] = useState(false);
const Test=()=>{
  function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
    var list = araçValue || ["b","o","o","t","s","t","r","a","p"] 
  //AraçSayıları
    list.forEach(element => {
      if(element=="A")araba=araba+1;
      else if(element=="K")kamyon=kamyon+1;
      else if(element=="M")Motor= Motor+1;
      else if (element!="A" || element!="K" || element!="M")list=arrayRemove(list,element);
      Toplam=kamyon+araba+Motor;
      VehicleList(list)
      AraçReducer(Toplam.toLocaleString())
      ArabaReducer(araba.toLocaleString())
      KamyonReducer(kamyon.toLocaleString())
      MotorReducer(Motor.toLocaleString())
      ToplamPValue(normalValue,motorPValue)
      setLoading(true)
  });
  
};  



  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
      <Seperator height={Display.setHeight(6)}  />
      <View style={styles.headerContainer} >
        <Text style={styles.headerText} >Otapark Yönetim Sistemi</Text>
        <Seperator height={Display.setHeight(6)}  />
      </View>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder="Normal Park Kapasitesini Giriniz"
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    keyboardType="number-pad"
                    onChangeText={(text)=>NormalValue(text)}
                    editable={motorCSayısı==""? true : false}
                    />
          </View>
        </View>
        <Seperator height={StatusBar.currentHeight} />
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder='Motorsiklet Park Kapasitesini Giriniz'
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    keyboardType="number-pad"
                    onChangeText={(text)=>MotorValue(text)}
                    editable={motorCSayısı==""? true : false}/>
          </View>
        </View>
        <Seperator height={StatusBar.currentHeight} />
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder='AKMAKMAKMAKM'
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    onChangeText={(text)=>VehicleList(text.split(""))}
                    editable={motorCSayısı==""? true : false}
                    />
          </View>
        </View>
          <Seperator height={Display.setHeight(2.3)} />
          {motorCSayısı=="" ? (
            <>
          <TouchableOpacity style={styles.signInButton} onPress={() => {Test(),navigation.navigate("Reporting")}} >
          <Text style={styles.SignInButtonText} >Senaryo Testi</Text>
          </TouchableOpacity>
          <Seperator height={Display.setHeight(1)} />
          <Text style={styles.SubText} >Otopark Boş</Text>
          <Seperator height={Display.setHeight(1)} />
          <Text style={styles.SubText}>Minimum otopark kapasitesi 5 olmalıdır.</Text>
          <View style={styles.animationContainer} >
          <LottieView source={require("../Assets/animations/57463-parking-concept.json")}  renderMode="AUTOMATIC" autoPlay loop/>
          </View> 
          </>
          ):(
            <>
             <TouchableOpacity style={styles.signInButton} onPress={() => {navigation.navigate("Reporting")}}>
             <Text style={styles.SignInButtonText} >Rapor Sayfası</Text>
             </TouchableOpacity>
             <Seperator height={Display.setHeight(1)} />
             <Text style={styles.SubText3}>! UYARI !</Text>
             <Seperator height={Display.setHeight(1)} />
             <Text style={styles.SubText}>Veri seti yanlızca bir kez girilebilir.</Text>
             <View style={styles.animationContainer} >
            <LottieView source={require("../Assets/animations/72269-stop-sign.json")}  renderMode="AUTOMATIC" autoPlay loop/>
            </View> 
            </>
          )}
          <Seperator height={Display.setHeight(1)} />
    </View>
  )
}
export default Home;


