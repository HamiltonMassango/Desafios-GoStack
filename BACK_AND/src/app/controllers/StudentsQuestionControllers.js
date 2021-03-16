import Help_Orders from '../models/Help_orders';

class StudentsQuestions {
  async store(req, res, next) {
    const { question } = req.body;
    const { id: student_id } = req.body;

    const questions = await Help_Orders.create({
      student_id,
      question,
    });
    return res.json(questions);
  }
}

export default new StudentsQuestions();
