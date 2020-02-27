var lang = 'PL';
function SetLanguage(languageCode) {
	lang = languageCode;
}

//sorts getting text by views
function GetElementLangText(view, action) {
	switch (view) {
		case 'login':
			return GetLoginLangText(action);
	}
}

function GetBlockLangText(blockName) {
	var textCode = blockName + lang;
	switch (textCode) {
		case 'loginPL':
			return 'Logowanie';
		case 'loginEN':
			return 'Login';
		case 'loadingPL':
			return 'Podłączeni użytkownicy';
		case 'loadingEN':
			return 'Connected users';
	}
}

function GetLoginLangText(action) {
	var textCode = action + lang;
	switch (textCode) {
		case 'inputLoginPL':
			return 'wprowadź login';
		case 'inputLoginEN':
			return 'enter login';

		case 'inputPasswordPL':
			return 'wprowadź hasło';
		case 'inputPasswordEN':
			return 'enter password';

		case 'inputLoginPlaceholderPL':
			return 'login zbyt krótki (min 4)';
		case 'inputLoginEN':
			return 'login too short (min 4)';

		case 'inputPasswordPlaceholderPL':
			return 'hasło zbyt krótkie (min 6)';
		case 'inputPasswordEN':
			return 'password too short (min 6)';

		case 'btnLoginPL':
			return 'Zaloguj';
		case 'btn_loginEN':
			return 'Login';

		case 'btnCancelPL':
			return 'Wyjdź';
		case 'btnCancelEN':
			return 'Exit';
	}
}
