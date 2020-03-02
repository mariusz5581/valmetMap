var isDebugOn = true;

var divBlackOnStart;
var viewLoadingScreen;
var viewLogin;
var viewMain;

var currentMap;

var block_a_hitsaamo;

var block_coordinates;
var int = [];
var intCount = 0;

$(window).on("load", function() {
    //alert("Your api key is API_KEY_CONST");
});

//console.log($(document));

$(document).ready(function() {
    //OnKeyPress();
    //InitializeAllViews();
    InitializeValmetMapView();
    keyboardPress();

});

function keyboardPress() {
    window.addEventListener('keydown', key => {
        console.log('html keypress:' + key);
        var input = $('#input');
        setTimeout(() => {
            console.log(input.val());
            checkInputData(input.val());
        }, 100)
    });

}

function checkInputDataOLD(val) {
    //#region Clear all marks first
    for (var i = 0; i < intCount; i++) {
        clearInterval(int[i]);
    }
    intCount = 0;
    $('.mark').remove();
    if (val.length < 4) {
        return;
    }
    //#endregion Clear all marks first
    //#region Input data recognition
    //when input data has space and two elements (ex. '435 993')
    if (val.split(' ').length == 2) {
        markPlace(val.split(' ')[0], val.split(' ')[1]);
    } else {
        console.log('part number');
        for (var i = 0; i < parts.length; i++) {
            var data = parts[i].data.split('|');
            for (var i2 = 0; i2 < data.length; i2++) {
                var pair = data[i2].split(':');
                switch (pair[0]) {
                    case 'nr':
                        if (pair[1].includes(val)) {
                            markPlace(data[1].split(':')[1], data[2].split(':')[1], pair[1])
                        }
                        break;
                }
            }
        }
    }

    
    //#endregion Input data recognition
}

function checkInputData(val) {
    //#region Clear all marks first
    for (var i = 0; i < intCount; i++) {
        clearInterval(int[i]);
    }
    intCount = 0;
    $('.mark').remove();
    if (val.length < 4) {
        return;
    }
    //#endregion Clear all marks first
    //#region Input data recognition
    //when input data has space and two elements (ex. '435 993')
    if (val.split(' ').length == 2) {
        markPlace(val.split(' ')[0], val.split(' ')[1]);
    } else {
        console.log('part number');
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].partNr.includes(val)) {
                markPlace(parts[i].x, parts[i].y,parts[i].partNr + ' x' + parts[i].x + ' y' + parts[i].y);
            }
        }
    }
}

function markPlace(xCoord, yCoord, partNumber) {
    console.log('partNumber:' + partNumber);
    var xPercent = 100 - ((xMaximum - xCoord) / xConverter);
    var yPercent = 100 - ((yMaximum - yCoord) / yConverter);
    console.log('coords x:' + xCoord + ' y:' + yCoord);
    console.log('maximum x:' + xMaximum + ' maximum y:' + yMaximum);
    console.log('percents x:' + xPercent + ' y:' + yPercent);
    console.log('converters x:' + xConverter + ' y:' + yConverter);
    
    var blip = $("<div></div>")
    .css({
        //color: get("font"),
        position: "absolute",
        display: "inline-flex",
        opacity: 0.4,
        "background-color": 'red',
        'border-radius': '20px',
        height: "20px",
        width: "20px",
        //left: '40px',
        //bottom: '40px'
        left: xPercent + '%',
        bottom: yPercent + '%'
    })
    .attr("class", "mark")
    .appendTo(currentMap);
    
    if(partNumber){
    var div = $("<div></div>")
        .css({
            //color: get("font"),
            position: "absolute",
            display: 'block',
            "background-color": col_grey180_02,
            'border-radius': '10px',
            //height: "100px",
            //width: "300px",
            left: xPercent + 1 + '%',
            bottom: yPercent + '%'
        })
        .attr("class", "mark")
        .appendTo(currentMap);
    }

    

    if (partNumber) {

        var partNr = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                display: "inline-flex",
                "background-color": col_grey180_05,
                'color': col_white,
                'border-radius': '10px',
                //height: "20px",
                //width: "20px",
                padding:'5px',
                left: '0px',
                bottom: '10px'

            })
            .text(partNumber)
            .appendTo(div);
    }

    int[intCount] = setInterval(() => {
        blip.animate({
            opacity: "+=0.5",
            width: "+=30",
            height: "+=30",
            left: "-=15",
            bottom: "-=15"
        }, 900);
        setTimeout(() => {
            blip.animate({
                opacity: "-=0.5",
                width: "-=30",
                height: "-=30",
                left: "+=15",
                bottom: "+=15"
            }, 900);
        }, 900)
    }, 2000);
    intCount++;
}

function InitializeValmetMapView() {
    viewMain = create_valmet_map().appendTo('#main');
    create_maps();
    //create_coordinates(436, 644, 348, 416, 10, 10);
    create_slide_menu();
}

function InitializeAllViews() {
    Create_alt_view_main()
        .appendTo($("#main"));
    viewLogin = Create_block_login().appendTo(view_main).fadeOut(0);
    viewLoadingScreen = Create_block_loading().appendTo(view_main);
    InitializeEvents();
}

/*
function ToggleLoadingScreen(toggle) {
    if (toggle) {
        console.log("main.js:ToggleLoadingScreen:true");
        divBlackOnStart.fadeOut();
        viewLoadingScreen.fadeIn();
    }
    else {
        console.log("main.js:ToggleLoadingScreen:false");
        viewLoadingScreen.fadeOut();
    }
}

function ToggleLogin(toggle) {
    if (toggle) {
        console.log("main.js:ToggleLogin:true");
        viewLogin.fadeIn();
    }
    else {
        console.log("main.js:ToggleLogin:false");
        viewLogin.fadeOut();
    }
}
*/