# W2019-Shopify
Shopify Coding Problem

# API
Practice API for Shopify's Developer Coding Problem


# Installation 
After cloning into any file, there will be another folder in there labeled API. 

In your commandline navigate to the API directory, you will want to run npm install, to get the exact module versions that I used, in case there is an error with different ones.

After that you will want to run npm start in the api folder. If all goes well, it will say "Hello There, We are live at port: 8000". Then open http://localhost:8000

# Querying with Mongo in commandline. 

Open a new terminal,and paste in "mongo ds147681.mlab.com:47681/shopify -u TestUser -p TestUser123" (Without the double quotes) to connect to the mLab database where the collection is being hosted. (If this doesn't work, navigate in terminal to where your mongodb.exe is and try again.)

When typed into the command line, the following queries will display the documents

| Collection| Command | 
| ------------- | ------------- | 
| Shops | db.shops.find({}) | 
 


# Example Code:
You can see each of these commands in action by simply pasting the following into your browser 

To get a book: localhost:8000/products/read/5c453112fb6fc02d2eefd462 

To delete a book: localhost:8000/products/delete/5c45345cfb6fc02d2eefd51e



# Thanks for reading
