# lab02-csv2json
NodeJs Lab02 - Converting xls source to json


# Welcome to the lab02-csv2json wiki!

This is my solution to Module 1 Assignment Lab: CSV to JSON Converter. 

Task is to write a Node script to convert CSV into JSON, using an xls file. 

It has the following structure in which the first line has the field names and the rest of the lines have the data:

id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address
1,Ario,Noteyoung,anoteyoung0@nhs.uk,Male,99.5.160.227,509-86-9654,5602256742685208,179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB,0227 Kropf Court
2,Minni,Endon,mendon1@netvibes.com,Female,213.62.229.103,765-11-9543,67613037902735554,135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1,90 Sutteridge Way
...

The goal is to write a node script that will convert the customer-data.csv file into a JSON file. 

The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values. 

The JSON file must have an array with 1000 items. Output the JSON file in the same directory and name the file customer-data.json.

It could be do by using a created function or using an npm module as csvjson

Besides it must responde the following:

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

I choosed cvsjson package module, just for a few little things, my knowledge of NodeJs is almost zero, so package modules are tested algorithms that someone created to solve this kind of troubles before. Npm brings a lot of modules like this that i will use sometimes in future code so i must start to practice.

Looking at documentation on this package module, i choosed the using stream option because it seems more complete, again its the simplest way, it gives the chance to convert csv to object like task assigment asks but it has more options to implement,it lets us convert result to array, ColumnArray or Schema too.

The only one difficult was that i would like to use error controls but i dont know how implements it, so i just print comments in console.

2. How did you test your project to verify that it works?

First, I just run node init -y to create a project, that i named csv2json

Then i install csvjson module using 'npm -i csvjson -e'

And then created the lab02.js script using notepad

Finally, run 'node lab02' from prompt

Thats it!

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time

Ill appreciatte to bring a control loop to better handle

P.D.

It was my first time using github, it was a lil difficult to know what to do, so i'll appreciate suggestions if anything was omitted
