const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//////////////////////////////////// Helper function to validate email format
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Client Registration with validation
const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password ) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    if (!validateEmail(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({ error: "Password must be at least 8 characters long" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await prisma.User.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Generate token
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Return user data (excluding password) and token
        const userData = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        };

        res.status(201).json({
            token,
            user: userData
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating User' });
    }
};

//////////////////////////////////////

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    // Validate email format
    if (!validateEmail(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    try {
        // Find the user by email
        const user = await prisma.User.findUnique({
            where: { email },
        });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Return the token and user information (excluding the password)
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        res.status(200).json({
            token,
            user: userData
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: 'Error during login' });
    }
};

module.exports = {
    register,
    login
}