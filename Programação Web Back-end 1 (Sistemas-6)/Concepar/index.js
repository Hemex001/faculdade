const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 8080;


app.use(express.json());

const users = [];

// registro
app.post('/v1/register', async (req, res) => {
    const { email, password } = req.body;
    
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).send({ message: 'Usuario ja existe!' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    users.push({ email, password: hashedPassword });
    
    res.status(201).send({ message: 'Registro concluido com sucesso!' });
});

// login
app.post('/v1/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).send({ message: 'Email ou senha invalidos!' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).send({ message: 'Email ou senha invalidos!' });
    }
    
    res.status(200).send({ message: 'Login realizado com sucesso!' });
});

// start servidor
app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});
