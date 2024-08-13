exports.getProfile = (req, res) => {
    res.status(200).json({
      email: 'user@example.com',
      username: 'testuser',
    });
  };
  