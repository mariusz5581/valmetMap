var isSlideMenuVisible = true;

var xConverter = 0;
var yConverter = 0;
var xDiff = 0;
var yDiff = 0;
var xMaximum = 0;
var yMaximum = 0;
var map;

function create_valmet_map() {


    //setting background of mainView
    $("#bg").css({
        "background-color": get("bg"),
        'font-size': '1em',
        height: "100%",
        width: "100%",
        top: "0%",
        left: "0%"
    });

    //setting ellement's background
    var div = $("<div></div>")
        .css({
            //color: get("font"),
            //overflow: "auto",
            position: "fixed",
            display: "inline-flex",
            "background-color": get("bg"),
            height: "90%",
            width: "93%",
            left: "3%",
            top: "0%"
        });
    return div;
}

function create_coordinates(xMin, xMax, yMin, yMax, xStep, yStep, appendTo) {
    var x = [];
    var xNumber = [];
    var xCount = 0;
    console.log(xMin + '> x >' + xMax);
    console.log(yMin + '> y >' + yMax);

    $('.coord').remove();

    xMaximum = xMax;
    yMaximum = yMax;

    var xCoordStep = (xMax - xMin) / xStep;
    xDiff = xMax - xMin; // difference end map minus start map
    xConverter = (xMax - xMin) / 100; //ammount of x coords on one percent of screen
    for (var ix = xStep; ix > 0; ix--) {
        x[xCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                display: 'block',
                "background-color": get("x_line"),
                //height: "1px",
                width: "10%",
                left: ix * 100 / xStep + "%",
                top: "0px"
            })
            .attr("class", "coord")
            .appendTo(appendTo);

        xNumber[xCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                "color": col_white,
                "background-color": col_white02,
                'border-radius': '10px',
                padding: "5px",
                //height: "10px",
                //width: "30px",
                //left: "",
                top: "5px"
            }).text(Math.floor(xMin + (ix * xCoordStep)))
            .appendTo(x[xCount]);
        xCount++;
    }

    var y = [];
    var yNumber = [];
    var yCount = 0;
    var yCoordStep = (yMax - yMin) / yStep;
    yConverter = (yMax - yMin) / 100; //ammount of x coords on one percent of screen
    yDiff = yMax - yMin; // difference end map minus start map

    for (var iy = 1; iy < yStep + 1; iy++) {
        var nextPoint = iy * 100 / yStep;

        y[yCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                //display: 'block',
                //"background-color": get("y_line"),
                height: "10%",
                //width: "1px",
                left: "0px",
                top: nextPoint + "%",
            })
            .attr("class", "coord")
            .css({
                top:"-=3%"
            })
            .appendTo(appendTo);

        yNumber[yCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                "color": col_white,
                "background-color": col_white02,
                'border-radius': '10px',
                padding: "5px",

                //height: "10px",
                //width: "30px",
                //left: "5px",
                top: "0px"
            }).text(Math.floor(yMax - (iy * yCoordStep)))
            .appendTo(y[yCount]);
        yCount++;
    }
}

function create_map() {
    map = $("<div></div>")
        .css({
            position: "absolute",
            cursor: "cross",
            width: "100%",
        })
        .appendTo(viewMain);



    $("<img></img>")
        .css({
            //position: "absolute",
            cursor: "cross",
            width: "100%",
            //height: '100%'
            //"border-radius": "10px"
        })
        .attr("src", img_a_hitsaamo)
        .attr("id", "image")
        .appendTo(map);
}

class Maps{
    constructor(){
        this.mapDiv;
        this.imgMap;
        this.xMin;
        this.xMax;
        this.yMin;
        this.yMax;
        this.xStep;
        this.yStep;
        this.onClickChangeTo = [];
        this.onClickElement = [];
    }
}

var mapData = [];
mapData[0] = new Maps();
mapData[0].imgMap = img_map;
mapData[0].xMin = 10;
mapData[0].xMax = 1000;
mapData[0].yMin = 10;
mapData[0].yMax = 500;
mapData[0].xStep = 8;
mapData[0].yStep = 6;

mapData[0].onClickChangeTo[0] = 1;
mapData[0].onClickElement[0] = $('<div></div>')
.css({
    'background-color':'transparent',
    position:'absolute',
    width:'43%',
    height:'20%',
    left:'8%',
    top:'73%'
})
.click(function(e) {
    e.preventDefault();
        $('.map').css({
                //"background-color": get("btn_bg_clicked")
                //"border-color": get("btn_border1"),
                //"border-right-color": get("btn_border2"),
                //"border-left-color": get("btn_border2")
            })
            .fadeOut(500);

            currentMap = mapData[mapData[0].onClickChangeTo[0]].mapDiv;
            currentMap.fadeIn(300);
            create_coordinates(mapData[mapData[0].onClickChangeTo[0]].xMin, mapData[mapData[0].onClickChangeTo[0]].xMax,mapData[mapData[0].onClickChangeTo[0]].yMin, mapData[mapData[0].onClickChangeTo[0]].yMax,mapData[mapData[0].onClickChangeTo[0]].xStep, mapData[mapData[0].onClickChangeTo[0]].yStep, mapData[mapData[0].onClickChangeTo[0]].mapDiv);

    console.log('TODO: animate change of screens');
})

