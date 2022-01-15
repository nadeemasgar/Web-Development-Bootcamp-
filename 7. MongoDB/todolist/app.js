//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const e = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    
    if(foundItems.length === 0 ) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(" Suuccessfully saved default items to DB.");
        }
      });
      res.redirect("/");
    }
    else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }

  })

});

app.get("/:customListName", function(req, res) {
  const customListName = req.params.customListName;
    
  List.findOne({name : customListName}, function(err, foundList) {
    if(!err) {
      if(!foundList) {
        // Create a new list item
        const list = new List({
          name : customListName,
          items : defaultItems
        });

        list.save();
        res.redirect("/" + customListName);
      }
      else {
        // Show an existing list
        
        res.render("list", {listTitle : foundList.name, newListItems: foundList.items});
      }
    }
  })

})


/* app.post("/", function (req, res) {
  const itemName = req.body.newItem;

    const item = new Item({
     name: itemName
  })

  item.save();

  res.redirect("/");
  
}); */

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  console.log(listName, typeof(listName));
  const xyz = "Today";

  const item = new Item({
     name: itemName
  });

  if(listName.localeCompare("Today" == 0)) {
    item.save();
    res.redirect("/");
  }
  else {
    List.findOne({name : listName}, function(err, foundList) {
     
      // if(!err) {
        foundList.items.push(item);
        foundList.save();
        console.log("Bye",foundList);
        res.redirect("/", listName);
      // }
     
    })
  }
  
});

app.post("/delete", function (req, res) {
  const checkedItemID = req.body.checkbox;
  console.log(checkedItemID);

  Item.findOneAndDelete(checkedItemID , function(err){
    if(err) {
      console.log( err);
    } 
    else {
      console.log("Deleted successfully");
      res.redirect("/");
    }
  });
})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
