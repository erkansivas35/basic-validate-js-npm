module.exports = {
  textControl: function (textString) {
    if (textString == '') {
      return false;
    }
    else {
      return true;
    }
  },
  emailControl: function (stringEmail) {
    let selectItem = stringEmail
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(selectItem);
  },
  ibanControl: function (stringIban) {
    let selectItem = stringIban
    let regex = /^[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z0-9]{4}\s?[0-9]{4}\s?[0-9]{3}([a-zA-Z0-9]\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,3})?$/gm;
    return regex.test(selectItem);
  },
  patternControl: function (outString, pattern) {
    let regex = pattern;
    return regex.test(outString);
  },
  dateControl: function (stringDate) {
    //Format: DD/MM/YYYY
    var temp = stringDate.split('/');
    var d = new Date(temp[2] + '/' + temp[1] + '/' + temp[0]);
    return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]));
  }
};