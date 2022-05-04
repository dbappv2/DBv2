
var qr = document.getElementById("qr");
var ctx_qr = qr.getContext("2d");

var mid = document.getElementById("qr_mid");
var ctx_qr_mid = mid.getContext("2d");

var verif = document.getElementById("verifier_block");
var ctx_ver_block = verif.getContext("2d");


var pos_x_mid = 0;
var max_pos_x_mid = 143;
var pos_y_mid = 0;

var pos_x = 0;
var max_pos_x = 924;
var pos_y = 0;

let len = 11;

var random;

var count = 0;

const date = new Date();
var name = "Herr Max Mustermann";
var dateToday = "00.00.0000";
var time1 = "13:22";
var time2 = "15:22";
var price = "1,45";
var from = "Oldenburg in Holstein";
var from_id = "5545";
var to = "Göhl";
var to_id = "5545";


/*  INITIALISING PROMTS  */

//  NAME
name = prompt("[Anrede] [Vorname] [Nachname]");
if(name == "") {
    name = "Herr Max Mustermann";
}
document.getElementById("block1_name").textContent = name;



//  DATE
dateToday = prompt("Datum: [DD.MM.JJJJ]");
if(dateToday == "") {
    if (date.getDate().length == 2 && date.getMonth().length == 2){
        dateToday = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    } else if (date.getDate().length == 2 && date.getMonth().length == 1){
        dateToday = date.getDate() + ".0" + date.getMonth() + "." + date.getFullYear();
    } else if (date.getDate().length == 1 && date.getDate().length == 2){
        dateToday = "0" + date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    } else {
        dateToday = "0" + date.getDate() + ".0" + date.getMonth() + "." + date.getFullYear();
    }
}
document.getElementById("header_date").textContent = dateToday;
document.getElementById("block1_valid_from").textContent = dateToday;
document.getElementById("block1_valid_until").textContent = dateToday;
document.getElementById("block1_date").textContent = dateToday;


//  ORDER NR
ordernr = prompt("Auftrags-Nr: [XXXXXX]");
if(ordernr == "") {
    ordernr = returnChar(Math.floor(Math.random() * 36)) +
    returnChar(Math.floor(Math.random() * 36)) +
    returnChar(Math.floor(Math.random() * 36)) +
    returnChar(Math.floor(Math.random() * 36)) +
    returnChar(Math.floor(Math.random() * 36)) +
    returnChar(Math.floor(Math.random() * 36));
}
ordernr = ordernr.toUpperCase();
document.getElementById("header_order").textContent = ordernr;
document.getElementById("block1_order").textContent = ordernr;

document.getElementById("verifier_text_top_1").textContent = ordernr.substr(0, 1);
document.getElementById("verifier_text_top_2").textContent = ordernr.substr(1, 1);
document.getElementById("verifier_text_top_3").textContent = ordernr.substr(2, 1);
document.getElementById("verifier_text_top_4").textContent = ordernr.substr(3, 1);
document.getElementById("verifier_text_top_5").textContent = ordernr.substr(4, 1);
document.getElementById("verifier_text_top_6").textContent = ordernr.substr(5, 1);

document.getElementById("verifier_text_bottom_1").textContent = ordernr.substr(0, 1);
document.getElementById("verifier_text_bottom_2").textContent = ordernr.substr(1, 1);
document.getElementById("verifier_text_bottom_3").textContent = ordernr.substr(2, 1);
document.getElementById("verifier_text_bottom_4").textContent = ordernr.substr(3, 1);
document.getElementById("verifier_text_bottom_5").textContent = ordernr.substr(4, 1);
document.getElementById("verifier_text_bottom_6").textContent = ordernr.substr(5, 1);

//  PRICE
price = prompt("Preis [Z,ZZ]");
if(price == ""){
    price = "1,45";
} 
price = String(price) + " EUR";
document.getElementById("block1_price").textContent = price;



//  TIME
time1 = prompt("Zeit: [HH:MM]");
if(time1 == "") {
    time1 = "13:22";
}
time2 = time1;
time2 = String(parseInt(time2.substr(0, 2)) + 2) + ":" + time1.substr(3, 2);

time1 = String(time1);
document.getElementById("block1_time1").textContent = time1 + " Uhr";
document.getElementById("block1_time2").textContent = time2 + " Uhr";
document.getElementById("block1_time3").textContent = time1.substr(0, 3) + String(parseInt(time1.substr(3, 2)) - 4) + " Uhr";


