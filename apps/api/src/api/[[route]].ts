import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    message: 'Hello from Spindle Notes API Routes!'
  });
});

// 他のAPIルート
app.get('/projects', (c) => {
  return c.json({
    projects: []
  });
});

export default app;