import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    const result = await User.create(data)

    return result
  }

  public async authenticate({ request, auth }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    const result = auth.attempt(data.email, data.password)

    return result
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()

    return response.status(204)
  }
}
