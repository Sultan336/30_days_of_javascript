console.log('Exercises_Level_2!');

// 1. Develop a small script which generate any number of characters random id:
  random_id = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var len = Math.floor(Math.random() * possible.length)
    for (var i = 0; i < len; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
    console.log(random_id());

// 2. Write a script which generates a random hexadecimal number.
    random_hex = function() {
      var text = "";
      var possible = "0123456789abcdef";
      var len = Math.floor(Math.random() * possible.length)
      for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    console.log(random_hex());

// 3. Write a script which generates a random RGB color.
// rgb(420,100,00)
    random_rgb = function() {
        for(var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() * 256);
            if(i == 0) {
                var rgb = "rgb(" + random + ",";
            } else if(i == 1) {
                rgb += random + ",";
            } else {
                rgb += random + ")";
            }
        }
        
        return rgb;
    }
    console.log(random_rgb());

    // 4. Using the countries array, create the following new array.
        // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ]
      countries_capital = [];
      for(var i = 0; i < countries.length; i++){
        countries_capital.push(countries[i].toLocaleUpperCase())
      }
      console.log(countries_capital);

// 5. Using the above countries array, create an array for countries length'.
//  [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
      countries_length = []
      for(var i = 0; i < countries.length; i++){
        countries_length.push(countries[i].length)
      }
      console.log(countries_length)

// 6. Use the countries array to create the following array of arrays:
//    [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
    var array_of_arrays = [];
    for(var i = 0; i < countries.length; i++){
        array_of_arrays.push([countries[i],countries[i].slice(0,3),countries[i].length])
    }
    console.log(array_of_arrays)

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
//  ['Finland','Ireland', 'Iceland']
    var land = [];
    var no_land = [];
    for(var i = 0; i < countries.length; i++){
      if(countries[i].includes('land')){
        land.push(countries[i])
      }
      else {
        no_land.push(countries[i]);
      }
    }
    console.log(land)
    console.log(`All these countries are without land:`)
    console.log(no_land)

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
    var ia = [];
    var no_ia = [];
    for(var i = 0; i < countries.length; i++){
      if(countries[i].endsWith('ia')){
        ia.push(countries[i])
      }
      else {
        no_ia.push(countries[i]);
      }
    }
    console.log(ia)
    console.log(`These are countries ends without ia:`)
    console.log(no_ia)

// 9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
    var max_length = 0;
    var max_length_country = '';
    for(var i = 0; i < countries.length; i++){
      if(countries[i].length > max_length){
        max_length = countries[i].length;
        max_length_country = countries[i];
      }}
    console.log(max_length_country)

// 10. Using the above countries array, find the country containing only 5 characters.
      // ['Japan']
      var five_charac = [];
      for(var i = 0; i < countries.length; i++){
        if(countries[i].length == 5){
          five_charac.push(countries[i])
        }
      }
      console.log(five_charac)