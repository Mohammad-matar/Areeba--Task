const Customer = require("../Models/Customers");
const validations = require("../validations/phone-number");

class controller {
  //getAll
  getAll(req, res, next) {
    Customer.find((err, response) => {
      if (err) return next(err);
      res.status(200).json({ data: response });
    });
  }
  //get By ID
  getById(req, res, next) {
    let { id } = req.params;
    Customer.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).json({ sucess: true, response });
    });
  }

  // Add a new customers
  async post(req, res, next) {
    let body = req.body;
    try {
      const response = await validations.validateNumber(body.phone_number);
      if (response.status === 200) {
        let doc = new Customer(body);
        doc.save((err, response) => {
          if (err) return next(err);
          if (response === null) {
            res
              .status(404)
              .send({ success: false, message: "User is not found" });
          }
          res
            .status(200)
            .send({ success: true, message: "Get User Successfully", response });
        });
      } else if (response.status === 400) {
        res
          .status(400)
          .send({ success: false, message: "phone number is invalid" });
      }
    }

    catch (err) {
      res
        .status(401)
        .send({ success: false, error: err });
    }
  }

  async validate(req, res, next) {
    let { number } = req.params;
    const response = await validations.validateNumber(number);
    res.send(response);
  }

  //Update a customers info
  put(req, res, next) {
    let body = req.body;
    let { id } = req.params;
    Customer.updateOne({ _id: id }, { $set: body }, (err, response) => {
      if (err) return next(err);
      res.send(response);
    });
  }

  // Delete a cusotmers
  delete(req, res, next) {
    let { id } = req.params;
    Customer.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).json({ success: true, response });
    });
  }
}

const Controller = new controller();
module.exports = Controller;
