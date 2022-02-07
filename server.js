// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");
// Use MongoDB
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectId;
// The database variable
var database;
// The coffees collection
var COFFEES_COLLECTION = "coffees";
var ORDERS_COLLECTION = "orders";

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Local database URI.
const LOCAL_DATABASE = "mongodb://localhost:27017/app";
// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(
  process.env.MONGODB_URI || LOCAL_DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (error, client) {
    console.log("GET");
    // Check if there are any problems with the connection to MongoDB database.
    if (error) {
      console.log(error);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = client.db();
    console.log("Database connection done.");

    // Initialize the app.
    var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);
/*  "/api/coffees"
 *   POST: creates a new coffees
 */

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.post("/api/orders", function (req, res) {
  var order = req.body;
  database.collection(ORDERS_COLLECTION).insertOne(order, function (err, doc) {
    if (err) {
      manageError(res, err.message, "Failed to get orders.");
    } else {
      res.status(200).json(doc);
    }
  });
});
app.get("/api/orders", function (req, res) {
  database
    .collection(ORDERS_COLLECTION)
    .find({})
    .toArray(function (error, doc) {
      if (error) {
        manageError(res, err.message, "Failed to get order.");
      } else {
        res.status(201).json(doc);
      }
    });
});

/*  "/api/coffees"
 *  GET: finds all coffees
 */
app.get("/api/coffees", function (req, res) {
  database
    .collection(COFFEES_COLLECTION)
    .find({})
    .toArray(function (error, doc) {
      if (error) {
        manageError(res, err.message, "Failed to get contacts.");
      } else {
        res.status(201).json(doc);
      }
    });
});

/*  "/api/coffees"
 *   POST: creates a new coffees
 */
app.post("/api/coffees", function (req, res) {
  var product = req.body;

  database
    .collection(COFFEES_COLLECTION)
    .insertOne(product, function (err, doc) {
      if (err) {
        manageError(res, err.message, "Failed to create new product.");
      } else {
        res.status(201).json(doc);
      }
    });
});

/*  "/api/coffees/:id"
 *   DELETE: deletes coffees by id
 */
app.delete("/api/coffees/:id", function (req, res) {
  if (req.params.id.length > 24 || req.params.id.length < 24) {
    manageError(
      res,
      "Invalid product id",
      "ID must be a single String of 12 bytes or a string of 24 hex characters.",
      400
    );
  } else {
    database
      .collection(COFFEES_COLLECTION)
      .deleteOne({ _id: new ObjectID(req.params.id) }, function (err, result) {
        if (err) {
          manageError(res, err.message, "Failed to delete product.");
        } else {
          res.status(200).json(req.params.id);
        }
      });
  }
});

// Errors handler.
function manageError(res, reason, message, code) {
  console.log("Error...: " + reason);
  res.status(code || 500).json({ error: message });
}
