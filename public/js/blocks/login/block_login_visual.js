var block_login;

function Create_block_login() {
    //#region Login
    block_login = create_block("login", 35, 45).appendTo(view_main);
    var login_login = create_input_field(
        "login",
        "inputLogin",
        "w:60%"
    ).appendTo(block_login);
    var login_passw = create_input_field(
        "login",
        "inputPassword",
        "w:60%"
    ).appendTo(block_login);

    var login_space = create_empty_space("h:10%").appendTo(block_login);
    var login_grid = create_grid(2).appendTo(block_login);

    var login_btn_login = create_button("login", "btnLogin").appendTo(
        login_grid
    );
    var login_btn_cancel = create_button("login", "btnCancel").appendTo(
        login_grid
    );
    //#endregion

    view_main.append(block_login);

    return block_login;
}