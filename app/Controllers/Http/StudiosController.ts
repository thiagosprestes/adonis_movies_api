import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Studio from 'App/Models/Studio'

export default class StudiosController {
  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'country'])

    const result = await Studio.create(data)

    return result
  }

  public async index() {
    return await Studio.all()
  }

  public async show({ params, response }: HttpContextContract) {
    const findStudio = await Studio.find(params.id)

    if (!findStudio) {
      return response.status(404).json({ message: 'Studio not found' })
    }

    return await Studio.find(params.id)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(['name', 'country'])

    const findStudio = await Studio.find(params.id)

    if (!findStudio) {
      return response.status(404).json({ message: 'Studio not found' })
    }

    await Studio.query().where({ id: params.id }).update(data)

    return Studio.find(params.id)
  }

  public async delete({ params, response }: HttpContextContract) {
    const findStudio = await Studio.find(params.id)

    if (!findStudio) {
      return response.status(404).json({ message: 'Studio not found' })
    }

    await Studio.query().where({ id: params.id }).delete()

    return response.status(204)
  }
}
