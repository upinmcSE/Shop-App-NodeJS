import { Sequelize } from "sequelize"
import db from "../models"

export async function getProducts(req, res) {
    const products = await db.Product.findAll()
    res.status(200).json({
        message: "Lay danh sach san pham thanh cong",
        data: products
    })
}

export async function getProductById(req, res) {
    const {id} = req.params
    const product = await db.Product.findByPk(id)
    if(!product){
        return res.status(400).json({
            message: "San pham khong tim thay"
        })
    }

    res.status(200).json({
        message: "Lay thong tin san pham thanh cong",
        data: product
    })
}

export async function insertProduct(req, res) {
    const product = await db.Product.create(req.body);
    return res.status(201).json({
        message: "Thêm mới san pham thành công",
        data: product
    });
}

export async function updateProduct(req, res) {
    res.status(200).json({
        message: "Sua san pham thanh cong"
    })
}

export async function deleteProduct(req, res) {
    res.status(200).json({
        message: "Xoa san pham thanh cong"
    })
}