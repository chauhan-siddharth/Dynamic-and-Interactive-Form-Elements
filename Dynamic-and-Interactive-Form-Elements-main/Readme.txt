Use of Local Storage:
The local storage is used to store username and password.

Drop downs and use of session storage:
The first drop down is created using createElement where "myDiv1" is the parent and all the selects and text nodes are its children.
The data is being pulled down from Data.js/Data.Json. All the select nodes are created dynamically.
After adding and appending the options to select1 from Data file a session storage key is generated for each select(select1, select2 and elect3). This is done to keep track of changes in the options.

After creating the options for the first select the options are used to dynamically create select2. Simillarly session storage key is also used to keep track of changes as well as in removing child nodes.

All the selects are made using add() function. The third select will show the final result in an mp4 video format.  
