//switches' management
let accckecked = false;
let gyrchecked = false;
let bothchecked = false;
let gyrHz = document.getElementById("gyrhz").value;
let accHz = document.getElementById("acchz").value;
function checkswitchesboth(){
    if (document.getElementById("both").checked === true){
        document.getElementById("gyr").checked = false;
        document.getElementById("acc").checked = false;
        console.log("both checked");
        document.getElementById("gyr_charts").style.display = "inline-block";
        document.getElementById("acc_charts").style.display = "inline-block";
        }
    return accckecked = false , bothchecked = true, gyrchecked = false;
}




function checkswitchesacc() {
    if (document.getElementById("acc").checked === true) {
        document.getElementById("gyr").checked = false;
        document.getElementById("both").checked = false;
        console.log("acc checked");
        document.getElementById("acc_charts").style.display = "inline-block";
        if(document.getElementById("gyr_charts").style.display === "inline-block"){
            document.getElementById("gyr_charts").style.display = "none";
        }
    }
    return accckecked = true , bothchecked = false, gyrchecked = false;
}
function checkswitchesgyr() {
    if (document.getElementById("gyr").checked === true){
        document.getElementById("acc").checked = false;
        document.getElementById("both").checked = false;
        console.log("gyr checked");
        document.getElementById("gyr_charts").style.display = "inline-block";
        if(document.getElementById("acc_charts").style.display === "inline-block"){
            document.getElementById("acc_charts").style.display = "none";
        }
    }
    return accckecked = false , bothchecked = false, gyrchecked = true;
}



let windowofdata = 150;
var ctx1 = document.getElementById('myChartgyr').getContext('2d');
var chart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'X-Axis',
            borderColor: 'rgb(255,0,0)',
            data: [],
            fill: false,
            pointRadius: 0
        },{
            label: 'Y-Axis',
            borderColor: 'rgb(0,255,0)',
            data: [],
            fill: false,
            pointRadius: 0
        }, {
            label: 'Z-Axis',
            borderColor: "rgb(0,0,255)",
            data: [],
            fill: false,
            pointRadius: 0
        },
        ],
    },
    options: {
        scales: {
            responsive: true,
            xAxes:[{
                ticks: {
                    maxTicksLimit: 50
                },
                type: 'time' ,
                time: {
                    displayFormats: {
                        millisecond: 'h:mm:ss.SSS'
                    }
                }
            }],
            yAxes: [{
            }]
        }
    }
});

var ctx2 = document.getElementById('myChartgyrFixed').getContext('2d');
var chartfixed = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'X-Axis',
            borderColor: 'rgb(255,0,0)',
            data: [],
            fill: false,
            pointRadius: 0
        },{
            label: 'Y-Axis',
            borderColor: 'rgb(0,255,0)',
            data: [],
            fill: false,
            pointRadius: 0
        }, {
            label: 'Z-Axis',
            borderColor: "rgb(0,0,255)",
            data: [],
            fill: false,
            pointRadius: 0
        },
        ],
    },
    options: {
        scales: {
            responsive: true,
            xAxes:[{
                ticks: {
                    maxTicksLimit: 50
                },
                type: 'time' ,
                time: {
                    displayFormats: {
                        millisecond: 'h:mm:ss.SSS'
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 200,
                    suggestedMax: 2000,
                    suggestedMin: -2000
                }
            }]
        }
    }
});

var ctx3 = document.getElementById('Chartacc').getContext('2d');
var chartacc = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'X-Axis',
            borderColor: 'rgb(255,0,0)',
            data: [],
            fill: false,
            pointRadius: 0
        },{
            label: 'Y-Axis',
            borderColor: 'rgb(0,255,0)',
            data: [],
            fill: false,
            pointRadius: 0
        }, {
            label: 'Z-Axis',
            borderColor: "rgb(0,0,255)",
            data: [],
            fill: false,
            pointRadius: 0
        },
        ],
    },
    options: {
        scales: {
            responsive: true,
            xAxes:[{
                ticks: {
                    maxTicksLimit: 50
                },
                type: 'time' ,
                time: {
                    displayFormats: {
                        millisecond: 'h:mm:ss.SSS'
                    }
                }
            }],
            yAxes: [{
            }]
        }
    }
});

