import request from 'supertest';
import app from '../../../src/app';

import createConnection from '../../../src/database';

describe('Surveys - Index', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
    await connection.query('DELETE FROM surveys');
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
