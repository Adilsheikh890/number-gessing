#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const rainbowtittle = chalkAnimation.rainbow("let's Start The Game!!!!");
    await sleep();
    rainbowtittle.stop();
}
welcome();
let playerlife = 3;
async function askQuestion() {
    let raindomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        playerlife--;
        console.log(`playerlife left ${playerlife}`);
        var que = await inquirer
            .prompt([
            {
                "type": "number",
                "name": "user_num",
                "message": chalk.rgb(250, 128, 114)("select any between number 1 - 10:"),
            }
        ]);
        if (que.user_num === raindomNumber) {
            console.log(chalk.green(`Congrulation !!! you gess the right number`));
        }
        else if (que.user_num < raindomNumber) {
            console.log(chalk.red(`your number ${que.user_num} is less than guess number.`));
        }
        else if (que.user_num > raindomNumber) {
            console.log(chalk.red(`your number ${que.user_num} is greater than guess number.`));
        }
    } while (playerlife > 0 && raindomNumber !== que.user_num);
    if (playerlife == 0 && raindomNumber !== que.user_num) {
        console.log(chalk.redBright(`GAME OVER!!`));
    }
}
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerlife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                "type": "input",
                "name": "start_Again",
                message: chalk.rgb(250, 188, 119)("Do you want to restart the game? press Y or N:")
            }
        ]);
    } while (restart.start_Again === 'y' || restart.start_Again === 'Y' || restart.start_Again === 'yes');
}
startAgain();
