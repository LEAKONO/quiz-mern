const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const protect = require('../middlewares/authMiddleware');

router.post('/', protect, quizController.createQuiz);
router.get('/', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuizById);
router.put('/:id', protect, quizController.updateQuiz);
router.delete('/:id', protect, quizController.deleteQuiz);

router.post('/:id/submit', quizController.submitQuiz);

module.exports = router;
