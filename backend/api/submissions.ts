import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const submissions = [
      { username: 'patient1', timestamp: Date.now(), recommendation: 'Low Risk' },
      { username: 'patient2', timestamp: Date.now() - 60000, recommendation: 'High Risk' },
    ];
    res.status(200).json(submissions);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}