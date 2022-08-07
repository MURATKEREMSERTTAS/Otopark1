const NormalPark = require("../Models/NormalPark");
const MotorPark = require("../Models/MotorPark");
const ToplamPark = require("../Models/ToplamPark");
const AraçSayısı = require("../Models/AraçSayısı");
const ArabaSayısı = require("../Models/ArabaSayısı");
const KamyonSayısı = require("../Models/KamyonSayısı");
const MotorSayısı = require("../Models/MotorSayısı");
const ArabaCSayısı = require("../Models/ArabaCSayısı"); 
const KamyonCSayısı = require("../Models/KamyonCSayısı"); 
const MotorCSayısı = require("../Models/MotorCSayısı");
const Araçlar = require("../Models/Araçlar");

const param = {NormalPark,
MotorPark,
ToplamPark,
AraçSayısı,
ArabaSayısı,
KamyonSayısı,
MotorSayısı,
ArabaCSayısı,
KamyonCSayısı,
MotorCSayısı,
Araçlar};

module.exports = {
    createState(type,attributes) {
        const ParamType = param[type];
        return new ParamType(attributes);
    }
}