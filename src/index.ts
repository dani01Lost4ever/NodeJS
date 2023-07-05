import app from './app';
import mongoose from 'mongoose';
import "reflect-metadata";

mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/Cart')
  .then(_ => {
    console.log('Connected to db');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(err => {
    console.error(err);
  })
