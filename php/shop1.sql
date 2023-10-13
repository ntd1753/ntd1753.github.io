CREATE TABLE ProductCategories (
    CategoryID INT  PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    ProductID INT  PRIMARY KEY,
    ProductName VARCHAR(255),
    Price DECIMAL(10, 2) ,
    Product_description TEXT,
    quantity INT,
    CategoryID INT,
    FOREIGN KEY (CategoryID) REFERENCES ProductCategories(CategoryID)
);




CREATE TABLE Users (
    UserID INT  PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(150) NOT NULL,
    user_password VARCHAR(250) NOT NULL,
    Address TEXT
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    OrderTime TIMESTAMP,
    OrderStatus VARCHAR(50),
    Order_note TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE Carts (
    CartID INT PRIMARY KEY,
    UserID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);





CREATE TABLE OrderDetails (
    OrderDetailID INT  PRIMARY KEY,
    ProductID INT,
    OrderID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);
