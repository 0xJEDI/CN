//ACT 7

// Work Var
let placeOfWork = "Manchester";

// Town Var
let townOfHome = "Saford";

// Time Var
let timeClosestHour = 9;

switch(timeClosestHour){
    case 7:
    // If the Time(timeClosetHour) is Equal to 7 then print outcome
        console.log("Im at home!")
        break
    case 8:
    // If the Time(timeClosetHour) is Equal to 8 then print outcome
        console.log("Im Commuting!")
        break
    case 9:
    // If the Time(timeClosetHour) is Equal to 9 then print outcome
        console.log("Im at Work!")
        break
    default:
    // If the Time(timeClosetHour) is not Equal to 7/8/9 then you have freedom!!
        console.log("Freedom!")
}