//  FROM
from = prompt("Von: [ORT] [ID]");
if(from == "") {
    from = "Oldenburg in Holstein 5545";
}

from_id = from.split(" ").pop();
from_id = " (" + from_id + ")";
document.getElementById("block1_from_id").textContent = from_id;

from = from.substr(0, from.length - 4);
document.getElementById("block1_from").textContent = from;



//  TO
to = prompt("Nach: [ORT] [ID]");
if(to == "") {
    to = "Göhl 5545";
}
to_id = to.split(" ").pop();
to_id = " (" + to_id + ")";
document.getElementById("block1_to_id").textContent = to_id;

to = to.substr(0, to.length - 4);
document.getElementById("block1_to").textContent = to;


document.getElementById("header_location").textContent = from + from_id + " - " + to + to_id;



function footer_button1_onclick() {

    //  PRICE
    price = prompt("Preis [Z,ZZ]");
    price = String(price) + " EUR";
    document.getElementById("block1_price").textContent = price;


    //  TIME
    time1 = prompt("Zeit: [HH:MM]");

    time2 = time1;
    time2 = String(parseInt(time2.substr(0, 2)) + 2) + ":" + time1.substr(3, 2);

    time1 = String(time1);
    document.getElementById("block1_time1").textContent = time1 + " Uhr";
    document.getElementById("block1_time2").textContent = time2 + " Uhr";
    document.getElementById("block1_time3").textContent = time1.substr(0, 3) + String(parseInt(time1.substr(3, 2)) - 4) + " Uhr";


    //  FROM
    from = prompt("Von: [ORT] [ID]");
    document.getElementById("block1_from").textContent = from.substr(0, from.length - 4);

    from_id = from.split(" ").pop();
    from_id = " (" + from_id + ")";
    document.getElementById("block1_from_id").textContent = from_id;


    //  TO
    to = prompt("Nach: [ORT] [ID]");
    document.getElementById("block1_to").textContent = to.substr(0, to.length - 4);

    to_id = to.split(" ").pop();
    to_id = " (" + to_id + ")";
    document.getElementById("block1_to_id").textContent = to_id;

    document.getElementById("header_location").textContent = from.substr(0, from.length - 4) + from_id + " - " + to.substr(0, to.length - 4) + to_id;

}


/*  STARTS EVERYTHING BELOW HERE  */
loop();

/*  DRAWS A BLACK SQUARE  */
function drawBlack() {

    ctx_qr.fillStyle = "#000000";
    ctx_qr.fillRect(pos_x, pos_y, len, len);

    if (pos_x >= max_pos_x) {
        pos_x = 0;
        pos_y += 11;
    } else {
        pos_x += 11;
    }
    ctx_qr.stroke();

    count++;
    loop();
}
/*  DRAWS A WHITE SQUARE  */
function drawWhite() {

    ctx_qr.fillStyle = "#FFFFFF";
    ctx_qr.fillRect(pos_x, pos_y, len, len);

    if (pos_x >= max_pos_x) {
        pos_x = 0;
        pos_y += 11;
    } else{
        pos_x += 11;
    }
    ctx_qr.stroke();

    count++;
    loop();
}
/*  GENERATES A RANDOM NUMBER FOR BLACK / WHITE */
function randomGen() {
    
    random = Math.floor(Math.random() * 2);

    if (random == 0) {
        drawWhite();
    } else if (random == 1) {
        drawBlack();
    }
}
/*  LOOP FUNCTION FOR DRAWING EVERYTHING*/
function loop() {
    console.log((count / 7212) * 100 + "%");
    if ((count % 72) == 0) {
        setTimeout(randomGen, 20);
        return;
    }
    if (count >= 7212) {
        return;
    }
    randomGen();
}

/*  END CREATING QR  */

/*  START CREATING MID  */

loopForMid();

function loopForMid() {
    setTimeout(drawBlackForMid, 2100)
}

function drawBlackForMid() {

    ctx_qr_mid.fillStyle = "#000000";
    ctx_qr_mid.fillRect(0, 0, 143, 11);
    ctx_qr_mid.fillRect(0, 132, 143, 11);
    ctx_qr_mid.fillRect(0, 0, 11, 143);
    ctx_qr_mid.fillRect(132, 0, 11, 143);

    ctx_qr_mid.fillRect(22, 22, 99, 11);
    ctx_qr_mid.fillRect(22, 110, 99, 11);
    ctx_qr_mid.fillRect(22, 22, 11, 99);
    ctx_qr_mid.fillRect(110, 22, 11, 99);

    ctx_qr_mid.fillRect(44, 44, 55, 11);
    ctx_qr_mid.fillRect(44, 88, 55, 11);
    ctx_qr_mid.fillRect(44, 44, 11, 55);
    ctx_qr_mid.fillRect(88, 44, 11, 55);

    ctx_qr_mid.fillRect(66, 66, 11, 11)
    ctx_qr_mid.stroke();

}

