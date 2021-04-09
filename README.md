## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.





Planning:


##HTML:

    - create login page
        - add form tag
            - add label(s)
            - add 2ea input(s) 
                - class
                - name

        - add button (adventure on!)



##Map Page:

    - create map.js file
        - import quests from data.js 
        
    - create index.html file
        - pull quest.js file in HTML



##Quest Page:

    - create quest.js file
        - import findByID function from utils
        - import functions from local-storage-utils
        - import quests from data.js 

    - create index.html file
        - pull quest.js file in HTML
    


##Eventlistener:

    - get submit button to work in the form 
        - pull 'form' element from HTML using querySelector
        - pull 'setUser' function from local-storage.utils.js
        - create 'addEventListener'
        - on click, direct user to Map page


        
##Functions:

    utils.js
    - findByid (TDD)

    local-storage.utils.js 
    - getUser (TDD)
    - setUser (TDD)
    - updateUserGivenChoice (TDD)

    
