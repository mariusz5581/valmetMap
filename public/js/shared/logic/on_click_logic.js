// on_click_logic.js >>>

function OnClick(view, action) {
    console.log('on_click_logic.js >>> OnClick');
    console.log('clicked: ' + view + ' ' + action);
	
    
    switch(view){
        case 'login':
            OnClickInLoginView(view, action);
        break;
    }
}


    
    
