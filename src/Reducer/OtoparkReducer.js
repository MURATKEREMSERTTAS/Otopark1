let initialState = {
    NormalPark : "",
    MotorPark : "",
    ToplamPark : "",
    AraçSayısı : "",
    ArabaSayısı : "",
    KamyonSayısı : "",
    MotorSayısı : "",
    ArabaCSayısı : "",
    KamyonCSayısı : "",
    MotorCSayısı : "",
    Araçlar : "",
}

const OtoparkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NORMAL_PARKING":{
            let newState = {...state};
            newState.NormalPark = {
                NormalPark : (action.payload.NormalPark).toString(),
                };console.log(newState.NormalPark)
            return newState;   
        }
        case "MOTOR_PARKING":{
            let newState = {...state};
            newState.MotorPark= {
                MotorPark :( action.payload.MotorPark).toString(),
                };console.log(newState.MotorPark)
            return newState;   
        }
        case "ARABA_CLONE":{
            let newState = {...state};
            newState.ArabaCSayısı = {
                ArabaCSayısı : action.payload.ArabaCSayısı,
                };console.log(newState.ArabaCSayısı)
            return newState;   
        }
        case "KAMYON_CLONE":{
            let newState = {...state};
            newState.KamyonCSayısı= {
                KamyonCSayısı : action.payload.KamyonCSayısı,
                };console.log(newState.KamyonCSayısı)
            return newState;   
        }
        case "MOTOR_CLONE":{
            let newState = {...state};
            newState.MotorCSayısı= {
                MotorCSayısı : action.payload.MotorCSayısı,
                };console.log(newState.MotorCSayısı)
            return newState;   
        }
        case "PARK_KAPASİTE":{
            let newState = {...state};
            newState.ToplamPark= {
                ToplamPark : ((Number(action.payload.MotorPark)+Number(action.payload.NormalPark)).toString()),
                };console.log(newState.ToplamPark)
            return newState;   
        }
        case "ARAC_LISTESI":{
            let newState = {...state};
            newState.Araçlar= {
                Araçlar : action.payload.Araçlar,
                };console.log(newState.Araçlar)
            
            return newState;   
        }
        case "ARABA_SAYISI":{
            let newState = {...state};
            newState.ArabaSayısı= {
                ArabaSayısı : (action.payload.ArabaSayısı),
                };console.log(newState.ArabaSayısı)
            
            return newState;   
        }
        case "KAMYON_SAYISI":{
            let newState = {...state};
            newState.KamyonSayısı= {
                KamyonSayısı : (action.payload.KamyonSayısı),
                };console.log(newState.KamyonSayısı)
            
            return newState;   
        }
        case "MOTOR_SAYISI":{
            let newState = {...state};
            newState.MotorSayısı= {
                MotorSayısı :( action.payload.MotorSayısı),
                };console.log(newState.MotorSayısı)
            
            return newState;   
        }
        case "ARAC_SAYISI":{
            let newState = {...state};
            newState.AraçSayısı= {
                AraçSayısı : (action.payload.AraçSayısı),
                };console.log(newState.AraçSayısı)
            
            return newState;   
        }
        default:
            return state;
    }
};

export default OtoparkReducer;