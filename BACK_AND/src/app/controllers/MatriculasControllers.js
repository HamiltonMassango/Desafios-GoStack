import * as yup from 'yup';

import Matricula from '../models/Matriculas';
import Student from '../models/Students';
import Plano from '../models/Planos';

import { startOfHour, parseISO, isBefore, addMonths } from 'date-fns';

class MatriculaControllers {
  async store(req, res) {
    const { start_date, student_id, plan_id } = req.body;

    const schema = yup.object().shape({
      start_date: yup.date().required(),
      student_id: yup.number().required(),
      plan_id: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    // Check is dates
    const hourStart = startOfHour(parseISO(req.body.start_date));
    const plano = await Plano.findByPk(req.body.plan_id);
    if (!plano) {
      return res.status(400).json({ error: ' Plan is not exist ' });
    }
    const end_date = addMonths(hourStart, plano.duration);
    if (isBefore(end_date, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited ' });
    }
    const price = plano.duration * plano.price;

    const matricula = await Matricula.create({
      start_date,
      student_id,
      plan_id,
      price,
      end_date,
    });
    res.json(matricula);
  }
  async index(req, res) {
    const matriculas = await Matricula.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plano,
          attributes: ['id', 'title'],
        },
      ],
    });
    return res.json(matriculas);
  }
}

export default new MatriculaControllers();