/*  DRAWING TEXT INTO VERIFY CANVAS  */
var text_x = -20;
var text_y = 0;
var max_text_x = 1;

function drawText() {
    ctx_ver_block.font = "17px Arial";
    ctx_ver_block.fillStyle = "#CFCFCF";

    drawTextLoop();

}

let text1 = name + " Einzelkarte BahnCard 2.Kl Gültig ab: " + dateToday + " " + time1 + " Uhr";
let text2 = "Gültig ab: " + dateToday + " " + time1 + " Uhr Gültig bis: " + dateToday + " " + time2 + " Uhr von " + from;
let text3 = from + from_id + " nach " + to + to_id + " über direkt Preisstufe 1";

function drawTextLoop(){

    ctx_ver_block.strokeStyle = "#606060";
    
    ctx_ver_block.moveTo(20, 40);
    ctx_ver_block.lineTo(78, 98);
    ctx_ver_block.stroke();
    ctx_ver_block.moveTo(10, 50);
    ctx_ver_block.lineTo(60, 100);
    ctx_ver_block.stroke();

    ctx_ver_block.moveTo(78, 40);
    ctx_ver_block.lineTo(20, 98);
    ctx_ver_block.stroke();
    ctx_ver_block.moveTo(60, 40);
    ctx_ver_block.lineTo(10, 90);
    ctx_ver_block.stroke();
    ctx_ver_block.moveTo(80, 50);
    ctx_ver_block.lineTo(30, 110);
    ctx_ver_block.stroke();

    for (let i = 0; i <= 28; i++) {
        
        ctx_ver_block.strokeStyle = "#CACACA";
        ctx_ver_block.beginPath();
        ctx_ver_block.moveTo(((Math.random() * 310) + 270)+ i*5, (20 + i * 5) - 80);
        ctx_ver_block.bezierCurveTo(241 + i *5, 49 + i * 5, 140 + i*5, 35 + i*5, (Math.random() * 40) + 176, (44 + i*6) - 10);
        ctx_ver_block.stroke();
    }
    ctx_ver_block.stroke();

    ctx_ver_block.translate(20, 16);
    ctx_ver_block.rotate(-Math.PI / 24);

    for (let w = 0; w <= 2; w++){
        text_x = -170;
        text_y = 0;
        for (let t = 0; t <= 3; t++) {
            ctx_ver_block.fillText(text1, text_x, text_y);
            text_y += 46;
            text_x += 38;
        }
    } 

    for (let w = 0; w <= 2; w++){
        text_x = -336;
        text_y = 16;
        for (let t = 0; t <= 3; t++) {
            ctx_ver_block.fillText(text2, text_x, text_y);
            text_y += 46;
            text_x += 38;
        }
    } 

    for (let w = 0; w <= 2; w++){
        text_x = -256;
        text_y = 32
        for (let t = 0; t <= 3; t++) {
            ctx_ver_block.fillText(text3, text_x, text_y);
            text_y += 46;
            text_x += 38;
        }
    } 

    
    ctx_ver_block.rotate(+Math.PI / 24);
    ctx_ver_block.fillStyle = "black";
    ctx_ver_block.font = "bold 15px Arial";
    ctx_ver_block.textAlign = "center";
    ctx_ver_block.fillText(name.substr(name.indexOf(" ") +1), 124, 22);


    ctx_ver_block.strokeStyle = "#C1C1C1";
    ctx_ver_block.moveTo(0, 26);
    for (let i = 0; i <= 88; i++) {
        rnd_x = (Math.random() * 70) - 8;
        rnd_y = (Math.random() * 60) + 28;

        ctx_ver_block.lineTo(rnd_x, rnd_y);
        ctx_ver_block.lineTo(rnd_x, rnd_y);
    }
    ctx_ver_block.stroke();


    ctx_ver_block.fillStyle = "#5D5D5D";
    ctx_ver_block.font = "bold 22px Arial";
    ctx_ver_block.fillText(dateToday.substr(0, 2) + " " + dateToday.substr(3, 2), 28, 64);

}
drawText();

function returnChar(random){
    res = "";
    let char_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    return char_array[random];
}