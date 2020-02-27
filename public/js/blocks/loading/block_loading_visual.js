var block_loading;

function Create_block_loading() {
    //#region Login
    block_loading = create_block("", 100, 100).appendTo(view_main)
        .css({
            
            'background-color': 'transparent',
            'padding': '0px',
            overflow: "none"
            //position: 'fixed',
            //width: '100%',
            //height: '100%',
            //left: '0%',
            //top: '0%'
            
        })
        ;
    var divImage = $("<img></img>")
        .css({
            position: "fixed",
            cursor: "pointer",
            width: "100%",
            height: "100%",
            left: '0%',
            top:'0%'

            //"border-radius": "10px"
        })
        .attr("src", "js/shared/images/loading_screen.png")
        .attr("id", "image")
        .appendTo(block_loading);
    //var login_space = create_empty_space("h:10%").appendTo(block_loading);
    var loading_grid = create_grid(2).appendTo(block_loading);

    //#endregion

    view_main.append(block_loading);

    return block_loading;
}