/*
Enums are an enumerated list of Constants, these are useful when you have a series of values that need to be 
reused over and over and they are constant

Number Enums
String Enums
*/

enum Roles{
    // This is a numeric enum, basically each constant here is associated with a number, starting at 0 and 
    // incrementing unless otherwise stated
    Customer = 1,
    Teller, // 2
    Admin //  3
}

function printRoleNumber(role: Roles){
    console.log(role)
}

// Testing the function
printRoleNumber(Roles.Customer) // 1
printRoleNumber(Roles.Admin) // 3

// When might this be useful?
enum StatusCodes {
    OK = 200, // 200
    CREATED, // 201
    BAD_REQUEST = 400, //400
    UNAUTHORIZED, //401
    PAYMENT_REQUIRED, //402
    FORBIDDEN, //403
    NOT_FOUND // 404
}

function isErrorStatusCode(code: StatusCodes){
    if (code >= 400){
        return true;
    } else{
        return false;
    }
}

console.log(`Is this an error code? ${isErrorStatusCode(StatusCodes.PAYMENT_REQUIRED)}`)

// String enums
// These are used for strings that are constant and repeated frequently enough to warrant a whole enum

enum Directions {
    North = "UP",
    South = "DOWN",
    East = "RIGHT", 
    West = "LEFT"
}