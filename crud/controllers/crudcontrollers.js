const crudModalSchema = require("../modals/crudmodal");

// create the data
const createUser = async (req, res) => {
  const { name, designation, description } = req.body;
  const requiredFields = { name, designation, description };
  try {
    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          type: "error",
          message: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } field is missing`,
        });
      }
    }

    await crudModalSchema.create({
      name,
      designation,
      description,
    });

    res.status(201).json({
      message: "data created successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get the data

const getAllUsersData = async (req, res) => {
  const usersData = await crudModalSchema.find({});
  try {
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update the data

const updateUserData = async (req, res) => {
  const { _id, name, designation, description } = req.body;

  try {
    if (!_id) {
      return res.status(400).json({
        type: "error",
        message: "user id field is missing",
      });
    }

    const updatedData = {};

    if (name) {
      updatedData.name = name;
    }

    if (designation) {
      updatedData.designation = designation;
    }

    if (description) {
      updatedData.description = description;
    }

    const editUserData = await crudModalSchema.findByIdAndUpdate(
      _id,
      updatedData,
      {
        new: true,
      }
    );

    if (!editUserData) {
      return res.status(404).json({
        type: "error",
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "user data updated successfully",
      data: editUserData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete the data

const deleteUserData = async (req, res) => {
  const { _id } = req.body;
  try {
    if (!_id) {
      return res.status(404).json({
        type: "error",
        message: "details not found with these id",
      });
    }

    const deleteUserData = await crudModalSchema.findByIdAndDelete({
      _id,
    });

    if (!deleteUserData) {
      return res.status(400).json({
        type: "error",
        message: "ID is not found",
      });
    }

    res.status(200).json({
      message: "user deleted successfully",
      data: deleteUserData._id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsersData,
  updateUserData,
  deleteUserData,
};
