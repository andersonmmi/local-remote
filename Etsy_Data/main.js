// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let priceSum = 0;
  let quantityTotal = 0;
  let averagePrice = 0;
  for(i=0;i<data.length;i++){
    priceSum += data[i].price;
    quantityTotal++;
  }
  averagePrice = roundToTwo(priceSum/quantityTotal);
  console.log( "The average price is " + averagePrice );
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let fourteenToEighteen = [];
  for(i=0;i<data.length;i++){
    if(data[i].price >= 14 && data[i].price <= 18){
      fourteenToEighteen.push(data[i].title);
    }
  }
  console.log(fourteenToEighteen.join('\n'));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let currencyGBP = [];
  let priceGBP = [];
  for(i=0;i<data.length;i++){
    if(data[i].currency_code === "GBP"){
      currencyGBP.push(data[i].title);
      priceGBP.push(data[i].price)

    }
  }
  console.log(currencyGBP[0] + " costs " + priceGBP +" pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let madeOfWood = [];
  for(i=0;i<data.length;i++){
    for(j=0;j<data[i].materials.length;j++){
      if(data[i].materials[j] === "wood"){
        madeOfWood.push(data[i].title + " is made of wood.");
      }
    }
  }
  console.log(madeOfWood.join('\n'));
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

function question5 () {
  // Answer:

  for(i=0;i<data.length;i++){
    if(data[i].materials.length >= 8){
      console.log(data[i].title + " has " +data[i].materials.length+ " materials.\n")
      for(j=0;j<data[i].materials.length;j++){
        console.log("- "+data[i].materials[j]+ "\n")
      }
    }
  }
}

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let madeBySeller = [];
    for (i=0;i<data.length;i++){
      if(data[i].who_made === "i_did"){
        madeBySeller.push(data[i].listing_id);
      }
    }
  console.log(madeBySeller.length  + ' items were made by their sellers.');
}
