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
These sample curl commands can be put into the terminal, or alternatively just enter the websites into your browser: 

localhost:8000/delete/5c453112fb6fc02d2eefd462 or 
curl --request DELETE \ --url http://<i></i>localhost:8000/shops/delete/5c453112fb6fc02d2eefd462



# Thanks for reading
