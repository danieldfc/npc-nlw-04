import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';

class AnswerController {
  async show(request: Request, response: Response): Promise<Response> {
    const { value } = request.params;
    const { u } = request.query;

    const surveyUserRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveyUserRepository.findOne({ id: String(u) });
    if (!surveyUser) {
      return response.status(400).json({ error: 'Survey does not exist' });
    }

    surveyUser.value = Number(value);

    await surveyUserRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export default AnswerController;
