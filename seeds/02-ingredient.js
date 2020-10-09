
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_name: 'Cup of Jasmine Rice'},
        {ingredient_name: 'Can of Black Beans'},
        {ingredient_name: 'Can of Garbanzo Beans'},
        {ingredient_name: 'Pepper'},
        {ingredient_name: 'Onion'},
        {ingredient_name: 'Fajita Seasoning Packet'},
        {ingredient_name: 'Tablespoon of Cholula'},
        {ingredient_name: 'Can of Coconut Milk'},
        {ingredient_name: 'Tablespoon of Curry Paste'},
        {ingredient_name: 'Tablespoon of Curry Powder'},
        {ingredient_name: 'Tablespoon of Ginger'},
        {ingredient_name: 'Tablespoon of Garlic'},
        {ingredient_name: 'Cup Spinach'},
        {ingredient_name: 'Teaspoon of Salt'},
        {ingredient_name: 'Can of Crushed Tomatoes'}
      ]);
    });
};
