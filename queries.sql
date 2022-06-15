-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName
FROM Category as c
join Product as p on p.CategoryId = c.id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT * 
FROM "Order" as o
JOIN Shipper as s on o.ShipVia = s.id
where OrderDate < "2012-08-09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select p.ProductName, o.Quantity
from OrderDetail as o
join Product as p on o.ProductId = p.id
WHERE o.OrderId = 10251
Order by p.ProductName
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id, c.CompanyName, e.LastName
from "Order" as o
join customer as c on o.CustomerId = c.id
join employee as e on o.EmployeeId = e.id