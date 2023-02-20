
const express = require("express");
const controller = require("../controller/user.controller")
const router = express.Router()



router.post("/user", controller.createUser)
router.post("/login", controller.loginUser);

router.post("/addProduct", controller.addProduct)

router.get("/getProduct", controller.getProduct)

module.exports = router


/**
 * @swagger
 * tags:
 *   name: Signup
 *   description: Add User for SignUp
 */

/**
 * @swagger
 * /add/user:
 *   post:
 *     summary: Register as user
 *     tags: [Signup user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 */


/**
 * @swagger
 * /add/addProduct:
 *   post:
 *     summary: Add Product
 *     tags: [Add book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookName
 *               - auther
 *               - ISBN
 *               - category
 *               - price
 *               - releasedAt
 *             properties:
 *               bookName:
 *                 type: string
 *               auther:
 *                 type: string
 *               ISBN:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: string
 *               releasedAt:
 *                 type: date
 *             example:
 *               bookName: Two State
 *               auther: chetan Bhagat
 *               ISBN: AQFBK1234PK
 *               category: Nobel
 *               price: 1234
 *               releasedAt: 2009-11-23
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /add/getProduct:
 *   get:
 *     summary: Get Books
 *     tags: [Get book]
 *     parameters:
 *       - in: requestBody
 *         name: bookName
 *         required: true
 *         schema:
 *           type: object
 *         description: book Name
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */