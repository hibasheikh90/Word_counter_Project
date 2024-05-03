#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome To Hiba Sheikh Word Counter Project")

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To count The Word."
    }
])

const words = answer.sentence.trim().split(" ")
console.log(words);
console.log(`Your Sentence Count Word is ${words.length}`);