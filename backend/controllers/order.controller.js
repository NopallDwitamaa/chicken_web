const { order_detail, order_list } = require('../models/index');
const Op = require('sequelize').Op;

exports.findAllOrder = async (req, res) => {
    try {
        let orders = await order_list.findAll({
            include: [{
                model: order_detail,
                as: 'orders' // Sesuaikan dengan alias yang diberikan pada relasi antara order_list dan order_detail
            }]
        });
        return res.json({
            success: true,
            data: orders,
            message: 'Order list has been retrieved along with order details'
        });
    } catch (error) {
        console.error('Error fetching orders : ', error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.addOrder = async (req, res) => {
    try {
        const { customer_name, table_number, order_date, order_detail } = req.body;

        const listOrder = await order_list.create({
            customer_name,
            table_number,
            order_date
        });

        for (const item of order_detail) {
            const { food_id, price, quantity } = item;
            await order_detail.create({
                orderID: listOrder.orderID,
                foodID: food_id,
                price,
                quantity
            });
        }

        res.status(201).json({
            data: {
                id: listOrder.orderID,
                customer_name,
                table_number,
                order_date
            },
            message: "Order Created Success",
        });
    } catch (error) {
        console.error("Error Add Order: ", error);
        res.status(500).json({ error: "Server Error" });
    }
};

