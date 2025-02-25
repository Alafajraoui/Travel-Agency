const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all destinations
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: {
        rating: 'desc'
      }
    });
    res.json(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(500).json({ error: 'Error fetching destinations' });
  }
};

// Get a single destination by ID
const getDestinationById = async (req, res) => {
  const { id } = req.params;
  try {
    const destination = await prisma.destination.findUnique({
      where: { id }
    });
    
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    
    res.json(destination);
  } catch (error) {
    console.error('Error fetching destination:', error);
    res.status(500).json({ error: 'Error fetching destination' });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById
};