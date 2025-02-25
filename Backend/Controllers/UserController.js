const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const { profileImage } = req.body;

  try {
    const updatedUser = await prisma.User.update({
      where: { id: parseInt(id) },
      data: {
        profileImage
      }
    });

    res.json({
      success: true,
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        profileImage: updatedUser.profileImage
      }
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Error updating user profile' });
  }
};

module.exports = {
  updateUserProfile
};