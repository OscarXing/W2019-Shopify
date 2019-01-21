// Here we will post the actions for products, including the basic CRUD apps and others

var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {


  // Creates a new product in the database
  app.post("/products/create", (req, res) => {
    const products = {
      title: req.body.title,
      price: req.body.price,
      inventory_count: req.body.inventory_count
    };
    db.collection("products").insert(products, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });


  // Allows us to access and read a product form the database, requires the 
  // products associated id
  app.get("/products/read/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("products").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(item);
        console.log("Success, the item you were looking for is:");
        console.log('\n');
        console.log(item);
        console.log('\n');
      }
    });
  });
  
  // Put Either creates a new product, or updates an existing one 

  app.put("/products/update/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const products = {
      title: req.body.title,
      price: req.body.price,
      inventory_count: req.body.inventory_count
    };
    db.collection("products").update(details, products, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(products);
        console.log(products);
      }
    });
  });

  // Using our DELETE function, we can input an id and the associated element
  // will be removed.

  app.delete("/products/delete/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("products").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occured" });
        console.log("Error");
      } else {
        res.send("Product" + " " + id + "deleted");
        console.log("Product" + " " + id + "deleted");
      }
    });
  });

  // Here we query all products, and only products with inventory_count > 0
  // will be returned 

  app.get("/products/all", (req, res) => {
    db.collection("products").find({inventory_count : { $gt: 1}}).toArray(function(err, result){
      console.log("The books in the store are");
      console.log(result);
      res.send(result);
    }
    )})
  
  // Here is the purchase function, it takes in a product id and then lowers 
  // the inventory_count of the product by 1.

  app.get("/products/buy/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("products").findOne(details, (err, item) => {
      
    // We store the fields from our initial query in these variables
    x = item.title;
    y = item.price;
    z = item.inventory_count - 1;
    
    // We now define a new product thats the same as the old one, except 
    // the inventory_count field has been reduced by 1

    const products = {
      title: x,
      price: y,
      inventory_count: z
    }
    db.collection("products").update(details, products, (err));
    console.log(item);
    res.send(item);
  });
  });

};
