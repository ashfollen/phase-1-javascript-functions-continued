// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//function mondayWork(activity = "go to the office") {
//    return `This Monday, I will ${activity}.`
//}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

//function wrapAdjective(param = "*") {
//    return function(adj = "special") {
//        return `You are ${param}${adj}${param}!`
//    }
//}

function wrapAdjective(flair = "*") {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective('%')('a dedicated programmer')