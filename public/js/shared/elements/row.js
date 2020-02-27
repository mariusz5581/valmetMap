function create_row(elementCount, pos_h_w_t_b_l_r) {
    var height = 0;
    var width = 0;
    var topOff = 0;
    var bottomOff = 0;
    var leftOff = 0;
    var rightOff = 0;
    var posType = "";

    if (pos_h_w_t_b_l_r != "") {
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
                }
            }
        }
    }

    var div = $("<div></div>");
    $(div)
        .css({
            position: posType,
            display: "inline",
            margin: "10px",
            padding: "0px",
            //color: get("btn_font"),
            //"background-color": "red",
            height: height + "%",
            width: width + "%",
            left: leftOff + "%",
            right: rightOff + "%",
            top: topOff + "%",
            bottom: bottomOff + "%"
                //"border-color": "transparent",
                //"border-width": "1px",
                //"border-style": "solid",
                //"border-radius": "20px"
        })
        //       .text(text)
        .attr("id", "row");

    for (var i = 0; i < elementCount; i++) {
        var elementOfRow = $("<div></div>");
        var elementOfRowWidth = 100 / elementCount;
        elementOfRow
            .css({
                position: "absolute",
                margin: "0px",
                padding: "0px",
                //color: get("btn_font"),
                //"background-color": "green",
                height: 100 + "%",
                width: 100 / elementCount + "%",
                left: (elementCount - 1) * elementOfRowWidth + "%"
                    //right: rightOff + "%",
                    //top: topOff + "%",
                    //bottom: bottomOff + "%"
            })
            .attr("id", "elementOfRow")
            .appendTo(div);
    }

    return div;
}