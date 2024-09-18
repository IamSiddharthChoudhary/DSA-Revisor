# dsa-revisor

`dsa-revisor` is an interactive Node.js command-line tool designed to help you track and revise your Data Structures and Algorithms (DSA) practice. You can add questions you’ve worked on, along with their topic and description, and set revision intervals based on the last time you solved them.

## Features

- **Track questions**: Record questions you've solved, including name, topic, and description.
- **Revision prompts**: Automatically generate a list of questions to revise based on your previous work and a minimum time interval.
- **Simple command-line interface**: Easy-to-use prompts powered by `inquirer`.

## Installation

To install the `dsa-revisor` package, use the following command:

```bash
npm i dsa-revisor
```
## Usage
**1. Add Data**
To add a DSA question to your revision list, run the following command:

```bash
npm run addData
```
You'll be prompted to enter:

- The number of questions you've solved today.
- The name of each question.
- The topic and description of each question.
- The questions will be saved in a JSON file for future revision tracking.

**2. Generate Revision Topics**
To review questions, based on the minimum day difference from the last time you solved them, run:

```bash
npm run revise 
```
You'll be prompted to enter:

- The number of questions you want to revise.
- The minimum number of days since the last revision.
- The tool will generate a list of questions for you to revise, based on the given conditions.

## File Structure
- **app.mjs**: This script allows you to add new questions to your DSA practice tracker.
- **revise.mjs**: This script helps you generate a list of revision topics based on the minimum time interval since you last reviewed them.
- **dsa.json**: This file stores all your questions, topics, and descriptions.
## Example
```bash
npm run addData
```
### Sample output:
```bash
DSA Revision
Number of questions you did today: 3
Question Name: Two Sum
Topic: Arrays
Description: Find two numbers in the array that add up to a target value.
```
```bash
npm run revise
```
### Sample output:
```bash
DSA Revision
Questions to be revised: 2
Minimum day diff: 7
```
## Dependencies
- figlet - For rendering ASCII art text.
- gradient-string - For colorful text output in the terminal.
- inquirer - For interactive command-line prompts.
