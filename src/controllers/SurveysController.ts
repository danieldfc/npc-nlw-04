import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SurveysRepository from "../repositories/SurveysRepository";

class SurveysController {
  async index(request: Request, response: Response): Promise<Response> {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveysAll = await surveysRepository.find();

    return response.json(surveysAll);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description,
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey);
  }
}

export default SurveysController;
