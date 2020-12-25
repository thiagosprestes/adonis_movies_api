import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async store({ request }: HttpContextContract) {
    const data = request.all()

    const poster = request.file('poster')

    if (poster) {
      await poster?.move(Application.tmpPath('uploads'), {
        name: `${new Date().getTime()}_${poster.clientName}`,
      })

      const result = await Movie.create({
        name: data.name,
        year: data.year,
        duration: data.duration,
        description: data.description,
        genderId: data.gender_id,
        studioId: data.studio_id,
        poster_path: poster?.fileName,
      })

      return await Movie.query().where({ id: result.id }).preload('gender').preload('studio')
    } else {
      const result = await Movie.create({
        name: data.name,
        year: data.year,
        duration: data.duration,
        description: data.description,
        genderId: data.gender_id,
        studioId: data.studio_id,
      })

      return await Movie.query().where({ id: result.id }).preload('gender').preload('studio')
    }
  }

  public async index({ request }: HttpContextContract) {
    return await Movie.query()
      .preload('gender')
      .preload('studio')
      .orderBy('id', request.input('order'))
  }

  public async show({ params, response }: HttpContextContract) {
    const findMovie = await Movie.find(params.id)

    if (!findMovie) {
      return response.status(404).json({ message: 'Movie not found' })
    }

    return await Movie.query().preload('gender').preload('studio').where({ id: params.id })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const findMovie = await Movie.find(params.id)

    if (!findMovie) {
      return response.status(404).json({ message: 'Movie not found' })
    }

    const data = request.all()

    const poster = request.file('poster')

    if (poster) {
      await poster?.move(Application.tmpPath('uploads'), {
        name: `${new Date().getTime()}_${poster.clientName}`,
      })

      const result = await Movie.create({
        name: data.name,
        year: data.year,
        duration: data.duration,
        description: data.description,
        genderId: data.gender_id,
        studioId: data.studio_id,
        poster_path: `${new Date().getTime()}_${poster?.clientName}`,
      })

      return await Movie.query().where({ id: result.id }).preload('gender').preload('studio')
    } else {
      const result = await Movie.create({
        name: data.name,
        year: data.year,
        duration: data.duration,
        description: data.description,
        genderId: data.gender_id,
        studioId: data.studio_id,
      })

      return await Movie.query().where({ id: result.id }).preload('gender').preload('studio')
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    const findMovie = await Movie.find(params.id)

    if (!findMovie) {
      return response.status(404).json({ message: 'Movie not found' })
    }

    await Movie.query().where({ id: params.id }).delete()

    return response.status(204)
  }
}
