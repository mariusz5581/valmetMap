function create_window(
    titleBarText,
    bottomBarText,
    tabElementsTextArray,
    width,
    height,
    leftOff,
    topOff,
    bottomBarButtonsTextArray
) {
    var div = $("<div></div>");
    $(div)
        .css({
            cursor: "default",
            position: "absolute",
            "overflow-x": "auto",
            //padding: "0.2em",
            "font-family": "Caveat",
            color: get("font"),
            "font-size": "2em",
            "text-align": "center",
            //"background-color": get("block_bg"),
            height: height + "%",
            width: width + "%",
            "border-color": "transparent",
            "border-width": "1px",
            "border-style": "solid",
            "border-radius": "10px"
        })
        .attr("id", "window");

    var divContent = $("<div></div>")
        .css({
            position: "fixed",
            top: "90px",
            bottom: "90px",
            //height: "100%",
            width: "100%",
            overflow: "auto"
        })
        .attr("id", "content")
        .appendTo(div);

    var divTitleBar = $("<div></div>");
    $(divTitleBar)
        .css({
            position: "fixed",
            padding: "10px",
            height: "50px",
            //top: "5px",
            width: "90%",
            //left: "5%",
            "background-color": get("bg"),
            "text-align": "left",
            "font-size": "1.7em",
            "font-family": "Caveat",
            color: get("font"),
            "border-color": get("border"),
            "border-width": "2px",
            "border-bottom-style": "solid"
                //"border-radius": "10px"
        })
        .text(titleBarText)
        .appendTo(div);

    var divBottomBar = $("<div></div>");
    console.log("bottomBarText" + bottomBarText);
    $(divBottomBar)
        .css({
            padding: "10px",
            position: "fixed",
            bottom: "0px",
            height: "70px",
            width: "90%",
            //left: "5%",
            "background-color": get("bg"),
            "text-align": "right",
            "font-size": "0.7em",
            "font-family": "Caveat",
            color: get("font"),
            "border-color": get("border"),
            "border-width": "2px",
            "border-top-style": "solid"
                //"border-radius": "10px"
        })
        .text(bottomBarText)
        .appendTo(div);
    return div;
}