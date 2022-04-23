module.exports = ({ env }) => ({
    email: {
        provider: "console",
    },
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
            jwtSecret: "esp",
        },
    },
});