import { Sequelize, where } from "sequelize"
import db from "../models"

const {Op} = Sequelize

export async function getProducts(req, res) {
    // const products = await db.Product.findAll() not good must paging

    // search and paging
    const {search ='', page =1} = req.query
    const pageSize = 5
    const offset = (page - 1) * pageSize // trang dau 5 sp thi trang 2 se bat dau tu sp 6

    let whereCase = {}
    if(search.trim() != ''){
        whereCase = { // đoạn code này sẽ biên dịch thành công lệnh where trong sql
            [Op.or]: [
                {name: { [Op.like]: `%${search}%`}},
                {description: { [Op.like]: `%${search}%`}},
                {specification: { [Op.like]: `%${search}%`}} 
            ]
        }
    }
    const [products, totalProducts] = await Promise.all([
        db.Product.findAll({
            where: whereCase,
            limit: pageSize,
            offset: offset
        }),
        db.Product.count({
            where: whereCase
        })
    ])


    return res.status(200).json({
        message: "Lay danh sach san pham thanh cong",
        data: products,
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalProducts / pageSize),
        totalProducts
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