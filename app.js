import express from 'express';
import cors from 'cors';
import path from 'path';
import url from 'url';

//set __filename and __dirname
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

app.use(cors());

//statics
app.use(express.static(path.join(__dirname, 'public')));

// send front app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
