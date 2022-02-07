# SmartCoffeeShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Please make sure:
- latest version of `node` and `npm` is installed.
- please make sure mongodb is installed and running in port `27017`
- for running front-end app make sure you sun `npm install` to install dependencies
- for the initial mongodb setup make sure 
    - `app` database is existing in mongodb
    - the required collections `coffees` and `orders` are existing; else run the following command:
        - `db.createCollection( "coffees")`
        - `db.createCollection( "orders")`
    - coffees collection has some initial data
## Launch back-end server[uses port 8080]:
  npm start
## Launch front-end server[uses port 4200]:
  ng serve --proxy-config proxy.config.json

## Test in postman import following collection to postman:
  coffee-shop.postman_collection.json

## Test in get APIs in browser, use the following:
  `http://localhost:8080/api/coffees`
  `http://localhost:8080/api/orders`
