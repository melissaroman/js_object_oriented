// Initialize storeList
function storeList(){}

// Add draggable function to store list items
// Helper: clone allows droppable in other list
storeList.addDraggable = function(listItem) {
  $(listItem).draggable({helper: "clone"})
}

// Initialize myGroceryList
function myGroceryList(){}

// Add droppable function to my grocery list
// event, ui accepts the draggable item
myGroceryList.addDroppable = function(listItem){
  $(listItem).droppable({
    drop: function(event, ui){
    ui.draggable.clone().appendTo(listItem)
    myGroceryList.updateTotal(listItem)
    }
  });
}

// Update total $$ function
myGroceryList.updateTotal = function(listItem) {
  var prices = $('#grocery_list').find('.item_price')
  var total = 0
  for (i = 0; i < prices.length; i++) {
    total = total + parseFloat(prices[i].textContent)
  }
  total = total.toFixed(2)
  myGroceryList.updateView(total, '#total_cost')
}

// Update total view on list
myGroceryList.updateView = function(total, updateList){
  $(updateList).html(total)
}

// Call functions
storeList.addDraggable('.item')
myGroceryList.addDroppable('#grocery_list')