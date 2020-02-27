function create_card(view, action, pos_h_w_t_b_l_r) {
    var height = 0;
    var width = 0;
    var topOff = 0;
    var bottomOff = 0;
    var leftOff = 0;
    var rightOff = 0;
    var posType = "";

    console.log('TODO: add text property from language based on action and maybe view');
    var text = action;

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
            //position: posType,
            position: "",
            display: "block",
            cursor: "pointer",
            margin: "10px",
            padding: "1px",
            //color: get("btn_font"),
            "background-color": get("btn_bg"),
            "border-color": get("btn_border2"),
            "border-width": "2px",
            "border-style": "solid",
            "border-radius": "10px",

            "border-left-color": get("btn_border1"),
            "border-right-color": get("btn_border1"),
            "border-left-width": "7px",
            "border-right-width": "7px",

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
        .hover(
            function() {
                console.log(div);
                div.css({
                    "background-color": get("btn_bg_hover"),
                    "border-left-color": get("btn_border_hover"),
                    "border-right-color": get("btn_border_hover")
                });
                // over
            },
            function() {
                div.css({
                    "background-color": get("btn_bg"),
                    "border-left-color": get("btn_border1"),
                    "border-right-color": get("btn_border1")
                });
                // out
            }
        )
        //       .text(text)
        .attr("id", "card");

    var divImage = $("<img></img>")
        .css({
            position: "relative",
            cursor: "pointer",
            width: "98%",
            "border-radius": "10px"
        })
        .attr("src", img_test01)
        .attr("id", "image")
        .appendTo(div);

    var divText = $("<div></div>");
    $(divText)
        .css({
            //"overflow-x": "auto",
            //position: "relative",
            cursor: "pointer",
            margin: "0px",
            padding: "0px",
            "font-family": "Caveat",
            color: get("btn_font"),
            "font-size": "0.5em",
            "text-align": "center",
            //height: height + "%",
            //width: text.length / 2.5 + "em",
            bottom: "0px"
        })
        .text(text)
        .attr("id", view + "_" + action)
        .appendTo(div);

    $(div).click(function(e) {
        e.preventDefault();
        $(this).css({
            "background-color": get("btn_bg_clicked"),
            //"border-color": get("btn_border1"),
            //"border-right-color": get("btn_border2"),
            //"border-left-color": get("btn_border2")
        });
        OnClick(view, action);
    });
    return div;
}