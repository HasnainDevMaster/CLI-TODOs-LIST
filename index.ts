#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Define a Task interface
interface Task {
  id: number;
  description: string;
  type: string;
  completed: boolean;
}

// Initialize an empty array to store tasks
let tasks: Task[] = [];
let taskId = 1;
let condition = true;

// Validate non-empty input
const validateInput = (input: string) =>
  input.trim() !== "" || "Input cannot be empty.";

// Add a new task
const addTask = async () => {
  const { description, type, addMore } = await inquirer.prompt([
    {
      name: "description",
      type: "input",
      message: "Enter the task description:",
      validate: validateInput,
    },
    {
      name: "type",
      type: "list",
      message: "Select the task type:",
      choices: ["Work", "Personal", "Shopping", "Others"],
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add another task?",
      default: false,
    },
  ]);

  tasks.push({ id: taskId++, description, type, completed: false });
  console.log(chalk.green("Task added successfully!"));
  return addMore;
};

// View tasks
const viewTasks = () => {
  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks available."));
  } else {
    console.log(chalk.blue("\nCurrent Tasks:"));
    tasks.forEach((task) => {
      console.log(
        `${chalk.yellow(task.id)}. ${task.description} [${task.type}] - ${
          task.completed ? chalk.green("Completed") : chalk.red("Pending")
        }`
      );
    });
  }
};

// Mark a task as completed
const completeTask = async () => {
  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks available to complete."));
    return;
  }

  const { taskId } = await inquirer.prompt([
    {
      name: "taskId",
      type: "input",
      message: "Enter the task ID to mark as completed:",
      validate: (input) =>
        (!isNaN(Number(input)) &&
          tasks.some((task) => task.id === Number(input))) ||
        "Invalid task ID.",
    },
  ]);

  const task = tasks.find((task) => task.id === Number(taskId));
  if (task) {
    task.completed = true;
    console.log(chalk.green("Task marked as completed!"));
  }
};

// Remove a task
const removeTask = async () => {
  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks available to remove."));
    return;
  }

  const { taskId } = await inquirer.prompt([
    {
      name: "taskId",
      type: "input",
      message: "Enter the task ID to remove:",
      validate: (input) =>
        (!isNaN(Number(input)) &&
          tasks.some((task) => task.id === Number(input))) ||
        "Invalid task ID.",
    },
  ]);

  tasks = tasks.filter((task) => task.id !== Number(taskId));
  console.log(chalk.green("Task removed successfully!"));
};

// Main menu
const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Task",
        "View Tasks",
        "Complete Task",
        "Remove Task",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "Add Task":
      condition = await addTask();
      break;
    case "View Tasks":
      viewTasks();
      break;
    case "Complete Task":
      await completeTask();
      break;
    case "Remove Task":
      await removeTask();
      break;
    case "Exit":
      condition = false;
      break;
  }
};

// Main function
const main = async () => {
  console.log(chalk.blue("Welcome to your TODOs LIst! Let's get productive."));
  while (condition) {
    await mainMenu();
  }
  console.log(chalk.blue("Thank you for using TODOs LIst. Have a great day!"));
};

main();
