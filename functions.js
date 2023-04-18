//You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
//1.Create an array containing the names of all items in the inventory maximum of 10.
//2.Create a separate array with the corresponding stock quantities of each item maximum of 10.
//3.Write a function to add a new item to the inventory, updating both arrays.
//4.Write a function to update the stock quantity of an existing item.
//5.Write a function to calculate the total number of items in the inventory.
//6.Write a function to find the item with the lowest stock quantity.
const items = ["sugar","milk","beans","flour","maize","rice","meat"]
const itemsQuantities=[20,30,40,50,60,70,80]
function addItems(items,itemsQuantities){
	items.push("mango")
	console.log(items)
	itemsQuantities.push(8)
	console.log(itemsQuantities)
  }
  addItems(items,itemsQuantities)

  //4.Write a function to update the stock quantity of an existing item.

//5.Write a function to calculate the total number of items in the inventory.
//6.Write a function to find the item with the lowest stock quantity.


