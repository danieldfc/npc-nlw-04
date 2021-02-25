import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import app from '../../../src/app';

import createConnection from '../../../src/database';

describe('Surveys - Create', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new survey', async () => {
    return request(app)
      .post('/surveys')
      .send({
        title: 'Title example',
        description: 'Description example',
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
      });
  });
});
