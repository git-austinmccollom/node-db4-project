
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_name: 'Jasmine Rice'},
        {ingredient_name: 'Black Beans'},
        {ingredient_name: 'Garbanzo Beans'},
        {ingredient_name: 'Peppers'},
        {ingredient_name: 'Onions'},
        {ingredient_name: 'Fajita Seasoning Packet'},
        {ingredient_name: 'Cholula'},
        {ingredient_name: 'Coconut Milk'},
        {ingredient_name: 'Curry Paste'},
        {ingredient_name: 'Curry Powder'},
        {ingredient_name: 'Ginger'},
        {ingredient_name: 'Garlic'},
        {ingredient_name: 'Spinach'},
        {ingredient_name: 'Salt'},
        {ingredient_name: 'Crushed Tomatoes'}
      ]);
    });
};
