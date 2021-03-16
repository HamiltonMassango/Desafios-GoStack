import Help_Orders from '../models/Help_orders';

class StudentsQuestions {
  store(req, res, next){
    const question = await Help_Orders.create(req.body);
    return res.json(question);
  }
}

export default new StudentsQuestions();