exports.up = function(knex) {
  return knex.schema.createTable('food_category', tbl => {
    tbl.increments();

    tbl
      .integer('food_id')
      .notNullable()
      .unique()
      .references('id')
      .inTable('food')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('category_id')
      .notNullable()
      .unique()
      .references('id')
      .inTable('category')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food_categorty');
};
