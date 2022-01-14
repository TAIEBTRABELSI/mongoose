exports.updateuser = async (req, res) => {
    const { _id } = req.params;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id },
        { $set: { ...req.body } }
      );

      res.status(200).json({ msg: "User updated successfully", updatedUser });
    } catch (error) {
      console.log("update User failed", error);
      res.status(400).json({ msg: "Update User failed" });
    }
  };