import Planos from '../models/Planos';
import * as yup from 'yup';

class PlanosControllers {
  async index(req, res) {
    const planos = await Planos.findAll({
      attributes: ['title', 'duration', 'price'],
    });

    return res.json(planos);
  }
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      duration: yup.number().required(),
      price: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const plano = await Planos.create(req.body);
    return res.json(plano);
  }
  async update(req, res) {
    console.log(req.params.id);
  }
}

export default new PlanosControllers();
