
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_name: "slice peppers and onions", step_number: 1, recipe_id: 1},
        {step_name: "cook pepers and onions", step_number: 2, recipe_id: 1},
        {step_name: "boil rice then simmer for 10 minutes", step_number: 3, recipe_id: 1},
        {step_name: "cook beans", step_number: 4, recipe_id: 1},
        {step_name: "mix fajita seasoning with water and pour into pan with vegetables", step_number: 5, recipe_id: 1},
      ]);
    });
};
