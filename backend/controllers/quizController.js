const Quiz = require('../models/Quiz');

// Create a quiz
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({
      title: req.body.title,
      questions: req.body.questions,
      user: req.user._id
    });
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('user', 'username email');
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('user', 'username');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update quiz
exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    // Optional: Only allow quiz owner to update
    if (quiz.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this quiz' });
    }

    quiz.title = req.body.title || quiz.title;
    quiz.questions = req.body.questions || quiz.questions;

    const updatedQuiz = await quiz.save();
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    if (quiz.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this quiz' });
    }

    await quiz.remove();
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const userAnswers = req.body.answers; // Expect { "0": "A", "1": "B", ... }
    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        score++;
      }
    });

    res.status(200).json({ score, total: quiz.questions.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
