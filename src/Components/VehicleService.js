import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Display } from '../Utils'
import { Colors, Fonts, styles } from '../Constant'
import Seperator from './Seperator'
import { useDispatch, useSelector } from 'react-redux'

const VehicleService = () => {
    const dispatch = useDispatch();
    //Uygulama deposuna veri saklayabilmek için kullanılacak hooks fonsiyonlar
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
    const ArabaReducer = (Value) => {
    dispatch({type:"ARABA_SAYISI",payload: {
        ArabaSayısı:Value}});};
    const KamyonReducer = (Value) => {
    dispatch({type:"KAMYON_SAYISI",payload: {
        KamyonSayısı:Value}});};
    const MotorReducer = (Value) => {
    dispatch({type:"MOTOR_SAYISI",payload: {
        MotorSayısı:Value}});};
    const ArabaClone = (Value) => {
    dispatch({type:"ARABA_CLONE",payload: {
          ArabaCSayısı:Value}});};
    const MotorClone = (Value) => {
    dispatch({type:"MOTOR_CLONE",payload: {
          MotorCSayısı:Value}});};
    const KamyonClone = (Value) => {
    dispatch({type:"KAMYON_CLONE",payload: {
          KamyonCSayısı:Value}});};
    //uygulama deposundan spesifik bir veri çekmek için kullanılır.
    const araçlar = useSelector((state) => state.OtoparkReducer.Araçlar);
    const araçValue =araçlar.Araçlar
    const NormalPark = useSelector((state) => state.OtoparkReducer.NormalPark);
    const normalValue =NormalPark.NormalPark
    const MotorPark = useSelector((state) => state.OtoparkReducer.MotorPark);
    const motorPValue =MotorPark.MotorPark
    const ToplamPark = useSelector((state) => state.OtoparkReducer.ToplamPark);
    const toplamValue =ToplamPark.ToplamPark
    const AraçSayısı = useSelector((state) => state.OtoparkReducer.AraçSayısı);
    const araçSayısı =AraçSayısı.AraçSayısı
    const ArabaSayısı = useSelector((state) => state.OtoparkReducer.ArabaSayısı);
    const arabaSayısı =ArabaSayısı.ArabaSayısı
    const KamyonSayısı = useSelector((state) => state.OtoparkReducer.KamyonSayısı);
    const kamyonSayısı =KamyonSayısı.KamyonSayısı
    const MotorSayısı = useSelector((state) => state.OtoparkReducer.MotorSayısı);
    const motorSayısı =MotorSayısı.MotorSayısı
    const MotorCSayısı = useSelector((state) => state.OtoparkReducer.MotorCSayısı);
    const motorCSayısı =MotorCSayısı.MotorCSayısı
    const ArabaCSayısı = useSelector((state) => state.OtoparkReducer.ArabaCSayısı);
    const arabaCSayısı =ArabaCSayısı.ArabaCSayısı
    const KamyonCSayısı = useSelector((state) => state.OtoparkReducer.KamyonCSayısı);
    const kamyonCSayısı =KamyonCSayısı.KamyonCSayısı
    //Hooks sabitleri (read-only) üzerinde işlem yapılamayacağı için hesaplama işlemlerinde kullanılan geçici değişkenler
    var araba=0;  
    var kamyon=0;
    var Motor=0;
    var veriSeti=araçValue
    var Normalp = normalValue;
    Normalp = Number(Normalp);
    var MotorP = motorPValue;
    MotorP=Number(MotorP);
    var AraçS = araçSayısı;
    AraçS = Number(AraçS);
    var ArabaS = arabaSayısı;
    ArabaS = Number(ArabaS)
    var KamyonS =kamyonSayısı
    KamyonS = Number(KamyonS)
    var MotorS = motorSayısı
    MotorS = Number(MotorS);
    //Diziden spesifik bir eleman silmek için kullanılan fonksiyon
    function arrayRemove(arr, value) { 
    
      return arr.filter(function(ele){ 
          return ele != value; 
      });
  }
  //Liste üzerinde otopark durumuna göre dizi ve saydırma işlemleri
    veriSeti.forEach(element => {
      if(element=="A"){
        if(Normalp>0){
        veriSeti= arrayRemove(veriSeti, "A");
        Normalp=Normalp-1
        ArabaS = ArabaS-1
        araba=araba+1
        console.log("----------",veriSeti)
        element=""
      }}
      else if(element=="K"){
        if(Normalp>3){
        veriSeti= arrayRemove(veriSeti, "K");
          Normalp=Normalp-3
          KamyonS =KamyonS-1
          kamyon=kamyon+1
          console.log("----------",veriSeti)
          element=""
        }}
      else if(element=="M"){
        if(MotorP>0){
        veriSeti= arrayRemove(veriSeti, "M");
          MotorP=MotorP-1
          MotorS = MotorS-1
          Motor=Motor+1
          console.log("----------",veriSeti)
          element=""
        }else if(Normalp>0){
        veriSeti= arrayRemove(veriSeti, "M");
        Normalp=Normalp-1
        MotorS = MotorS-1
        Motor=Motor+1
        console.log("----------",veriSeti)
        element=""
      }};
      //Hookslar ile değişkenler store'a kaydedilir.
      //redux sayesinde değişkenleri uygulamanın her yerinden kullanılabilir olmasını sağlar.
      VehicleList(veriSeti)
      MotorClone(Motor.toLocaleString())
      ArabaClone(araba.toLocaleString())
      KamyonClone(kamyon.toLocaleString())
      NormalValue(Normalp.toLocaleString())
      MotorValue(MotorP.toLocaleString())
      ArabaReducer(ArabaS.toLocaleString())
      KamyonReducer(KamyonS.toLocaleString())
      MotorReducer(MotorS.toLocaleString())
      ToplamPValue(Normalp,MotorP);
  });
  return (
    <ScrollView>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Kullanılabilir Otopark Kapasitesi</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={toplamValue}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)}/>
        <Text style={styles.SubText2}>Boş Motor/Araba/Kamyon Park Yeri</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput placeholder={normalValue}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)}/>
        <Text style={styles.SubText2}>Boş Motor Park Yeri</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={motorPValue}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Otoparktaka Gelen Araç Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={araçSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Otoparktaki Motor Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={motorCSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Otoparktaki Araba Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={arabaCSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Otoparktaki Kamyon Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={kamyonCSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Giremeyen Motorsiklet Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={motorSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Giremeyen Araba Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={arabaSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
        <Text style={styles.SubText2}>Giremeyen Kamyon Sayısı</Text>
        <View style={styles.inputContainer} >
          <View style={styles.inputSubContainer} >
            <TextInput placeholder={kamyonSayısı}
                    placeholderTextColor={Colors.DEFAULT_BLUE}
                    selectionColor={Colors.DEFAULT_BLUE}
                    style={styles.inputText}
                    editable={false}/>
          </View>
        </View>
        <Seperator height={Display.setHeight(2)} />
    </ScrollView>
  )
}

export default VehicleService

