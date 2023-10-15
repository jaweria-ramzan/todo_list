import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What Do You Want To Add In Your Todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You Want To Add More Todo?",
            default: false
        }
    ]);
    const { todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log(chalk.yellow("Kindly Add Valid Input"));
    }
    ;
}
;
if (todos.length > 0) {
    console.log("Your Todo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log(chalk.red("No Todos Found"));
}
;
