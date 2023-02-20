const dbConnection = require("../config/database.config");
const httpStatus = require("http-status")
const jwt = require("jsonwebtoken");
const { config } = require("../config/database.config");

const createUser = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const emailExist = `select email from signup`
    if (emailExist == email) {
        console.log(emailExist == email)
        return res.status(httpStatus.BAD_REQUEST).send({ message: "email already exist" })
    } else {
        const sql = `insert into signup(name,email,password) values('${name}','${email}','${password}')`
        dbConnection.query(sql, (err, results) => {
            if (err) {
                return res.status(httpStatus.BAD_REQUEST).send({ message: JSON.stringify(err) })
            }
            return res.send(results)
        })
    }

}

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const data = `select * from signup where signup.email=${JSON.stringify(email)} and signup.password=${JSON.stringify(password)}`;
    dbConnection.query(data, async (err, result) => {
        if (err) {
            return res.status(httpStatus.BAD_REQUEST).send({ message: JSON.stringify(err) })
        }
        if (result.length == 0) {
            return res.status(httpStatus.BAD_REQUEST).send({ message: "enter correct email and password" })
        }
        await delete result[0].password
        const token = await jwt.sign({
            UserId: result[0].id,

        }, process.env.API_SECRETE_KEY, { expiresIn: 60 * 60 })
        res.header(process.env.API_TOKEN, token);
        return res.status(200).send({ status: true, message: `User login successfull`, data: { result, token } });
    })

}

const addProduct = async (req, res) => {
    const bookName = req.body.bookName
    const auther = req.body.auther
    const ISBN = req.body.ISBN
    const category = req.body.category
    const price = req.body.price
    const releasedAt = req.body.releasedAt

    const sql = `insert into book(bookName,auther,ISBN,category,price,releasedAt) values
                       ('${bookName}','${auther}','${ISBN}','${category}','${price}','${releasedAt}')`
    dbConnection.query(sql, (err, results) => {
        if (err) {
            return res.status(httpStatus.BAD_REQUEST).send({ message: JSON.stringify(err) })
        }
        return res.send(results)
    })
}

const getProduct = async (req, res) => {
    const bookName = req.body.bookName
    const data = `select *  from book where book.bookName=${JSON.stringify(bookName)}`
    dbConnection.query(data, (err, results) => {
        if (err) {
            return res.status(httpStatus.NOT_FOUND).send({ message: JSON.stringify(err) })
        }
        console.log(results[0])
        return res.send(results)
    })
}

module.exports = {
    createUser,
    loginUser,
    addProduct,
    getProduct
}