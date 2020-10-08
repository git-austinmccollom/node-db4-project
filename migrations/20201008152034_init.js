const { table } = require("../database/connection");

exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name").notNullable();
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name").notNullable();
    })
    .createTable("recipe_ingredient", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe");
};
