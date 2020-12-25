import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Genders extends BaseSchema {
  protected tableName = 'genders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('gender').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