var ctx4 = document.getElementById('Chartaccfixed').getContext('2d');
var chartaccfixed = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'X-Axis',
            borderColor: 'rgb(255,0,0)',
            data: [],
            fill: false,
            pointRadius: 0
        },{
            label: 'Y-Axis',
            borderColor: 'rgb(0,255,0)',
            data: [],
            fill: false,
            pointRadius: 0
        }, {
            label: 'Z-Axis',
            borderColor: "rgb(0,0,255)",
            data: [],
            fill: false,
            pointRadius: 0
        },
        ],
    },
    options: {
        scales: {
            responsive: true,
            xAxes:[{
                ticks: {
                    maxTicksLimit: 50
                },
                type: 'time' ,
                time: {
                    displayFormats: {
                        millisecond: 'h:mm:ss.SSS'
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 200,
                    suggestedMax: 30,
                    suggestedMin: -30
                }
            }]
        }
    }
});

//declaration of services and characteristics
agservice  = '326a9000-85cb-9195-d9dd-464cfbbae75a';
agwritechar = '326a9001-85cb-9195-d9dd-464cfbbae75a';
aggetvalschar = '326a9006-85cb-9195-d9dd-464cfbbae75a';

//function to see if web bluetooth is available on your system
function isWebBLEOn(){
    if (!navigator.bluetooth){
        console.log ('Web Bluetooth is not Available!' );
        return false
    }
    return true
}

//make the connect button work
document.querySelector('#readbatterylevel').addEventListener('click', funct)
function funct(event) {
    console.log('starting');
    document.getElementById('message').innerText = 'Connecting';
    event.stopPropagation()
    event.preventDefault()
    if(isWebBLEOn()){
        connectToDevice();
    }
}
// //make the start notifications button work ...
// document.querySelector('#startNotifications').addEventListener('click', function (event) {
//     if(isWebBLEOn()){
//         onStartNotificationsButtonClick();
//     }
// });
// //make the stop notifications button work
// document.querySelector('#stopNotifications').addEventListener('click', function (event) {
//     if(isWebBLEOn()){
//         onStopNotificationsButtonClick();
//     }
// });
let buttongyrpressed = false;
let buttonaccpressed = true;
let devicevar;
let configchar;
let datachar;
let servervar;
let servicevar;

// async function to connect to the GATT server and discover the Services and Characteristics
async function connectToDevice(){
    try {
        //scan only for the device with the preferred name
        devicevar = await navigator.bluetooth.requestDevice({
            filters:[{namePrefix: ['MetaWear']}],
            optionalServices: [agservice]
        });
        //check if the device is found
        if (devicevar){
            console.log('found device');
        }
        //connect to the device's GATT server
        servervar = await devicevar.gatt.connect();
        if (servervar){
            console.log('connected to server');
        }
        servicevar = await servervar.getPrimaryService(agservice);
        //getting the primary service
        if(servicevar){
            console.log('got service');
            document.getElementById('message').innerText = 'Connected';
        }
        //getting the characteristics
        configchar = await servicevar.getCharacteristic(agwritechar);
        datachar = await servicevar.getCharacteristic(aggetvalschar);
        //add an event listener to the characteristic as to monitor its values' changes
        datachar.addEventListener('characteristicvaluechanged',handlechangegyr);


    }//plain error checking
    catch (error) {
        console.log(error.message);
        document.getElementById('message').innerText = 'Something Went Wrong! Pleas Try Again!';
    }
}

//selector for the configure button and call the function to configure the device
// document.querySelector('#configure').addEventListener('click',function(event){
//     buttongyrpressed = true;
//     if(isWebBLEOn()){
//         writetodevice();
//         console.log(accckecked,gyrchecked,bothchecked);
//     }
// });

document.querySelector('#configure').addEventListener('click',function(event){
    buttongyrpressed = true;
    if(isWebBLEOn()){
        writetodevice();
    }
});


// document.querySelector('#configureacc').addEventListener('click',function () {
//     buttonaccpressed = true;
//     if(isWebBLEOn()){
//         writetodeviceacc();
//     }
// });

