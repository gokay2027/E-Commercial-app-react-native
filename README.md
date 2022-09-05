# E-Commercial-app-react-native
Complete E commercial app used react-native
It was developed in order to have experience about javascript and react-native

Here is the UI's:

![E-Commercial Github](https://user-images.githubusercontent.com/70948122/187611618-51d12d2d-22c6-4b71-9c6d-4a5f7590f817.jpg)

It also has:
- Firebase Auth
- Firebase storage
- Firebase real-time database

In database 5 types of collections hold the data:
- Users (Additional information about users and documents are created as users auth id)
- Popular Products (In home page popular products and on sale products are changed in every week or day so there had to be a collection field for them)
- On sale Products
- Products 
- Orders (Orders are stored in this collection and each document has users id and order information "How many products and which product, price")

(Personal information will be added, I considered that there was no need to add personal and card information it is also important but
the same database operation will be done again and again in code side. Maybe it will be added.)


There are still two little errors in the app:
- First one nested lists
- Second one use-state, useEffect Hooks (In general react hooks should be exercised) 


The design was taken from figma community and transformed into usable app.
