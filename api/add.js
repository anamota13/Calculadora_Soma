export default function handler(req, res) {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({ error: 'Parâmetros a e b são obrigatórios' });
  }

  const result = parseFloat(a) + parseFloat(b);
  res.status(200).json({ result });
}