// commands to to write the config characteristic
let value = new Uint8Array([0x0b,0x84]);
let value1 = new Uint8Array ( [0x11,0x09,0x06,0x00,0x09,0x00,0x00,0x00,0x58,0x02]);
// 020300021f006400c80064002003000003
let value2 = new Uint8Array([0x02,0x03,0x00,0x02,0x1f,0x00,0x64,0x00,0xc8,0x00,0x64,0x00,0x20,0x03,0x00,0x00,0x03]);
// 020301020a006400c8006400983a6009ff
let value3 = new Uint8Array([0x02,0x03,0x01,0x02,0x0a,0x00,0x64,0x00,0xc8,0x00,0x64,0x00,0x98,0x3a,0x60,0x09,0xff]);
let value4 = new Uint8Array([0x02,0x01,0x01]);
// gyroscope command at 25Hz
let value5 = new Uint8Array([0x13,0x03,0x26,0x00]);
//13032700 50Hz
let value5_50 = new Uint8Array([0x13,0x03,0x27,0x00]);
//100hz 13032800
let value5_100 = new Uint8Array([0x13,0x03,0x28,0x00]);
//200Hz 12032900
let value5_200 = new Uint8Array([0x13,0x03,0x29,0x00]);
let value6 = new Uint8Array([0x09,0x02,0x13,0x05,0xff,0xa0,0x10,0x05,0x01]);
let value7 = new Uint8Array([0x09,0x02,0x09,0x03,0x00,0x60,0x11,0x30,0x03]);
let value8 = new Uint8Array([0x09,0x03,0x01]);
let value9 = new Uint8Array([0x09,0x07,0x01,0x01]);
let value10 = new Uint8Array([0x13,0x02,0x01,0x00]);
let value11 = new Uint8Array([0x13,0x01,0x01]);
// accelerometer command at 12.5Hz
let value5_acc = new Uint8Array([0x03,0x03,0x25,0x0c]);
// 25Hz
let value5_acc25 = new Uint8Array([0x03,0x03,0x26,0x0c]);
// 50hz
let value5_acc50 = new Uint8Array([0x03,0x03,0x27,0x0c]);
//100hz
let value5_acc100 = new Uint8Array([0x03,0x03,0x28,0x0c]);
//200hz
let value5_acc200 = new Uint8Array([0x03,0x03,0x29,0x0c]);
let value6_acc = new Uint8Array([0x09,0x02,0x03,0x04,0xff,0xa0,0x10,0x05,0x01]);
let value7_acc = new Uint8Array([0x09,0x02,0x09,0x03,0x00,0x60,0x11,0x30,0x03]);
let value8_acc = new Uint8Array([0x09,0x03,0x01]);
let value9_acc = new Uint8Array([0x09,0x07,0x01,0x01]);
let value10_acc = new Uint8Array([0x03,0x02,0x01,0x00]);
let value11_acc = new Uint8Array([0x03,0x01,0x01]);
let bothvalue = new Uint8Array([0x09,0x07,0x03,0x01]);


// 09020304ffa0100501
//let value6_acc = new Uint8Array([0x09,0x02,0x03,0x04,0xff,0xa0,0x10,0x05,0x01]);
// 090209030060113003
// let value7 = new Uint8Array([0x09,0x02,0x09,0x03,0x00,0x60,0x11,0x30,0x03]);
// let value8 = new Uint8Array([0x09,0x03,0x01]);
// let value9 = new Uint8Array([0x09,0x07,0x01,0x01]);
// let value10 = new Uint8Array([0x13,0x02,0x01,0x00]);
// let value11 = new Uint8Array([0x13,0x01,0x01]);



//function to write the commands to the the device
// async function writetodevice() {
//     console.log('start notifications');
//     await datachar.startNotifications();
//     await configchar.writeValue(value);
//     await configchar.writeValue(value1);
//     await configchar.writeValue(value2);
//     await configchar.writeValue(value3);
//     await configchar.writeValue(value4);
//     await configchar.writeValue(value5);
//     await configchar.writeValue(value6);
//     await configchar.writeValue(value7);
//     await configchar.writeValue(value8);
//     await configchar.writeValue(value9);
//     await configchar.writeValue(value10);
//     await configchar.writeValue(value11);
//     console.log('wrote gyr command');
//
// }

