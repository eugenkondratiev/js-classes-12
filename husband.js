let salary = 1500;
const friends = ['Igor', 'Oleg', 'Nik', 'Ed', 'Alex'];
let isAbstinent = true;

class Husband {
     getSalary(){
        return salary > 1000 ? 1000 : salary;
    }

    whoIsWithYouNow() {
        const volonteers =   Math.floor(Math.random() * (friends.length - 2));
        return friends.slice(volonteers,volonteers + 3).toString();
    }

    areYouAbstinent(){
       return isAbstinent ? "Yes, sure" : "not really, but a little bit"; 
    }
}

module.exports.Husband = new Husband();
