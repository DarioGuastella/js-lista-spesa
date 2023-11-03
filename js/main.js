const shoppingList = ["latte", "uova", "pane", "burro", "farina", "spezie profumate" ];

const list = document.getElementById("list");

let item = 0;
while (item < shoppingList.length) {
    const newItem = document.createElement("li");
    newItem.innerHTML = shoppingList[item] ;
    list.append(newItem);
    item++;
}