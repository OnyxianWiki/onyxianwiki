---
id: variables
title: Variables
sidebar_label: Variables
---

## What are they?
Parameters are pieces of information. They are values that can be used by actions or anything that takes a parameter.

Variables are anything capable of yielding a value.<br/>
○ A variable can vary its value, depending on when it is called, for example, a variable may be the current player number.<br/>
○ Each variable type determines how their value is obtained, for example, a variable type may be 'sum'.<br/>
○ A variable can have parameters that are variables, for example, it could be the sum of the balance of the 3 players with the most money.<br/>

## How are they created?
To create a variable simply add one inside variables.yml, and it will become available to all the plugins that use the Onyxian Core when you restart the server.

### Variables are structured like this:
```yaml
VariableName:
  variable type: type
  Each parameter name: the value of that parameter
```

## This is a simple example:
```yaml
onyxiansoul balance: #The name of the variable
  variable type: Placeholder value #The type of the variable
  placeholder: %balance% #The parameter the val
  player to evaluate: "OnyxianSoul"
```