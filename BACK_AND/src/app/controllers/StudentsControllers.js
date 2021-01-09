import Students from '../models/Students';

class studentsController {
  async store(req, res) {
    const studentExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) return res.status(400).json({ error: 'User exist !' });

    const { name, email } = await Students.create(req.body);
    return res.json({ name, email });
  }
}

export default new studentsController();
