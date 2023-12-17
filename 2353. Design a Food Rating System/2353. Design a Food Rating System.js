class PriorityQueue {
  constructor({ comparator = (a, b) => a - b }) {
    this.items = [];
    this.comparator = comparator;
  }

  // Function to add an element with a given priority
  enqueue(element) {
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.comparator(element, this.items[i]) < 0) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(element);
    }
  }

  // Function to remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Function to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Function to get the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Function to print the elements of the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i].element} - ${this.items[i].priority}`;
      if (i !== this.items.length - 1) {
        str += ", ";
      }
    }
    return str;
  }
}

/*
 @param{string}name
 @param{string}cuisine
 @param{number}rating
 */
function FoodData(name, cuisine, rating) {
  this.name = name;
  this.cuisine = cuisine;
  this.rating = rating;
}

class FoodRatings {
  constructor(foods, cuisines, ratings) {
    //Map<string, FoodData>
    this.foodNameToFoodData = new Map();
    this.cuisineNameToHeapifiedFoodData = new Map();

    for (let i = 0; i < foods.length; ++i) {
      let currentFood = new FoodData(foods[i], cuisines[i], ratings[i]);
      this.foodNameToFoodData.set(foods[i], currentFood);
      if (!this.cuisineNameToHeapifiedFoodData.has(cuisines[i])) {
        this.cuisineNameToHeapifiedFoodData.set(
          cuisines[i],
          new PriorityQueue({
            compare: (x, y) =>
              x.rating === y.rating
                ? x.name.localeCompare(y.name)
                : y.rating - x.rating,
          })
        );
      }
      this.cuisineNameToHeapifiedFoodData.get(cuisines[i]).enqueue(currentFood);
    }
  }

  changeRating(food, newRating) {
    let toUpdate = this.foodNameToFoodData.get(food);
    let updated = new FoodData(toUpdate.name, toUpdate.cuisine, newRating);
    this.foodNameToFoodData.set(food, updated);
    // add the duplicated item but with the new rating
    this.cuisineNameToHeapifiedFoodData.get(toUpdate.cuisine).enqueue(updated);
  }

  highestRated(cuisine) {
    let highestRatedFoodForCuisine = "";
    const foodQueue = this.cuisineNameToHeapifiedFoodData.get(cuisine);
    while (true) {
      // get the food with the highest rating for the cuisine
      let food = foodQueue.front();

      // if the rating has been changed, then dequeue to remove the item with old rating and continue

      if (food.rating !== this.foodNameToFoodData.get(food.name).rating) {
        foodQueue.dequeue();
      } else {
        highestRatedFoodForCuisine = food.name;
        break;
      }
    }
    return highestRatedFoodForCuisine;
  }
}
/**
 * Your FoodRatings object will be instantiated and called as such:
 * const obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * const param_2 = obj.highestRated(cuisine)
 */

const foods = ["Pizza", "Burger", "Ramen", "Pasta", "Bibimbap"];
const cuisines = ["Italian", "American", "Japanese", "Italian", "Korean"];
const ratings = [4, 3, 2, 4, 1];
const obj = new FoodRatings(foods, cuisines, ratings);
console.log("🚀 ~ file: 2353. Design a Food Rating System.js:53 ~ obj:", obj);
console.log(
  "🚀 ~ file: 2353. Design a Food Rating System.js:68 ~ obj.highestRated",
  obj.highestRated("Italian")
);

// Note
// Using a Map of Maps is a common pattern for this type of problem so this causes time limit exceeded
// The solution is to use a Map of Sets instead
