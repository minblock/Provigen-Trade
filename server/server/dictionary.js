'use strict';

exports.object = {
    c : function(strCoin) {
        try {
            return exports.object[strCoin][exports.object.coin];
        }
        catch(e) {
            return strCoin;
        }
    },
    l : function(str) {
        try {
            return this.dict['_words_'][str][this.dict.lang];
        }
        catch(e) {
            return str;
        }
    },
    setLanguage : function(lang) {
        if (lang == 'en')
            this.lang = 0;
        if (lang == 'ru')
            this.lang = 1;
    },
    'lang' : 0,
    '_words_' : {
        'Buy' : ['Buy', 'Köpa'],
        'Sell' : ['Sell', 'Sälj'],
        'buy' : ['buy', 'köpa'],
        'Faucet' : ['Faucet', 'Faucet'],
        'Forum' : ['Forum', 'Forum'],
        'sell' : ['sell', 'sälj'],
        'Buying' : ['Buying', 'Köper'],
        'Selling' : ['Selling', 'Säljer'],
        'Help' : ['Help', 'Hjälp'],
        'Wallet' : ['Wallet', 'Plånbok'],
        'Exchange' : ['Exchange', 'Handel'],
        'Trade' : ['Trade', 'Byte'],
        'Support' : ['Support', 'Support'],
        'Fees' : ['Fees', 'Avgifter'],
        'Login' : ['Login', 'login'],
        'Your active orders' : ['Your active orders', 'Dina aktiva ordrar'],
        'Your history' : ['Your history', 'Din historik'],
        'Trade history' : ['Trade history', 'Bytes historik'],
        'Forgot your password?' : ['Forgot your password?', 'Glömt ditt lösenord?'],
        'New to OpenTrade?' : ['New to Provigen?', 'Ny till Provigen?'],
        'Sign up now!' : ['Sign up now!', 'Skapa konto nu!'],
        'OpenTrade - Open Source Cryptocurrency Exchange' : ['Provigen - Cryptocurrency Exchange', 'Provigen - Cryptocurrency Exchange']
    }
};
