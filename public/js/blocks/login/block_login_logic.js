window.addEventListener("keydown", e => {
    //console.log("In webview keypress:" + e.keyCode);
    if ("alt" in window) {
        switch (e.keyCode) {
            case 27: //Escape
                //Toggle_block("login", false);
                alt.emit("block_login:key_escape");
                break;
        }
    } else {
        console.log("block_login_logic:" + e.keyCode + " pressed");
    }
});

function OnClickInLoginView(view, action) {//action is element name or command
    console.log('block_login_logic.js >>> OnClickInLoginView');
    var dataArray = [];
    var login = '';
    var passw = '';
    var canSendToClient = false;

    var minLoginLength = 1;
    var minpasswordLength = 1;

    switch (action) {
        case 'btnLogin'://pressed Login button
            login = $('#login_inputLogin').find('#text').val();
            passw = $('#login_inputPassword').find('#text').val();
            
            canSendToClient = true;
            if (login.length < minLoginLength) {
                console.log('err: login too short:' + login.length);
                $('#login_inputLogin')
                    .find('#text')
                    .css({
                        'border-color': 'red'
                    })
                    .attr('placeholder', GetLoginLangText('inputLoginPlaceholder'))
                    .val('');
                canSendToClient = false;
            }
            if (passw.length < minpasswordLength) {
                console.log('err: password too short:' + passw.length);
                $('#login_inputPassword')
                    .find('#text')
                    .css({
                        'border-color': 'red',
                    })
                    .attr('placeholder', GetLoginLangText('inputPasswordPlaceholder'))
                    .val('');
                canSendToClient = false;
            }
            break;

        case 'btnCancel'://pressed Cancel button
            login = '';
            passw = '';
            canSendToClient = true;
            break;
    }

    if (canSendToClient) {
        /*
        console.log('alt.emit(');
        console.log('view as event:' + view);
        console.log('action as first parameter:' + action);
        console.log('rest of parameters:' + dataArray);
        console.log(');');
        */
        alt.emit(view + ':checkCredentials', action, login, passw);
    } else {
        console.log('err: can not send info to client')
    }
}