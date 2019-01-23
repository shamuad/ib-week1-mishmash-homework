const giveItBackLater = (value, callback) => {
    setTimeout(() => callback(value), 0)
  }
  
  const promiseToGiveItBackLater = value =>
    new Promise((resolve, reject) => {
      giveItBackLater(value, resolve)
    })
  
  const addSomePromises = promise =>
    promise
      .then(val => val + val)
      .catch(val => val + val + val)
  
  module.exports = {
    giveItBackLater,
    promiseToGiveItBackLater,
    addSomePromises
  }