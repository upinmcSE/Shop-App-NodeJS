import { Sequelize } from "sequelize";
import db from "../models";

export async function getCategories(req, res) {
    res.status(200).json({
        message: "Lấy danh sách danh mục thành công"
    });
}

export async function getCategoryById(req, res) {
    res.status(200).json({
        message: "Lấy thông tin danh mục thành công"
    });
}

export async function insertCategory(req, res) {
    try{
        const category = await db.Category.create(req.body)

        res.status(201).json({
            message: "Them moi thanh cong",
            data: category
        })
    }catch (error){
        console.log("Error during category insertion:", error)

        res.status(500).json({
            message: "Loi khi them moi",
            error: error.message
        })
        
    }
}

export async function updateCategory(req, res) {
    res.status(200).json({
        message: "Sửa danh mục thành công"
    });
}

export async function deleteCategory(req, res) {
    res.status(200).json({
        message: "Xóa danh mục thành công"
    });
}
