import * as yup from 'yup';

import Matricula from '../models/Matriculas';
import Student from '../models/Students';

class MatriculaControllers {
  async store(req, res) {
    const schema = yup.object().shape({
      start_date: yup.date().required(),
      student_id: yup.number().required(),
      plan_id: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const matricula = await Matricula.create(req.body);
    res.json(matricula);
  }
  async index(req, res) {
    const matriculas = await Matricula.findAll({
      include: {
        model: Student,
      },
    });
    return res.json(matriculas);
  }
}

export default new MatriculaControllers();
