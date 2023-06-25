Exercise: Design a database for an online bookstore.

- The bookstore sells books, and each book can belong to multiple genres.
- Customers can place orders, and each order can contain multiple books.
- Each customer can have multiple addresses.
- An address can be associated with multiple customers.
- Each book has multiple authors
- An author can write multiple books.

Identify the tables with the entities.

1. Book table

   - bookID (primary key)
   - title
   - ISBN
   - price
   - publicationYear
   - other book related attributes

2. Genre table

   - genreID (primary key)
   - genreName

3. Book_Genre table

   - bookID (foreign key referencing book table)
   - genreID (foreign key referencing genre table)

4. Author table

   - authorID (primary key)
   - authorName
   - other author related attributes

5. Book_Author table

   - bookID (foreign key referencing book table)
   - authorID (foreign key referencing author table)

6. Customer table

   - customerID (primary key)
   - customerName
   - customerEmail
   - customerPhone
   - other customer related attributes

7. Address table

   - addressID (primary key)
   - customerID (foreign key referencing customer table)
   - addressLine1
   - addressLine2
   - city
   - state
   - postalCode
   - country

8. Order table

   - orderID (primary key)
   - customerID (foreign key referencing customer table)
   - orderDate
   - other order related attributes

9. Order_Book table

   - orderID (foreign key referencing order table)
   - bookID (foreign key referencing book table)
   - quantity

<!-- 10. Media table
    - mediaID
    - movieID
    - mediaType (Example values: Video/Image)
    - mediaURL -->

- each book have one author
- an author can write many books

1. Book

   - bookID
   - title
   - ISBN
   - price
   - publicationYear
   - authorID (foreign key referencing author table)

   | bookID | title          | ISBN | price | publicationYear | authorID |
   | ------ | -------------- | ---- | ----- | --------------- | -------- |
   | 1      | datastructures | XXX  | 2350  | 2022            | 1        |
   | 2      | javascript     | YYY  | 4236  | 2023            | 1        |

2. Author
   - authorID
   - authorName
