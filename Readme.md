# CLI TODOs List Application 📝

Welcome to the TODOs List Application!

This simple CLI TODOs List application allows users to manage their tasks efficiently. Users can add tasks, view the current list of tasks, mark tasks as completed, and remove tasks. The application is written in TypeScript with Node.js and uses the `inquirer` and `chalk` packages for user input and enhanced CLI appearance.

## Features: 🌟

- **Task Management**: Add, view, complete, and remove tasks. 📋
- **Task Types**: Categorize tasks into Work, Personal, Shopping, and Others. 🗂️
- **Interactive CLI**: User-friendly command-line interface with enhanced appearance using `chalk`. 🎨

## Prerequisites: 🛠️

Before running the application, ensure you have the following installed:

- **Node.js**: To run the application, you’ll need Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org).
- **TypeScript**: The application is written in TypeScript, so you’ll need to install TypeScript. Use the following command in your terminal:

  ```
  npm install -g typescript
  ```

## Installation: 🚀

Clone this repository to your local directory:

```
git clone https://github.com/YourUsername/CLI-TODOs-List.git
```

Navigate to the directory where the files are cloned:

```
cd CLI-TODOs-List
```

Install the dependencies by running the following command in your terminal:

```
npm install
```

## Running the Application: ▶️

Run the application using the command:

```
tsc && node index.js
```

## Example: 📝

```plaintext
Welcome to your TODOs List! Let's get productive.

? What would you like to do? (Use arrow keys)
> Add Task
  View Tasks
  Complete Task
  Remove Task
  Exit

? Enter the task description: Finish TypeScript project
? Select the task type: Work
Task added successfully!

? What would you like to do? View Tasks

Current Tasks:
1. Finish TypeScript project [Work] - Pending

? What would you like to do? Complete Task
? Enter the task ID to mark as completed: 1
Task marked as completed!

? What would you like to do? Exit
Thank you for using TODOs List. Have a great day!
```

## Conclusion: 🎈

This TODOs List application demonstrates a basic task management system with a user-friendly interface, utilizing the `inquirer` and `chalk` packages to create an interactive and visually appealing experience. The application provides a range of features, including adding tasks, viewing tasks, marking tasks as completed, and removing tasks.