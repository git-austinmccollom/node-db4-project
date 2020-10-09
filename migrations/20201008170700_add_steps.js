exports.up = function (knex) {
  return knex.schema.createTable("steps", (tbl) => {
    tbl.increments();
    tbl.string("step_name");
    tbl.integer("step_number");
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("steps");
};
