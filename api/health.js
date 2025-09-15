module.exports = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'HexTech Contact API is running',
    timestamp: new Date().toISOString()
  });
};
