function create_empty_space(pos_h_w_t_b_l_r) {
    var height = 0;
    var width = 0;
    var topOff = 0;
    var bottomOff = 0;
    var leftOff = 0;
    var rightOff = 0;
    var margin = "2px";
    var padding = "";
    var posType = "";


    if (pos_h_w_t_b_l_r != "" && pos_h_w_t_b_l_r != undefined) {
        var splitted = pos_h_w_t_b_l_r.split(",");
        for (var i = 0; i < splitted.length; i++) {
            var pair = splitted[i].split(":");
            for (var j = 0; j < pair.length; j++) {
                switch (pair[0]) {
                    case "h":
                        height = pair[1];
                        break;
                    case "w":
                        width = pair[1];
                        break;
                    case "t":
                        topOff = pair[1];
                        posType = "fixed";
                        break;
                    case "b":
                        bottomOff = pair[1];
                        break;
                    case "l":
                        leftOff = pair[1];
                        break;
                    case "r":
                        rightOff = pair[1];
                        break;
                    case "m":
                        margin = pair[1];
                        break;
                    case "p":
                        padding = pair[1];
                        break;
                }
            }
        }
    }

    // Whole object
    var div = $("<div></div>");
    $(div)
        .css({
            position: posType,
            margin: margin,
            padding: padding,
            //color: get("btn_font"),
            "background-color": "transparent",
            height: height,
            width: width,
            left: leftOff,
            right: rightOff,
            top: topOff,
            bottom: bottomOff,
            "border-radius": "20px"
        })
        //       .text(text)
        .attr("id", "empty_space");
    return div;
}