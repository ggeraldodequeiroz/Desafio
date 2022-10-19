/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("alunos", (table) => {
        table.increments("id").primary();
        table.string("registroAcademico").notNullable().unique();
        table.string("nome").notNullable();        
        table.string("email").notNullable();
        table.string("cpf").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("alunos");
};
