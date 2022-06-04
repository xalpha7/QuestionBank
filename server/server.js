const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = process.env.PORT || '5000';
const app = express();


dotenv.config({path: '.env'});

//-----------------middleware----------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));




//----------------routes----------------------

app.get('/', (req,res) => {
    return res.status(200).json({
        status: 'success',
        body: 'This is home[ "/" ] '
    });
});

const userRoute = require("./routes/userRoute");
app.use( "/user", userRoute);


//--------------listen to server---------------

app.listen(PORT, () => console.log('server is running on port: ', PORT));
