const mongoose = require('mongoose'),
      CryptoJS = require("crypto-js");

let gridCardSchema = new mongoose.Schema({
  card: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

gridCardSchema.methods.getDecryptedCard = function() {
  return JSON.parse(CryptoJS.AES.decrypt(this.card, process.env.SECRET || 'secret').toString(CryptoJS.enc.Utf8));
};

gridCardSchema.pre('save', function(next) {
  this.updated_at = new Date();
  if ( this.isNew ) {
    this.card = generateGridCard();
  }
  next();
});

function generateGridCard() {
  let card = {
    a: new Array(5), b: new Array(5), c: new Array(5), d: new Array(5), e: new Array(5), f: new Array(5), g: new Array(5), h: new Array(5), i: new Array(5), j: new Array(5)
    }

  let char = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (key in card) {
    for (let i = 0; i < 5; i++) {
      let char1Index = Math.floor(Math.random() * char.length);
      let char2Index = Math.floor(Math.random() * char.length);

      card[key][i] = char[char1Index] + char[char2Index];
    }
  }

  return CryptoJS.AES.encrypt(JSON.stringify(card), process.env.SECRET || 'secret');
}

mongoose.model('GridCard', gridCardSchema);