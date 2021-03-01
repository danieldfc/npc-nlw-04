import request from 'supertest';
import { getConnection } from 'typeorm';
import app from '../../../src/app';

import createConnection from '../../../src/database';

describe('Users - Create', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new user', async () => {
    return request(app)
      .post('/users')
      .send({
        name: 'User example',
        email: 'user@example.com',
      })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
      });
  });

  it('should not be able to create a user with same email exists', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'User example',
        email: 'user@example.com',
      });

    return request(app)
      .post('/users')
      .send({
        name: 'User example',
        email: 'user@example.com',
      })
      .then(res => {
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
          message: 'User already exists'
        })
      });
  });
});
