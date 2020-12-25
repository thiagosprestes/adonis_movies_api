import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const result = await User.all()

    return result
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params

    const findedUser = await User.find(id)

    if (!findedUser) {
      return response.status(404).json({ message: 'User not found' })
    }

    return findedUser
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { id } = params

    const findedUser = await User.find(id)

    if (!findedUser) {
      return response.status(404).json({ message: 'User not found' })
    }

    const data = request.all()

    await User.query().where({ id }).update({
      email: data.email,
      password: data.password,
    })

    return User.find(id)
  }

  public async delete({ response, params }: HttpContextContract) {
    const { id } = params

    const findedUser = await User.find(id)

    if (!findedUser) {
      return response.status(404).json({ message: 'User not found' })
    }

    await User.query().where({ id }).delete()

    return response.status(204)
  }
}
