import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Gender from 'App/Models/Gender'

export default class GendersController {
  public async store({ request }: HttpContextContract) {
    const data = request.only(['gender'])

    const result = await Gender.create(data)

    return result
  }

  public async index() {
    return await Gender.all()
  }

  public async show({ params, response }: HttpContextContract) {
    const findGender = await Gender.find(params.id)

    if (!findGender) {
      return response.status(404).json({ message: 'Gender not found' })
    }

    return await Gender.find(params.id)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(['gender'])

    const findGender = await Gender.find(params.id)

    if (!findGender) {
      return response.status(404).json({ message: 'Gender not found' })
    }

    await Gender.query().where({ id: params.id }).update(data)

    return Gender.find(params.id)
  }

  public async delete({ params, response }: HttpContextContract) {
    const findGender = await Gender.find(params.id)

    if (!findGender) {
      return response.status(404).json({ message: 'Gender not found' })
    }

    await Gender.query().where({ id: params.id }).delete()

    return response.status(204)
  }
}