async function writetodevice(){
    if(gyrchecked === true){
        console.log('gyroscope');
        await datachar.startNotifications();
        await configchar.writeValue(value);
        await configchar.writeValue(value1);
        await configchar.writeValue(value2);
        await configchar.writeValue(value3);
        await configchar.writeValue(value4);
        switch (gyrHz) {
            case '25.0 Hz':
                await  configchar.writeValue(value5);
                break;
            case '50.0 Hz':
                await configchar.writeValue(value5_50);
                break;
            case '100.0 Hz':
                await configchar.writeValue(value5_100);
                break;
            case '200.0 Hz':
                await configchar.writeValue(value5_200);
                break;
        }
        //await configchar.writeValue(value5);
        await configchar.writeValue(value6);
        await configchar.writeValue(value7);
        await configchar.writeValue(value8);
        await configchar.writeValue(value9);
        await configchar.writeValue(value10);
        await configchar.writeValue(value11);
    }
    else if(accckecked === true){
        console.log('accelerometer');
        await datachar.startNotifications();
        await configchar.writeValue(value);
        await configchar.writeValue(value1);
        await configchar.writeValue(value2);
        await configchar.writeValue(value3);
        await configchar.writeValue(value4);
        await configchar.writeValue(value5_acc);
        switch (accHz) {
            case '12.5 Hz':
                await configchar.writeValue(value5_acc);
                break;
            case '25.0 Hz':
                await  configchar.writeValue(value5_acc25);
                break;
            case '50.0 Hz':
                await  configchar.writeValue(value5_acc50);
                break;
            case '100.0 Hz':
                await configchar.writeValue(value5_acc100);
                break;
            case '200.0 Hz':
                await configchar.writeValue(value5_acc200);
        }
        await configchar.writeValue(value6_acc);
        await configchar.writeValue(value7_acc);
        await configchar.writeValue(value8_acc);
        await configchar.writeValue(value9_acc);
        await configchar.writeValue(value10_acc);
        await configchar.writeValue(value11_acc);
    }
    else if(bothchecked === true){
        console.log('both');
        await datachar.startNotifications();
        await configchar.writeValue(value);
        await configchar.writeValue(value1);
        await configchar.writeValue(value2);
        await configchar.writeValue(value3);
        await configchar.writeValue(value4);
        switch (accHz) {
            case '12.5 Hz':
                await configchar.writeValue(value5_acc);
                break;
            case '25.0 Hz':
                await  configchar.writeValue(value5_acc25);
                break;
            case '50.0 Hz':
                await  configchar.writeValue(value5_acc50);
                break;
            case '100.0 Hz':
                await configchar.writeValue(value5_acc100);
                break;
            case '200.0 Hz':
                await configchar.writeValue(value5_acc200);
        }
        await configchar.writeValue(value6_acc);
        await configchar.writeValue(value7_acc);
        await configchar.writeValue(value8_acc);
        await configchar.writeValue(value9_acc);
        switch (gyrHz) {
            case '25.0 Hz':
                await  configchar.writeValue(value5);
                break;
            case '50.0 Hz':
                await configchar.writeValue(value5_50);
                break;
            case '100.0 Hz':
                await configchar.writeValue(value5_100);
                break;
            case '200.0 Hz':
                await configchar.writeValue(value5_200);
                break;
        }
        await configchar.writeValue(value6);
        await configchar.writeValue(value7);
        await configchar.writeValue(value8);
        await configchar.writeValue(bothvalue);
        await configchar.writeValue(value8);
        await configchar.writeValue(bothvalue);
        await configchar.writeValue(value8_acc);
        await configchar.writeValue(value9_acc);
        await configchar.writeValue(value10);
        await configchar.writeValue(value11);
        await configchar.writeValue(value10_acc);
        await configchar.writeValue(value11_acc);

    }
}

// async function writetodeviceacc(){
//     console.log('start notifications');
//     await datachar.startNotifications();
//     await configchar.writeValue(value);
//     await configchar.writeValue(value1);
//     await configchar.writeValue(value2);
//     await configchar.writeValue(value3);
//     await configchar.writeValue(value4);
//     await configchar.writeValue(value5_acc);
//     await configchar.writeValue(value6_acc);
//     await configchar.writeValue(value7_acc);
//     await configchar.writeValue(value8_acc);
//     await configchar.writeValue(value9_acc);
//     await configchar.writeValue(value10_acc);
//     await configchar.writeValue(value11_acc);
//     console.log('starting acc');
// }

//selector for the reset button and call to the reset function
document.querySelector('#reset').addEventListener('click', function (event) {
    if(isWebBLEOn()){
        resetDevice();
    }
});
// const value that the value of the packet is being multiplied by to get the real value
const gyrvar = 0.061;
const negvalue = 255;
const accvar = 0.000488;
let xvalue1true;
let yvalue1true;
let zvalue1true;
let xvalue2true;
let yvalue2true;
let zvalue2true;
//function to handle the data being sent from the device via notifications
function handlechangegyr(event) {
    if (gyrchecked === true) {
        console.log("gyr starting");
        gyrvalues(event);
    }else if (accckecked === true){
        console.log("acc starting");
        accvalues(event);
    }else if(bothchecked === true){
        console.log("both starting starting");
        // console.log(Int16Array.from(event.target.value.buffer.slice(2,3)));
        let checksensor = event.target.value.buffer.slice(2,3);
        let sensorbuffer = new Uint8Array(checksensor);
        console.log(sensorbuffer[0]);
        if(sensorbuffer[0] === 3){
            gyrvalues(event);
        }else{
            accvalues(event);
        }
    }
}
//function to reset the device to default config and disconnect GATT server
async function resetDevice() {
    const val = new Uint8Array([0xfe, 0x01]);
    configchar.writeValue(val);
    buttongyrpressed = false;
    buttonaccpressed = false;
    if (!devicevar.gatt.connected) {
        console.log('disconnected');
    }
}

