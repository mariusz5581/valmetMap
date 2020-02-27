function create_block(blockName, width, height, verticalOffset, horizontalOffset) {
    var div = $("<div></div>");
    $(div)
        .css({
            //"overflow-x": "auto",
            //position: "absolute",
            cursor: "default",
            display: "block",
            padding: "20px",
            "font-family": "Caveat",
            color: get("font"),
            "font-size": "1.5em",
            "text-align": "center",
            "background-color": get("block_bg"),
            width: width + "%",
            left: (100 - width) / 2 + '%',
            "border-color": get("block_border"),
            "border-width": "1px",
            "border-style": "solid",
            "border-radius": "10px"
        })
        .text(GetBlockLangText(blockName))
        .attr("id", blockName)
        .attr("class", "block");
    if (height != undefined) {
        div.css({
            height: height + '%',
            //left: (100 - width) / 2 + '%',
            top: (100 - height) / 2 + '%',

            position: 'absolute',
            overflow: "auto"
        });
    }
    if (verticalOffset != undefined) {
        div.css({
            left: (100 - width) / 2 + verticalOffset + '%',
        });
    }
    if (horizontalOffset != undefined) {
        div.css({
            top: (100 - height) / 2 + horizontalOffset + '%',
        });
    }

    return div;
}