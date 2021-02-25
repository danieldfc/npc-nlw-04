import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import app from '../../../src/app';

import createConnection from '../../../src/database';

describe('Surveys - Index', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });
  it('should be able to list a surveys', async () => {
    await request(app)
      .post('/surveys')
      .send({
        title: 'Title example',
        description: 'Description example',
      });

    return request(app)
      .get('/surveys')
      .then(res => {
        expect(res.body.length).toBe(1);
      });
  });
});
