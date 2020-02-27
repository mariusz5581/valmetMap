function create_button(view, action, pos_h_w_t_b_l_r) {
    var height = 0;
    var width = 0;
    var top = 0;
    var bottom = 0;
    var left = 0;
    var right = 0;
    var margin = "";
    var padding = "";
    var posType = "";

    var text = GetElementLangText(view, action);

    if (pos_h_w_t_b_l_r != "" && pos_h_w_t_b_l_r != undefined) {
        var splitted = pos_h_w_t_b_l_r.split(",");
        for (var i = 0; i < splitted.length; i++) {
            var pair = splitted[i].split(":");
            for (var j = 0; j < pair.length; j++) {
                switch (pair[0]) {
                    case "pos":
                        if (pair[1] === "a") {
                            posType = "absolute";
                        }
                        if (pair[1] === "f") {
                            posType = "fixed";
                        }
                        height = pair[1];
                        break;
                    case "h":
                        height = pair[1];
                        break;
                    case "w":
                        width = pair[1];
                        break;
                    case "t":
                        top = pair[1];
                        break;
                    case "b":
                        bottom = pair[1];
                        break;
                    case "l":
                        left = pair[1];
                        break;
                    case "r":
                        right = pair[1];
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

    // text object
    var div_text = $("<div></div>");
    $(div_text)
        .css({
            cursor: "pointer",
            padding: "8px",
            "font-family": "Caveat",
            color: get("btn_font"),
            "font-size": "0.5em",
            "text-align": "center",
            "background-color": get("btn_bg"),
            //height: height + "%",
            //width: width + "%",
            "border-width": "2px",
            "border-style": "solid",
            "border-color": get("btn_border1"),
            "border-radius": "10px",

            "border-right-color": get("btn_border2"),
            "border-left-color": get("btn_border2"),
            "border-left-width": "2px",
            "border-right-width": "2px"
        })
        .text(text)
        .attr("id", view + "_" + action);

    // Whole object
    var div = $("<div></div>");
    $(div)
        .css({
            position: posType,
            margin: margin,
            //padding: "2px",
            //color: get("btn_font"),
            "background-color": "transparent",
            width: "95%",
            "border-color": "red",
            "border-width": "0px",
            "border-style": "solid",
            "border-radius": "20px"
        })
        //       .text(text)
        .attr("id", view + ":" + action)
        .append(div_text);

    div_text.hover(
        function() {
            console.log(div);
            div.css({
                //"background-color": get("btn_bg_hover")
                //"border-color": get("border_hover")
            });
            div_text.css({
                "background-color": get("btn_bg_hover"),
                "border-color": get("btn_border_hover"),
                "border-left-color": get("btn_border_hover"),
                "border-right-color": get("btn_border_hover")
            });
            // over
        },
        function() {
            div.css({
                //"background-color": get("btn_bg")
                //"border-color": get("border")
            });
            div_text.css({
                "background-color": get("btn_bg"),
                "border-color": get("btn_border1"),
                "border-right-color": get("btn_border2"),
                "border-left-color": get("btn_border2")
            });
            // out
        }
    );

    if (pos_h_w_t_b_l_r != "" && pos_h_w_t_b_l_r != undefined) {
        if (height != 0) {
            div.css({
                height: height
            });
        }
        if (width != 0) {
            div.css({
                width: width
            });
        }
        if (left != 0) {
            div.css({
                left: left
            });
        }
        if (right != 0) {
            div.css({
                right: right
            });
        }
        if (top != 0) {
            div.css({
                top: top
            });
        }
        if (bottom != 0) {
            div.css({
                bottom: bottom
            });
        }
    }

    $(div_text).click(function(e) {
        e.preventDefault();
        $(this).css({
            "background-color": get("btn_bg_clicked")
                //"border-color": get("btn_border1"),
                //"border-right-color": get("btn_border2"),
                //"border-left-color": get("btn_border2")
        });
        OnClick(view, action);
    });
    return div;
}