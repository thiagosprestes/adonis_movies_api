import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

export default class PostersController {
  public async show({ params, response }: HttpContextContract) {
    return response.download(Application.tmpPath(`/uploads/1608899126664_973877.jpg`))
  }
}
