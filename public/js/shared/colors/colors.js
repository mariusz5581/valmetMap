var theme = 'dark';

var col_black = 'rgb(0,0,0)';
var col_black05 = 'rgb(0,0,0,0.82)';
var col_btn_bg = 'rgb(0,0,150,0.6)';
var col_btn_hover = 'rgb(0,0,150,0.9)';
var col_grey40 = 'rgb(40, 40, 40)';
var col_grey60_05 = 'rgb(60, 60, 60, 0.5)';
var col_grey160_04 = 'rgb(160, 160, 160, 0.4)';
var col_grey80 = 'rgb(80, 80, 80)';
var col_grey120 = 'rgb(120, 120, 120)';
var col_grey150 = 'rgb(150, 150, 150)';
var col_grey180 = 'rgb(180, 180, 180)';
var col_grey180_02 = 'rgb(180, 180, 180, 0.2)';
var col_grey180_05 = 'rgb(180, 180, 180, 0.5)';
var col_grey200_05 = 'rgb(200, 200, 200, 0.5)';
var col_grey210 = 'rgb(210, 210, 210)';
var col_grey230 = 'rgb(230, 230, 230)';
var col_white = 'rgb(255, 255, 255)';
var col_white02 = 'rgb(255, 255, 255, 0.2)';
var col_blue05 = 'rgb(50, 50, 255, 0.5)';

//red colors
var col_red02 = 'rgb(255,80,80,0.2)';

//blue colors
var col_blue80 = 'rgb(0,0,80)';
var col_blue200 = 'rgb(50,50,255)';
var col_blue200_02 = 'rgb(50,50,255, 0.2)';
var col_grey150_blue255_05 = 'rgb(100,100,200)';

//Theme slection:dark or light
//element: font, bg, frame,
function setTheme(themeName) {
    switch (themeName) {
        case 'light':
            theme = 'light';
            break;
        case 'dark':
            theme = 'dark';
            break;
    }
}

function get(element) {
    switch (theme) {
        case 'dark':
            return themeDark(element);
        case 'light':
            return themeLight(element);
    }
}

//Colors for dark theme
function themeDark(element) {
    switch (element) {
        case 'font':
            return col_white;
        case 'bg':
            return col_grey40;
        case 'block_bg':
            return col_grey80;
        case 'x_line':
            return "blue";
        case 'y_line':
            return 'black';
        case 'bg_menu':
            return col_grey160_04;
            case 'bg_menu2':
            return col_black05;
        case 'mark':
            return 'transparent';
        case 'btn_border2':
            return 'transparent';
        case 'btn_border_hover':
            return col_white;
        case 'btn_bg':
            return col_grey80;
        case 'btn_bg_hover':
            return col_grey80;
        case 'btn_font':
            return col_white;
        case 'btn_bg_clicked':
            return col_grey120;
        case 'input_bg':
            return col_grey210;
        case 'input_bg_hover':
            return col_white;
        case 'input_font':
            return col_black;
    }
}

function themeLight(element) {
    switch (element) {

    }
}