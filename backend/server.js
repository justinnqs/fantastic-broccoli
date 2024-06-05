const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL pool setup
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle POST requests to /api
app.post('/api', async (req, res) => {
    const { operationName, variables } = req.body;

    if (!operationName || !variables) {
        return res.status(400).json({ error: 'Invalid request format' });
    }

    try {
        // Example operation handling
        switch (operationName) {
            case 'FetchUserData':
                await fetchUserData(variables, res);
                break;
            // Add more cases for different operations as needed
            default:
                res.status(400).json({ error: 'Unknown operation' });
        }
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Example function to handle 'FetchUserData' operation
async function fetchUserData(variables, res) {
    const { userId } = variables;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        res.json({ data: result.rows[0] });
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ error: 'Error fetching user data' });
    }
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});