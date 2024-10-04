import express from 'express'
import * as ProductController from './controllers/ProductController'
import * as CategoryController from './controllers/CategoryController'
import * as BrandController from './controllers/BrandController'
import * as OrderController from './controllers/OrderController'
import asyncHandler from './middlewares/asyncHandler'
import validate from "./middlewares/validate"
import InsertProductRequest from './dtos/requests/InsertProductRequest'

const router = express.Router() 

export function AppRoute(app){

    // Product Routes
    router.get('/products', asyncHandler(ProductController.getProducts));
    router.get('/product/:id', asyncHandler(ProductController.getProductById));
    router.post('/product', 
        validate(InsertProductRequest), 
        asyncHandler(ProductController.insertProduct));
    router.put('/product/:id', asyncHandler(ProductController.updateProduct));
    router.delete('/product/:id', asyncHandler(ProductController.deleteProduct));

    // Category Routes
    router.get('/categories', asyncHandler(CategoryController.getCategories));
    router.get('/category/:id', asyncHandler(CategoryController.getCategoryById));
    router.post('/category', asyncHandler(CategoryController.insertCategory));
    router.put('/category/:id', asyncHandler(CategoryController.updateCategory));
    router.delete('/category/:id', asyncHandler(CategoryController.deleteCategory));

    // Brand Routes
    router.get('/brands', asyncHandler(BrandController.getBrands));
    router.get('/brand/:id', asyncHandler(BrandController.getBrandById));
    router.post('/brand', asyncHandler(BrandController.insertBrand));
    router.put('/brand/:id', asyncHandler(BrandController.updateBrand));
    router.delete('/brand/:id', asyncHandler(BrandController.deleteBrand));

    // Order Routes
    router.get('/orders', asyncHandler(OrderController.getOrders));
    router.get('/order/:id', asyncHandler(OrderController.getOrderById));
    router.post('/order', asyncHandler(OrderController.insertOrder));
    router.put('/order/:id', asyncHandler(OrderController.updateOrder));
    router.delete('/order/:id', asyncHandler(OrderController.deleteOrder));


    app.use('/api/',router)
}