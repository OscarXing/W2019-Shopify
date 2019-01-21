# W2019-Shopify
Shopify Coding Problem

# API
Practice API for Shopify's Developer Coding Problem


# Installation 
After cloning into any file, take note of the directory where it's cloned and open commandline/terminal. 

In your terminal navigate to the directory, you will want to run npm install, to get the exact module versions that I used, in case there is an error with different ones.

After that you will want to run npm start folder. If all goes well, it will say "Hello There, We are live at port: 8000". Then open http://localhost:8000

# Querying with Mongo in commandline. 

Open a new terminal window,and paste in "mongo ds147681.mlab.com:47681/shopify -u TestUser -p TestUser123" (Without the double quotes) to connect to the mLab cloud database where the collection is being hosted. (If this doesn't work, navigate in terminal to where your mongodb.exe is and try again.)

When typed into the command line, the following queries will display the documents

| Collection| Command | 
| ------------- | ------------- | 
| Shops | db.shops.find({}) | 
 
# Postman Documentation:

https://documenter.getpostman.com/view/5390843/RzteTD16

# Example Code:
You can see each of these commands in action by simply pasting the following into your a new terminal window.

To get a book: curl --location --request GET "localhost:8000/products/read/:id" 
The associated id of the desired book should go where id is. 

Example: curl --location --request GET "localhost:8000/products/read/5c450a17fb6fc02d2eefc7b1" 

To delete a book: curl --location --request DELETE "localhost:8000/products/delete/:id" \
  --header "Content-Type: application/x-www-form-urlencoded"

Example: curl --location --request DELETE "localhost:8000/products/delete/5c45345cfb6fc02d2eefd51e" \
  --header "Content-Type: application/x-www-form-urlencoded"

To create a book: curl --location --request POST "localhost:8000/products/create" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=1&price=1&inventory_count=1"
Example: curl --location --request POST "localhost:8000/products/create" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=:title&price=:price&inventory_count=:inventory_count"
 
To update a book: 
 curl --location --request PUT "localhost:8000/products/update/5c453a38b779565a1d5175d6" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=:title&price=:price&inventory_count=:inventory_count"
  
Example:  curl --location --request PUT "localhost:8000/products/update/5c453a38b779565a1d5175d6" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=yeet&price=1&inventory_count=5"
  
To Buy a book: curl --location --request GET "localhost:8000/products/buy/:id" \
  --data ""

Example: 
curl --location --request GET "localhost:8000/products/buy/5c452bc7fb6fc02d2eefd234" \
  --data ""





# Thanks for reading
