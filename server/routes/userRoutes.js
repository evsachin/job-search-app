// routes/userRoutes.js
router.put("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    user.resumeLink = req.body.resumeLink || user.resumeLink;
    user.location = req.body.location || user.location;
    user.skills = req.body.skills || user.skills;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
