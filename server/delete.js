const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'Transcript',
    'postgres',
    '1234',{
        dialect: 'postgres',
    })
const port = 3000
sequelize
    .authenticate()
    .then(() => console.log('Connected.'))
    .catch((err) => console.error('Connection error: ', err))

module.exports = { conn, port };

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    });
//опр модель
const Fonlet = sequelize.define('fonlet', {
// attributes
    letters: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {});
app.post('/fonlet', async (req, res) => {
    try {
        const newFonlet = new Fonlet(req.body)
        await newFonlet.save()
        res.json({ user: newFonlet }) // Returns the new user that is created in the database
    } catch(error) {
        console.error(error)
    }
})
//синх с бд
sequelize.sync().then(()=>{
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
}).catch(err=>console.log(err));
app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findAll({
                where: {
                    id: userId
                }
            }
        )
        res.json({ user })
    } catch(error) {
        console.error(error)
    }
})


const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true,}))