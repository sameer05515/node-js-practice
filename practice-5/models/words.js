const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Word {
  constructor(word, partOfSpeeches, description, id) {
    this.word = word;
    this.partOfSpeeches = partOfSpeeches;
    this.description = description;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('words')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('words').insertOne(this);
    }
    return dbOp
      .then(result => {
        //console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('words')
      .find()
      .toArray()
      .then(products => {
        //console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('words')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        //console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection('words')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Word;
