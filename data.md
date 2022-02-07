# Initial Data for the Coffee Shop

Run following comand in the mongosh sheell to add initial coffee dataset:

db.coffees.insert([
   { "id": 1, "name": "Black Americano", "volumes": ["6","12"], "image":"americano.webp","prices": [7.99,8.99] },
   { "id": 2, "name": "Latte Robusta", "volumes": ["8", "12"], image:"robusta.webp", "prices": [6.99,8.99] },
   { "id": 3, "name": "Espresso", "volumes": ["6","8","12"] , image:"espresso.webp", "prices": [6.99, 8.99, 9.99]},
])
