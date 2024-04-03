// register.test.js

// Import necessary modules and functions
const request = require('supertest');
const app = require('../server'); // Assuming your Express app is in app.js
const { RegisterUser,LoginUser } = require('../Controller/AuthController'); // Assuming you have a service to create users

// Mocking RegisterUser function from userService
jest.mock('../Controller/AuthController', () => ({
    RegisterUser: jest.fn(),
}));

describe('Registration API', () => {
    // Test case for successful registration
    test('Should register a new user', async () => {
        // Define mock user data
        const userData = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        };

        // Mocking the RegisterUser function to return a resolved promise
        RegisterUser.mockResolvedValue(userData);

        // Making a POST request to the registration endpoint
        const response = await request(app)
            .post('/api/register')
            .send(userData);

        // Assertions
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(userData);
    });

    // Test case for failed registration due to missing data
    test('Should return an error for incomplete registration data', async () => {
        // Making a POST request to the registration endpoint with incomplete data
        const response = await request(app)
            .post('/api/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
            });

        // Assertions
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Missing required fields');
    });
});