mapData[1] = new Maps();
mapData[1].imgMap = img_map01;
mapData[1].xMin = 80;
mapData[1].xMax = 505;
mapData[1].yMin = 40;
mapData[1].yMax = 140;
mapData[1].xStep = 8;
mapData[1].yStep = 3;


function create_maps() {
    for(var i = 0;i< mapData.length;i++){
        $('.map').fadeOut(0);
        mapData[i].mapDiv = $("<div></div>")
        .css({
            position: "absolute",
            cursor: "cross",
            width: "100%",
        })
        .attr('class', 'map')
        .appendTo(viewMain);

        $("<img></img>")
        .css({
            //position: "absolute",
            cursor: "cross",
            width: "100%",
            //height: '100%'
            //"border-radius": "10px"
        })
        .attr("src", mapData[i].imgMap)
        .attr("id", "image")
        .appendTo(mapData[i].mapDiv);

        for(var i2 = 0;i2<mapData[i].onClickElement.length;i2++){
            mapData[i].onClickElement[i2].appendTo(mapData[i].mapDiv);
        }

        currentMap = mapData[i].mapDiv;
        create_coordinates(mapData[i].xMin, mapData[i].xMax,mapData[i].yMin, mapData[i].yMax,mapData[i].xStep, mapData[i].yStep, mapData[i].mapDiv);
    }

    $('.map').fadeOut(0);
    currentMap = mapData[0].mapDiv;
    currentMap.fadeIn(0);
    create_coordinates(mapData[0].xMin, mapData[0].xMax,mapData[0].yMin, mapData[0].yMax,mapData[0].xStep, mapData[0].yStep, mapData[0].mapDiv);
    
}

function create_slide_menu() {
    var div = $("<div></div>")
        .css({
            //color: get("font"),
            position: "fixed",
            display: "inline-flex",
            "background-color": 'transparent',
            "border-radius": '20px',
            height: "8%",
            width: "98%",
            right: "1%",
            top: "0%"
        })
        .appendTo(viewMain);

        var goToMainMap = $("<div>Main</div>")
        .css({
            //color: get("font"),
            position: "absolute",
            'font-size': '2em',
            "text-align": "center",
            color:col_white,
            padding:'10px',
            display: "inline-flex",
            "background-color": col_black05,
            "border-radius": '40px',
            //height: "80%",
            //width: "10%",
            left: "46%",
            top: "10%"
        })
        .appendTo(div)
        .click(function(e) {
            e.preventDefault();
            $('.map').css({
                //"background-color": get("btn_bg_clicked")
                //"border-color": get("btn_border1"),
                //"border-right-color": get("btn_border2"),
                //"border-left-color": get("btn_border2")
            })
            .fadeOut(500);
            currentMap = mapData[0].mapDiv;
            currentMap.fadeIn(300);
    create_coordinates(mapData[0].xMin, mapData[0].xMax,mapData[0].yMin, mapData[0].yMax,mapData[0].xStep, mapData[0].yStep, mapData[0].mapDiv);
            
        });
        
        

        

    var handle = $("<div></div>")
        .css({
            //color: get("font"),
            position: "absolute",
            //display: "inline-flex",
            "border-radius": '40%',
            "border-top-left-radius": '0px',
            "border-top-right-radius": '0px',
            "border-top-width": '0px',

            "background-color": get('bg_menu'),
            'border-width': '0px',
            'border-style': 'solid',
            'border-color': 'white',
            height: "100%",
            width: "6%",
            right: "5%",
            bottom: "-100%"
        })
        .click(function(e) {
            e.preventDefault();
            if (isSlideMenuVisible) {
                $(div).css({
                        //"background-color": get("btn_bg_clicked")
                        //"border-color": get("btn_border1"),
                        //"border-right-color": get("btn_border2"),
                        //"border-left-color": get("btn_border2")
                    })
                    .animate({
                        //opacity: 0.25,
                        top: "-=8%",

                    }, 500, function() {
                        // Animation complete.
                    });
                isSlideMenuVisible = false;
            } else {
                $(div).css({
                        //"background-color": get("btn_bg_clicked")
                        //"border-color": get("btn_border1"),
                        //"border-right-color": get("btn_border2"),
                        //"border-left-color": get("btn_border2")
                    })
                    .animate({
                        //opacity: 0.25,
                        top: "+=8%",

                    }, 500, function() {
                        // Animation complete.
                    });
                isSlideMenuVisible = true;

            }
            console.log('TODO: animate slide menu');
        })
        .appendTo(div);
        


    var inputField = $("<input></input>")
        .css({
            //color: get("font"),
            position: "absolute",
            //display: "inline-flex",
            'font-size': '1.9em',
            "text-align": "center",
            'color': 'white',
            "background-color": get('bg_menu2'),
            "border-radius": '5%',
            "border-top-left-radius": '0px',
            "border-top-right-radius": '0px',
            "border-bottom-right-radius": '5%',
            "border-bottom-left-radius": '5%',
            "border-width": '0px',
            "border-color": 'white',
            height: "95%",
            width: "45%",
            right: "0%",
            bottom: "1%"
        })
        .attr('id', 'input')
        .attr('placeholder', 'osanumero tai koord. esim. 123 456')
        .appendTo(div)
        .change(function() {
            //console.log(inputField.val()); // Check input( $( this ).val() ) for validity here
        });

    return div;
}