function add_data_to_chart( xvalue1 , yvalue1 , zvalue1,xvalue2,yvalue2,zvalue2){
    chart.data.labels.push(new Date());
    chart.data.datasets[0].data.push(xvalue1);
    chart.data.datasets[1].data.push(yvalue1);
    chart.data.datasets[2].data.push(zvalue1);
    chart.data.labels.push(new Date());
    chart.data.datasets[0].data.push(xvalue2);
    chart.data.datasets[1].data.push(yvalue2);
    chart.data.datasets[2].data.push(zvalue2);
    if((chart.data.datasets[0].data.length >= windowofdata )|| (chart.data.datasets[1].data.length >= windowofdata ) || (chart.data.datasets[2].data.length >= windowofdata ) ){
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
        chart.data.datasets[2].data.shift();
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
        chart.data.datasets[2].data.shift();
        chart.data.labels.shift();
    }
    chart.update();


}

function add_data_to_fixedchart( xvalue1 , yvalue1 , zvalue1,xvalue2,yvalue2,zvalue2){
    chartfixed.data.labels.push(new Date());
    chartfixed.data.datasets[0].data.push(xvalue1);
    chartfixed.data.datasets[1].data.push(yvalue1);
    chartfixed.data.datasets[2].data.push(zvalue1);
    chartfixed.data.labels.push(new Date());
    chartfixed.data.datasets[0].data.push(xvalue2);
    chartfixed.data.datasets[1].data.push(yvalue2);
    chartfixed.data.datasets[2].data.push(zvalue2);
    if((chartfixed.data.datasets[0].data.length >= windowofdata )|| (chartfixed.data.datasets[1].data.length >= windowofdata ) || (chartfixed.data.datasets[2].data.length >= windowofdata ) ){
        chartfixed.data.datasets[0].data.shift();
        chartfixed.data.datasets[1].data.shift();
        chartfixed.data.datasets[2].data.shift();
        chartfixed.data.labels.shift();
        chartfixed.data.datasets[0].data.shift();
        chartfixed.data.datasets[1].data.shift();
        chartfixed.data.datasets[2].data.shift();
        chartfixed.data.labels.shift();
    }
    chartfixed.update();


}

function add_data_to_accchart( xvalue1 , yvalue1 , zvalue1,xvalue2,yvalue2,zvalue2){
    chartacc.data.labels.push(new Date());
    chartacc.data.datasets[0].data.push(xvalue1);
    chartacc.data.datasets[1].data.push(yvalue1);
    chartacc.data.datasets[2].data.push(zvalue1);
    chartacc.data.labels.push(new Date());
    chartacc.data.datasets[0].data.push(xvalue2);
    chartacc.data.datasets[1].data.push(yvalue2);
    chartacc.data.datasets[2].data.push(zvalue2);
    if((chartacc.data.datasets[0].data.length >= windowofdata )|| (chartacc.data.datasets[1].data.length >= windowofdata ) || (chartacc.data.datasets[2].data.length >= windowofdata ) ){
        chartacc.data.datasets[0].data.shift();
        chartacc.data.datasets[1].data.shift();
        chartacc.data.datasets[2].data.shift();
        chartacc.data.labels.shift();
        chartacc.data.datasets[0].data.shift();
        chartacc.data.datasets[1].data.shift();
        chartacc.data.datasets[2].data.shift();
        chartacc.data.labels.shift();
    }
    chartacc.update();

}

