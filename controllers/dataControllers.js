const Data = require("../models/dataModels");

const getData = (req, res) => {
  Data.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

const postData = (req, res) => {
  let data = new Data({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    message: req.body.message,
  });
  data
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getData,
  postData,
};
