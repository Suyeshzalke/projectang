export const generalConfig = {
pattern: {
    'ALPHANUMERICANDSPECIALCHAR':/^[A-Z]*$/,
    'NAME': /^[a-zA-Z]+([',.-][a-zA-Z]+)*$/,
    'ADDRESS': /^[a-zA-Z0-9\s,'-]*$/,
    'ALPHANUMERIC': /^[a-zA-Z0-9_ ]*$/,
    'NUMERIC': /^[0-9]*$/,
    "CITY": /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
    "EMAIL": /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "POSTAL_CODE": /^[0-9]{5}-[0-9]{4}$|^[0-9]{5}$|^[A-Z][0-9][A-Z][0-9] [A-Z][0-9][A-Z][0-9]$/,
    "PHONE_NO": /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$/,
    "MOB_NO": /^(?!(\d)\1+$)\d{3}[-\s]?\d{3}[-\s]?\d{4}\s?$/,
    "PASSWORD": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/,
    "STRONGPASSWORD": /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/,
    "SUB_DOMAIN": /^[/a-z/A-Z][a-zA-Z0-9-]*[^/-/./0-9]$/,
    "PHONE_NO_MASK": ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    "USERNAME": /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,14}[a-zA-Z0-9]$/,
 
    "NAMEMAXLENGTH": 20,
    "NAMEMINLENGTH": 3,
    "MOBILEMAX": 10,
    "MOBILEMIN": 10,
    "CURRENCY":/^(?![0,.]+$)(?:0|[1-9]\d{0,2}(?:,\d{3})*|[1-9]\d*)(?:\.\d{1,2})?$/
},

patternMessages: {
    minLength: "Minimum required length is ",
    maxLength: "Maximum required length is ",
    numeric: "Please enter numeric values only.",
    alphabets: "Please enter alphabets only.",
    alphNumeric: "Please enter alph numeric values only.",
    noSpecialCharacter: "Special characters not allowed.",
    strongPassword: "Passsword must be combination of Number, Capital, Small, Special character.",
    validEmail: "Please enter valid email address.",
},
}