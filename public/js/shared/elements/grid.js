function create_grid(columnCount) {
    var column = "";
    if (columnCount == 0) {
        column = "auto";
    } else {
        var temp = 100 / columnCount - 1;
        for (var i = 0; i < columnCount; i++) {
            column += temp + "% ";
        }
    }

    var div = $("<div></div>");
    $(div)
        .css({
            //        position: posType,
            display: "grid",
            "justify-items": "center",
            "grid-template-columns": column,
            //            "grid-template-row": row,
            margin: "10px",
            padding: "0px"
                //color: get("btn_font"),
                //"background-color": "red",
                //height: height + "%",
                //width: width + "%",
                //left: leftOff + "%",
                //right: rightOff + "%",
                //top: topOff + "%",
                //bottom: bottomOff + "%"
                //"border-color": "transparent",
                //"border-width": "1px",
                //"border-style": "solid",
                //"border-radius": "20px"
        })
        //       .text(text)
        .attr("id", "grid");

    return div;
}