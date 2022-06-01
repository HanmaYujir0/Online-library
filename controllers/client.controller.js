  const Client = require("../models/Client.model");
  const Book = require("../models/Book.model");

  module.exports.clientController = {
    postClient: (req, res) => {
      Client.create({
        name: req.body.name,
      })
        .then(() => {
          res.json("Пользователь добавлен");
        })
        .catch((err) => {
          res.json("Ошибка при добавлении пользователя");
        });
    },
    deleteClient: (req, res) => {
      Client.findByIdAndDelete(req.params.id)
        .then(() => {
          res.json("Пользователь удален");
        })
        .catch((err) => {
          res.json("Ошибка при удалении пользователя ");
        });
    },
    getClientById: (req, res) => {
      Client.findById(req.params.id)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json("Ошибка при выводе пользователя");
        });
    },
    getClient: (req, res) => {
      Client.find()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json("Ошибка при выводе пользователей");
        });
    },
    patchClient: (req, res) => {
      Client.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        rent: req.body.rent,
        isBlocked: req.body.isBlocked,
      })
        .then(() => {
          res.json("Пользователь изменен");
        })
        .catch((err) => {
          res.json("Ошибка при изменении пользователя");
        });
    },
    bookRent: async (req, res) => {
      try {
        const client = await Client.findById(req.params.id);
        const book = await Book.findById(req.params.bookId);

        if (client.isBlocked === false) {
          if (client.rent.length < 3) {
            if (book.client === null) {
              await Client.findByIdAndUpdate(req.params.id, {
                $push: { rent: req.body.rent },
              });
              await Book.findByIdAndUpdate(req.body.bookId,    {
                client: req.params.id,
              });
              res.json("книга успешно арендована");
            } else {
              res.json("Книга уже арендована");
            }
          } else {
            res.json("Достигнут лимит");
          }
        } else {
          res.json("Клиент заблокирован");
        }
      } catch (error) {
        res.json(error.message);
      }
    },
    returnBook: async (req, res) => {
      try {
        await Client.findByIdAndUpdate(req.params.id, {
          $pull: { rent: req.params.id },
        });
        await Book.findByIdAndUpdate(req.params.bookId, {
          client: 0,
          rent: false,
        });
        res.json("Книга возвращена");
      } catch (error) {
        res.json(err);
      }
    },
    bookBlock: async (req, res) => {
      try {
        await Client.findByIdAndUpdate(req.params.id, {
          rent: [],
          isBlocked: true,
        });
        await Book.findByIdAndUpdate(req.body.rent, {
          client: null,
        });
        res.json("Пользователь заблокирован");
      } catch (err) {
        res.json(err);
      }
    },
  };