function add_data_to_accchartfixed( xvalue1 , yvalue1 , zvalue1,xvalue2,yvalue2,zvalue2){
    chartaccfixed.data.labels.push(new Date());
    chartaccfixed.data.datasets[0].data.push(xvalue1);
    chartaccfixed.data.datasets[1].data.push(yvalue1);
    chartaccfixed.data.datasets[2].data.push(zvalue1);
    chartaccfixed.data.labels.push(new Date());
    chartaccfixed.data.datasets[0].data.push(xvalue2);
    chartaccfixed.data.datasets[1].data.push(yvalue2);
    chartaccfixed.data.datasets[2].data.push(zvalue2);
    if((chartaccfixed.data.datasets[0].data.length >= windowofdata )|| (chartaccfixed.data.datasets[1].data.length >= windowofdata ) || (chartaccfixed.data.datasets[2].data.length >= windowofdata ) ){
        chartaccfixed.data.datasets[0].data.shift();
        chartaccfixed.data.datasets[1].data.shift();
        chartaccfixed.data.datasets[2].data.shift();
        chartaccfixed.data.labels.shift();
        chartaccfixed.data.datasets[0].data.shift();
        chartaccfixed.data.datasets[1].data.shift();
        chartaccfixed.data.datasets[2].data.shift();
        chartaccfixed.data.labels.shift();
    }
    chartaccfixed.update();

}

