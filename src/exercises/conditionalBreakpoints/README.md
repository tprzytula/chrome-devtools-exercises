# Conditional Breakpoints - Exercise

### Overview
This application gives you a title and description of a random Harry Potter book.

### How
All of the ISBN are stored in an array. Each time button is clicked a request to the google API is made with a random one of them.

### Issue
Sometimes it fails to load the book and crashes even though all of the ISBN are correct

### Hint
Spot the place where the code breaks in the debugger. Instead of setting a normal breakpoint on it try to set a conditional breakpoint. 

To do that find the line and use **right-click** -> **add conditional breakpoint**.

You will see an input where you can paste your condition such as `myVariable.myValue === undefined`