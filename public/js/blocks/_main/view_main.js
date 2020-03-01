var isSlideMenuVisible = true;

var xConverter = 0;
var yConverter = 0;
var xDiff = 0;
var yDiff = 0;
var xMaximum = 0;
var yMaximum = 0;
var a_hitsaamo_map;

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
            overflow: "auto",
            position: "absolute",
            display: "inline-flex",
            "background-color": get("bg"),
            height: "100%",
            width: "100%",
            left: "0%",
            top: "0%"
        });
    return div;
}

function create_coordinates(xMin, xMax, yMin, yMax, xStep, yStep) {
    var x = [];
    var xNumber = [];
    var xCount = 0;
    console.log(xMin + '> x >' + xMax);
    console.log(yMin + '> y >' + yMax);

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
                left: ix * 100 / yStep + "%",
                top: "0px"
            })
            .attr("class", "coord")
            .appendTo(a_hitsaamo_map);

        xNumber[xCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                "color": get("x_line"),
                "background-color": "white",
                'border-radius': '10px',
                padding: "5px",
                //height: "10px",
                //width: "30px",
                left: "",
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
                top: '-=6%'
            })
            .appendTo(a_hitsaamo_map);

        yNumber[yCount] = $("<div></div>")
            .css({
                //color: get("font"),
                position: "absolute",
                "color": get("y_line"),
                "background-color": "white",
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

function create_a_hitsaamo() {
    a_hitsaamo_map = $("<div></div>")
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
        .appendTo(a_hitsaamo_map);
}

function create_slide_menu() {
    var div = $("<div></div>")
        .css({
            //color: get("font"),
            position: "fixed",
            display: "inline-flex",
            "background-color": 'transparent',
            "border-radius": '20px',
            height: "12%",
            width: "98%",
            right: "1%",
            top: "0%"
        })
        .appendTo(viewMain);

    var handle = $("<div></div>")
        .css({
            //color: get("font"),
            position: "absolute",
            //display: "inline-flex",
            "border-radius": '40px',
            "border-top-left-radius": '0px',
            "border-top-right-radius": '0px',
            "border-top-width": '0px',

            "background-color": get('bg_menu'),
            'border-width': '1px',
            'border-style': 'solid',
            'border-color': 'white',
            height: "80%",
            width: "6%",
            right: "5%",
            bottom: "-80%"
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
                        top: "-=80",

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
                        top: "+=80",

                    }, 500, function() {
                        // Animation complete.
                    });
                isSlideMenuVisible = true;

            }
            console.log('TODO: animate slide menu');
        })

    .on("tap", function() {
            $(this).hide();
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
            "background-color": 'black',
            "border-radius": '10px',
            "border-width": '2px',
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