function gyrvalues(event) {
        if (event.target.value.buffer.byteLength === 19) {
            let testvlaue = event.target.value.buffer.slice(2, 3);
            let xvalue1 = event.target.value.buffer.slice(7, 9);
            let yvalue1 = event.target.value.buffer.slice(9, 11);
            let zvalue1 = event.target.value.buffer.slice(11, 13);
            let xvalue2 = event.target.value.buffer.slice(13, 15);
            let yvalue2 = event.target.value.buffer.slice(15, 17);
            let zvalue2 = event.target.value.buffer.slice(17, 19);
            // console.log(testvlaue);
            // console.log(event.target.value.buffer);
            let view = event.target.value;
            let xvalue1table = new Uint8Array(xvalue1);
            let xvalue1buffer = new ArrayBuffer(2);
            let xvalue1view = new DataView(xvalue1buffer);
            if (xvalue1table[1] < 240) {
                // console.log('postitive value')
                xvalue1view.setUint8(0, xvalue1table[1]);
                xvalue1view.setUint8(1, xvalue1table[0]);
                //console.log(xvalue1view);
                xvalue1true = (xvalue1view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                // console.log('negative value');
                let xvalue1tempm = negvalue - xvalue1table[0];
                let xvalue1tempd = negvalue - xvalue1table[1];
                xvalue1view.setUint8(0, xvalue1tempd);
                xvalue1view.setUint8(1, xvalue1tempm);
                //console.log(xvalue1view);
                xvalue1true = -(xvalue1view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('x value:', xvalue1true);
            let yvalue1table = new Uint8Array(yvalue1);
            let yvalue1buffer = new ArrayBuffer(2);
            let yvalue1view = new DataView(yvalue1buffer);
            if (yvalue1table[1] < 240) {
                yvalue1view.setUint8(0, yvalue1table[1]);
                yvalue1view.setUint8(1, yvalue1table[0]);
                //console.log(yvalue1view);
                yvalue1true = (xvalue1view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                let yvalue1tempm = negvalue - yvalue1table[0];
                let yvalue1tempd = negvalue - yvalue1table[1];
                yvalue1view.setUint8(0, yvalue1tempd);
                yvalue1view.setUint8(1, yvalue1tempm);
                //console.log(yvalue1view);
                yvalue1true = -(yvalue1view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('yvalue:', yvalue1true);
            let zvalue1table = new Uint8Array(zvalue1);
            let zvalue1buffer = new ArrayBuffer(2);
            let zvalue1view = new DataView(zvalue1buffer);
            if (zvalue1table[1] < 240) {
                zvalue1view.setUint8(0, zvalue1table[1]);
                zvalue1view.setUint8(1, zvalue1table[0]);
                // console.log(zvalue1view);
                zvalue1true = (zvalue1view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                let zvalue1tempm = negvalue - zvalue1table[0];
                let zvalue1tempd = negvalue - zvalue1table[1];
                zvalue1view.setUint8(0, zvalue1tempd);
                zvalue1view.setUint8(1, zvalue1tempm);
                // console.log(zvalue1view);
                zvalue1true = -(zvalue1view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('zvalue:', zvalue1true);
            let xvalue2table = new Uint8Array(xvalue2);
            let xvalue2buffer = new ArrayBuffer(2);
            let xvalue2view = new DataView(xvalue2buffer);
            if (xvalue2table[1] < 240) {
                xvalue2view.setUint8(0, xvalue2table[1]);
                xvalue2view.setUint8(1, xvalue2table[0]);
                // console.log(xvalue2view);
                xvalue2true = (xvalue2view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                let xvalue2tempm = negvalue - xvalue2table[0];
                let xvalue2tempd = negvalue - xvalue2table[1];
                xvalue2view.setUint8(0, xvalue2tempd);
                xvalue2view.setUint8(1, xvalue2tempm);
                // console.log(xvalue2view);
                xvalue2true = -(xvalue2view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('xvalue:', xvalue2true);
            let yvalue2table = new Uint8Array(yvalue2);
            let yvalue2buffer = new ArrayBuffer(2);
            let yvalue2view = new DataView(yvalue2buffer);
            if (yvalue2table[1] < 240) {
                yvalue2view.setUint8(0, yvalue2table[1]);
                yvalue2view.setUint8(1, yvalue2table[0]);
                // console.log(yvalue2view);
                yvalue2true = (yvalue2view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                let yvalue2tempm = negvalue - yvalue2table[0];
                let yvalue2tempd = negvalue - yvalue2table[1];
                yvalue2view.setUint8(0, yvalue2tempd);
                yvalue2view.setUint8(1, yvalue2tempm);
                // console.log(yvalue2view);
                yvalue2true = -(yvalue2view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('yvalue:', yvalue2true);
            let zvalue2table = new Uint8Array(zvalue2);
            let zvalue2buffer = new ArrayBuffer(2);
            let zvalue2view = new DataView(zvalue2buffer);
            if (zvalue2table[1] < 240) {
                zvalue2view.setUint8(0, zvalue2table[1]);
                zvalue2view.setUint8(1, zvalue2table[0]);
                // console.log(zvalue2view);
                zvalue2true = (zvalue2view.getInt16(0) * gyrvar).toFixed(3);
            } else {
                let zvalue2tempm = negvalue - zvalue2table[0];
                let zvalue2tempd = negvalue - zvalue2table[1];
                zvalue2view.setUint8(0, zvalue2tempd);
                zvalue2view.setUint8(1, zvalue2tempm);
                // console.log(zvalue2view);
                zvalue2true = -(zvalue2view.getInt16(0) * gyrvar).toFixed(3);
            }
            // console.log('zvalue:', zvalue2true);
            add_data_to_chart(xvalue1true, yvalue1true, zvalue1true, xvalue2true, yvalue2true, zvalue2true);
            add_data_to_fixedchart(xvalue1true, yvalue1true, zvalue1true, xvalue2true, yvalue2true, zvalue2true);
        }
}

function accvalues(event) {
        if (event.target.value.buffer.byteLength === 19) {
            let xvalue1 = event.target.value.buffer.slice(7, 9);
            let yvalue1 = event.target.value.buffer.slice(9, 11);
            let zvalue1 = event.target.value.buffer.slice(11, 13);
            let xvalue2 = event.target.value.buffer.slice(13, 15);
            let yvalue2 = event.target.value.buffer.slice(15, 17);
            let zvalue2 = event.target.value.buffer.slice(17, 19);
            // console.log(event.target.value.buffer);
            let xvalue1table = new Uint8Array(xvalue1);
            let xvalue1buffer = new ArrayBuffer(2);
            let xvalue1view = new DataView(xvalue1buffer);
            if (xvalue1table[1] < 240) {
                console.log('positive acc value');
                xvalue1view.setUint8(0, xvalue1table[1]);
                xvalue1view.setUint8(1, xvalue1table[0]);
                //console.log(xvalue1view);
                xvalue1true = (xvalue1view.getUint16(0) * accvar);
            } else {
                // console.log('negative acc value');
                let xvalue1tempm = negvalue - xvalue1table[0];
                let xvalue1tempd = negvalue - xvalue1table[1];
                xvalue1view.setUint8(0, xvalue1tempd);
                xvalue1view.setUint8(1, xvalue1tempm);
                // console.log(xvalue1view);
                xvalue1true = -(xvalue1view.getInt16(0) * accvar);
            }
            // console.log('x value:', xvalue1true);
            let yvalue1table = new Uint8Array(yvalue1);
            let yvalue1buffer = new ArrayBuffer(2);
            let yvalue1view = new DataView(yvalue1buffer);
            if (yvalue1table[1] < 240) {
                yvalue1view.setUint8(0, yvalue1table[1]);
                yvalue1view.setUint8(1, yvalue1table[0]);
                //console.log(yvalue1view);
                yvalue1true = (xvalue1view.getInt16(0) * accvar);
            } else {
                let yvalue1tempm = negvalue - yvalue1table[0];
                let yvalue1tempd = negvalue - yvalue1table[1];
                yvalue1view.setUint8(0, yvalue1tempd);
                yvalue1view.setUint8(1, yvalue1tempm);
                //console.log(yvalue1view);
                yvalue1true = -(yvalue1view.getInt16(0) * accvar);
            }
            // console.log('yvalue:', yvalue1true);
            let zvalue1table = new Uint8Array(zvalue1);
            let zvalue1buffer = new ArrayBuffer(2);
            let zvalue1view = new DataView(zvalue1buffer);
            if (zvalue1table[1] < 240) {
                zvalue1view.setUint8(0, zvalue1table[1]);
                zvalue1view.setUint8(1, zvalue1table[0]);
                // console.log(zvalue1view);
                zvalue1true = (zvalue1view.getInt16(0) * accvar);
            } else {
                let zvalue1tempm = negvalue - zvalue1table[0];
                let zvalue1tempd = negvalue - zvalue1table[1];
                zvalue1view.setUint8(0, zvalue1tempd);
                zvalue1view.setUint8(1, zvalue1tempm);
                // console.log(zvalue1view);
                zvalue1true = -(zvalue1view.getInt16(0) * accvar);
            }
            // console.log('zvalue:', zvalue1true);
            let xvalue2table = new Uint8Array(xvalue2);
            let xvalue2buffer = new ArrayBuffer(2);
            let xvalue2view = new DataView(xvalue2buffer);
            if (xvalue2table[1] < 240) {
                xvalue2view.setUint8(0, xvalue2table[1]);
                xvalue2view.setUint8(1, xvalue2table[0]);
                // console.log(xvalue2view);
                xvalue2true = (xvalue2view.getInt16(0) * accvar);
            } else {
                let xvalue2tempm = negvalue - xvalue2table[0];
                let xvalue2tempd = negvalue - xvalue2table[1];
                xvalue2view.setUint8(0, xvalue2tempd);
                xvalue2view.setUint8(1, xvalue2tempm);
                // console.log(xvalue2view);
                xvalue2true = -(xvalue2view.getInt16(0) * accvar);
            }
            // console.log('xvalue:', xvalue2true);
            let yvalue2table = new Uint8Array(yvalue2);
            let yvalue2buffer = new ArrayBuffer(2);
            let yvalue2view = new DataView(yvalue2buffer);
            if (yvalue2table[1] < 240) {
                yvalue2view.setUint8(0, yvalue2table[1]);
                yvalue2view.setUint8(1, yvalue2table[0]);
                // console.log(yvalue2view);
                yvalue2true = (yvalue2view.getInt16(0) * accvar);
            } else {
                let yvalue2tempm = negvalue - yvalue2table[0];
                let yvalue2tempd = negvalue - yvalue2table[1];
                yvalue2view.setUint8(0, yvalue2tempd);
                yvalue2view.setUint8(1, yvalue2tempm);
                // console.log(yvalue2view);
                yvalue2true = -(yvalue2view.getUint16(0) * accvar);
            }
            // console.log('yvalue:', yvalue2true);
            let zvalue2table = new Uint8Array(zvalue2);
            let zvalue2buffer = new ArrayBuffer(2);
            let zvalue2view = new DataView(zvalue2buffer);
            if (zvalue2table[1] < 240) {
                zvalue2view.setUint8(0, zvalue2table[1]);
                zvalue2view.setUint8(1, zvalue2table[0]);
                // console.log(zvalue2view);
                zvalue2true = (zvalue2view.getInt16(0) * accvar);
            } else {
                let zvalue2tempm = negvalue - zvalue2table[0];
                let zvalue2tempd = negvalue - zvalue2table[1];
                zvalue2view.setUint8(0, zvalue2tempd);
                zvalue2view.setUint8(1, zvalue2tempm);
                // console.log(zvalue2view);
                zvalue2true = -(zvalue2view.getInt16(0) * accvar);
            }
            add_data_to_accchart(xvalue1true, yvalue1true, zvalue1true, xvalue2true, yvalue2true, zvalue2true);
            add_data_to_accchartfixed(xvalue1true, yvalue1true, zvalue1true, xvalue2true, yvalue2true, zvalue2true);
            // console.log('zvalue:', zvalue2true);
        }
}





