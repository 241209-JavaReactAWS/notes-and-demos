"use strict";
/*
Enums are an enumerated list of Constants, these are useful when you have a series of values that need to be
reused over and over and they are constant

Number Enums
String Enums
*/
var Roles;
(function (Roles) {
    // This is a numeric enum, basically each constant here is associated with a number, starting at 0 and 
    // incrementing unless otherwise stated
    Roles[Roles["Customer"] = 1] = "Customer";
    Roles[Roles["Teller"] = 2] = "Teller";
    Roles[Roles["Admin"] = 3] = "Admin"; //  3
})(Roles || (Roles = {}));
function printRoleNumber(role) {
    console.log(role);
}
// Testing the function
printRoleNumber(Roles.Customer); // 1
printRoleNumber(Roles.Admin); // 3
// When might this be useful?
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND"; // 404
})(StatusCodes || (StatusCodes = {}));
function isErrorStatusCode(code) {
    if (code >= 400) {
        return true;
    }
    else {
        return false;
    }
}
console.log(`Is this an error code? ${isErrorStatusCode(StatusCodes.PAYMENT_REQUIRED)}`);
// String enums
// These are used for strings that are constant and repeated frequently enough to warrant a whole enum
var Directions;
(function (Directions) {
    Directions["North"] = "UP";
    Directions["South"] = "DOWN";
    Directions["East"] = "RIGHT";
    Directions["West"] = "LEFT";
})(Directions || (Directions = {}));
