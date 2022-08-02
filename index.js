const express = require('express')
const userRouter = require('./routes/user')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express();
const bodyParser = require('body-parser')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Student API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['index.js'],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

const connectDB = require('./config/db');
const { application } = require('express');
connectDB();

/**
 * @swagger
 *  components:
 *      schemas:
 *         info:
 *              type: object
 *              properties:
 *                  fullName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  universityName:
 *                      type: string
 *                  entranceYear:
 *                      type: string
 *                  graduationYear:
 *                      type: string
 *                  faculty:
 *                      type: string
 *                  speciality:
 *                      type: string
 *                  studyType: 
 *                      type: string
 *                  academicType:
 *                       type: string
 *                  diplomRegistratsionNumber:
 *                       type: string
 *                  givenDate:
 *                       type: string
 *                  academicLevel:
 *                       type: string
 *                  appendixNumber:
 *                       type: string
 *                  password:
 *                       type: string
 * 
 */


/**
 * @swagger
 * /:
 *  get:
 *      summary: This method used get is worked or no 
 *      description: Get student info
 *      responses:
 *           200:
 *               description: To test get method
 */

app.get('/', (req, resp) => {
    resp.send("Hello server")
})
app.use(bodyParser.json());

/**
 * @swagger
 * /user/getAllUser:
 *  get:
 *      summary: Get all student info
 *      description: Get all info
 *      responses:
 *           200:
 *               description: To test get method
 *               content:
 *                   application/json:
 *                        schema:
 *                           type: array
 *                           items:
 *                                $ref: '#components/schemas/info'
 * */

/**
 * @swagger
 * /user/{id}:
 *  get:
 *      summary: Get student info by id
 *      description: Get info
 *      parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: Numeric ID required
 *      responses:
 *           200:
 *               description: To test get method
 *               content:
 *                   application/json:
 *                        schema:
 *                           type: array
 *                           items:
 * */

/**
 * @swagger
 * /user/register:
 *  post:
 *      summary: Regitartion student info
 *      description: Registration
 *      requestBody:
 *           required: true
 *           content:
 *                application/json:
 *                     schema:
 *                        $ref: '#components/schemas/info'
 *      responses:
 *           200:
 *               description: Added Successfully
 * */

/**
 * @swagger
 * /user/{id}:
 *  put:
 *      summary: Get student info by id
 *      description: Get info
 *      parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: Numeric ID required
 *      requestBody:
 *           required: true
 *           content:
 *                application/json:
 *                     schema:
 *                        $ref: '#components/schemas/info'
 *      responses:
 *           200:
 *               description: Added Successfully
 *               content:
 *                application/json:
 *                     schema:
 *                        type: array
 *                        $ref: '#components/schemas/info'
 * */

/**
 * @swagger
 * /user/{id}:
 *  delete:
 *      summary: Delete student info
 *      description: Delete
 *      parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: Numeric ID required
 *      responses:
 *           200:
 *               description: Delete Successfully
 * */
app.use('/user', userRouter);
app.use('/category', require('./routes/category'));
app.use('/api/user/', require('./routes/user'))

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running by ${port}`);
})

