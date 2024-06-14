const { prisma } = require("./prisma");

const findByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
};

const register = async (name, email, password) => {
    return await prisma.user.create({
        data:{
            name,
            email,
            password,
        },
    });
};

module.exports = {
    register,
    findByEmail,
};