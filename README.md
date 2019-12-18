# Llam-o-rama
## An online store for all your llama needs
#### Link to site
https://llamorama.herokuapp.com/

### Technologies Used 

* HTML/CSS
* Javascript
* React
* PHP
* PostgreSQL
* Apache
* Heroku
* Git & Github
* Slack & Zoom 
* Linux & MacOSX

### The Approach
We initially started with a project idea that was simple and made us laugh. The laughter soon died out. And though it was simple in concept, the implemenation would prove to be difficult.
Our idea was to create a store website as a Single Page Application. The store would sell llamas and llama related items at a steep premium. 
Our MVP would be a CRUD app - an administrator would be able to create, update and delete items, and the page would load all items from the server database.
Additional goals were to allow visitors to add items to a cart and checkout, enable user signup/login, display a banner of hot/on sale items, allow users to filter/sort by category/price/etc., ...

We initally attempted to put both the front-end and the back-end inside of a single github repository, but were tipped off by a classmate to create two separate repos.
So this app utilizes two github repositories and two heroku applications. One for the front-end and the other for the back-end.

Once we figured out the infrastructure, we were able to get through most of the basic CRUD, with the exception of updating items. For some reason we had immense difficutly debugging the update function. In fact, it still is not working.
PHP does not handle false values well. Additionally, in the proccess of debugging the update function, we broke it even more. 

### Unsolved Problems
The update function and handling the true/false-ness of onSale & subscription data keys. For some reason, the data does not go to the front-end as true, it will only come up as false. Even though the data in the database is clearly true.

### Notes 
You did what you could.
