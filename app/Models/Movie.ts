import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Gender from './Gender'
import Studio from './Studio'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public year: string

  @column()
  public duration: string

  @column()
  public description: string

  @column()
  public poster_path: string

  @column()
  public genderId: number

  @column()
  public studioId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Gender)
  public gender: BelongsTo<typeof Gender>

  @belongsTo(() => Studio)
  public studio: BelongsTo<typeof Studio>
}
