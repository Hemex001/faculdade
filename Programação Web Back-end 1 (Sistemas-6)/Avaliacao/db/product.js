const { prisma } = require("./prisma");

const findProducts = async (userId) => {
    return await prisma.product.findMany({
        where: {
            User: {
                id: userId,
            },
        },
    });
}

const saveProduct = async (name, price, userId) => {
    return await prisma.product.create({
        data: {
            name,
            price,
            User: {
                connect: {
                    id: userId,
                },
            },
        },
    });
};

module.exports = {
    findProducts,
    saveProduct,
};