const saturdayFun = (funActivity = "roller-skate") =>
    `This Saturday, I want to ${funActivity}!`;

const mondayWork = (task = "go to the office") =>
    `This Monday, I will ${task}.`;

const wrapAdjective =
    (value = "*") =>
    (msg = "special") =>
        `You are ${value}${msg}${value}!`;
