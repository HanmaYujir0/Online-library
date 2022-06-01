const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());
app.use(require("./routes/indexx"));

mongoose.connect('mongodb+srv://Emin1:1221@cluster0.4kuhk6r.mongodb.net/online-library?retryWrites=true&w=majority')
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));

const port = 4500;

app.listen(port, () => {
    console.log('Сервер успешно запущен')
});

