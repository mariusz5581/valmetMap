function ToggleBlock(what_block, show) {
    /*
    Blocks list:
    loading
    login

    */

    debug('events.js:ToggleBlock show:' + show);
    switch (what_block) {
        case "loading":
            if (show) {
                AnimIn(block_loading);
                //viewLoadingScreen.fadeOut();
            } else {
                AnimOut(block_loading);
            }
            break;
        case "login":
            if (show) {
                AnimIn(block_login);
            } else {
                AnimOut(block_login);
            }
            break;
    }
}

function AnimIn(object) {
    $(object).fadeIn(500);
}

function AnimOut(object) {
    $(object).fadeOut(1000);
}