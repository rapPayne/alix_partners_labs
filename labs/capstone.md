# Capstone Project

You've created the customer-facing app where films can be chosen, seats reserved, and orders placed. Now let's create the back-of-house app for our wait staff.

When a waiter connects to the site on their tablet, they'll see the unauthenticated home page.
![home_unauthenticated](../assets/capstone/home_unauthenticated.png)

The log in page is typical:
![login](../assets/capstone/login.png)
Logging in as a waiter will take them to the home page but now they're authenticated.

![home_authenticated](../assets/capstone/home_authenticated.png)

Waiters need to self-select their area, which is usually a theater.
![area](../assets/capstone/area.png)

The orders page shows all orders. The orders for their area are at the top but they're all shown in case this waiter has a free minute and wants to lend a hand.
![orders](../assets/capstone/orders.png)

## Order Statuses
Orders can be in one of several statuses.

| Status | Description |
|--------|-----|
|new|Placed but not yet prepared|
|readyForGuest|Ready for the guest to pick up|
|pickedUp|Picked up by the waiter. Being delivered to the table|
|delivered|Delivered to the table|
|complete|Order completed|
|problem|Order has an issue|

Choosing any order shows the details. The order page is the same for all statuses except for the action buttons shown.

## A new order:
![order_new](../assets/capstone/order_new.png)
## A readyForGuest order:
![order_readyForGuest](../assets/capstone/order_readyForGuest.png)
## A pickedUp order:
![order_pickedUp](../assets/capstone/order_pickedUp.png)
## A delivered order:
![order_delivered](../assets/capstone/order_delivered.png)
## A complete order:
![order_complete](../assets/capstone/order_complete.png)

