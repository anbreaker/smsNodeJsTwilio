// Of Express only Router
const {Router} = require('express');
// Route management
const router = Router();

// Import function controllers
const {
  indexController,
  postMessage,
  reciveMessage,
} = require('../controllers/index.controller');

// Of Controllers go to Routes of server
// Main routes
router.get('/', indexController);

// Send an sms
router.post('/send-sms', postMessage);

// Receive an sms
router.post('/sms', reciveMessage);

module.exports = router;
