const express = 'express';
const app = express();
const PORT = 3030;
const path = 'path';

/* configuraciomes */

app.use(express.static(path.join(__dirname, 'public')));

/* rutas */
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));


app.listen(PORT, console.log('Server running in http://localhost:' + PORT));