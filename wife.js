const honey = require('./husband').Husband;
const doubleLog = require('./file-log').doubleLog;

const msgAskForMoney = "What`s yout salary, honey? ";
const msgAskIfDrunk = "Are you abstinent, honey? ";
const msgAskForFrends = "Who`s with you, honey? ";
const LR = true;


doubleLog(msgAskForMoney);
doubleLog(honey.getSalary(), LR);

doubleLog(msgAskIfDrunk);
doubleLog(honey.areYouAbstinent(), LR);

doubleLog(msgAskForFrends );
doubleLog(honey.whoIsWithYouNow(), LR);





