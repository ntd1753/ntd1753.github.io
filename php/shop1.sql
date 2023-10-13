CREATE TABLE ProductCategories (
    CategoryID INT  PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    ProductID INT  PRIMARY KEY,
    ProductName VARCHAR(255),
    Price DECIMAL(10, 2) ,
    Description TEXT,
    CategoryID INT,
    FOREIGN KEY (CategoryID) REFERENCES ProductCategories(CategoryID)
);
CREATE TABLE UserAddresses (
    AddressID INT AUTO_INCREMENT PRIMARY KEY,
    AddressDetails TEXT
);



CREATE TABLE Users (
    UserID INT  PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(150) NOT NULL,
    user_password VARCHAR(250) NOT NULL,
    AddressID INT,
    FOREIGN KEY (AddressID) REFERENCES UserAddresses(AddressID)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    OrderTime TIMESTAMP,
    OrderStatus VARCHAR(50),
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
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    OrderID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);
