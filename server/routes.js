import express from 'express';
import path from 'path';

const router = express.Router();

router.get('*', (request, response) => {
  const bundled = path.join(__dirname, '..', 'dist', 'index.html');
  response.sendFile(bundled);
});

export default router;
