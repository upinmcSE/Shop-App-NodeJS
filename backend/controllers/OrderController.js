import { Sequelize } from "sequelize";
import db from "../models";

export async function getOrders(req, res) {
    res.status(200).json({
        message: "Lấy danh sách đơn hàng thành công"
    });
}

export async function getOrderById(req, res) {
    res.status(200).json({
        message: "Lấy thông tin đơn hàng thành công"
    });
}

export async function insertOrder(req, res) {
    console.log(req.params);
    res.status(200).json({
        message: "Thêm mới đơn hàng thành công"
    });
}

export async function updateOrder(req, res) {
    res.status(200).json({
        message: "Sửa đơn hàng thành công"
    });
}

export async function deleteOrder(req, res) {
    res.status(200).json({
        message: "Xóa đơn hàng thành công"
    });
}
