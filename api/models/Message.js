/**
 * Messages.js
 *
 * @description :: an message that write by an owner
 */

module.exports = {

  attributes: {
    message: {
      type: 'string',
      required: true
    },
    username: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      required: true
    },
    owner: {
      model: 'rooms'
    }
  }
};