console.clear()

const coffeeShop = {
    branch: "JED'S COFFE SHOP",
    drinks: {
        coffee: 1.20,
        latte: 2.20,
        cappuccino: 3.30
    },
    food: {
        hamSandwich: 1.00,
        barmSauage: 1.20,
        barmBacon: 1.10
    },
    
    // ACT 5
    drinksOrdered: function(drinks) {
        let orderString = "Your order is: ";
        let total = 0;

        for (let i = 0; i < drinks.length; i++) {
            if (this.drinks.hasOwnProperty(drinks[i])) {
                orderString += `${drinks[i]} ($${this.drinks[drinks[i]]}), `;
                total += this.drinks[drinks[i]];
            }
        }

        orderString += `\nTotal: $${total.toFixed(2)}\n`;
        return orderString;
    },
    foodOrdered: function(food) {
        let orderString = "Your order is: ";
        let total = 0;

        for (let i = 0; i < food.length; i++) {
            if (this.food.hasOwnProperty(food[i])) {
                orderString += `${food[i]} ($${this.food[food[i]]}), `;
                total += this.food[food[i]];
            }
        }

        orderString += `\nTotal: $${total.toFixed(2)}\n`;
        return orderString;
    }
}

console.log(`Your drinks are >${coffeeShop.drinksOrdered(["latte", "coffee"])}`);
console.log(`Your food is ${coffeeShop.foodOrdered(["hamSandwich", "barmBacon"])}`);