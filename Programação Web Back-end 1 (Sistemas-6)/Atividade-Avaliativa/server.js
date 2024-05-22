// Estas linhas importam os módulos necessários:
const express = require('express'); // express: framework para criar servidores web.
const { PrismaClient } = require('@prisma/client'); // PrismaClient: ORM para interagir com o banco de dados.
const bcrypt = require('bcryptjs'); // bcryptjs: biblioteca para hashing de senhas.
const jwt = require('jsonwebtoken'); // jsonwebtoken: biblioteca para criação e verificação de tokens JWT.
const bodyParser = require('body-parser'); // body-parser: middleware para processar dados JSON.
const { body, validationResult } = require('express-validator'); // express-validator: biblioteca para validação de dados de entrada.

// Aqui, uma instância do Prisma é criada para interagir com o banco de dados e o 
// Express é configurado para usar o middleware bodyParser para processar requisições JSON.
const prisma = new PrismaClient();
const server = express();
server.use(bodyParser.json());

//Define uma chave secreta usada para assinar tokens JWT. Pode ser adicionada ao arquivo .env
const SECRET_KEY = 'HemersonDaCostaLacovic';

// Middleware para autenticação
// Este middleware verifica a presença de um token JWT no cabeçalho Authorization da requisição. 
// Se o token for válido, o usuário é autenticado e a execução continua, caso contrário, 
// uma resposta de erro é enviada.
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Registro de usuário
// Rota para registro de usuário. 
// Valida o formato do email e o tamanho da senha, faz o hash da senha e salva o usuário no banco de dados.
server.post(
  '/v1/register',
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'User already exists' });
    }
  }
);

// Login de usuário
// Rota para login de usuário. Valida o formato do email e o tamanho da senha, 
// verifica as credenciais e retorna um token JWT se as credenciais forem válidas.
server.post(
  '/v1/login',
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  }
);

// Obter contatos
// Rota para obter contatos do usuário autenticado. 
// Utiliza o middleware authenticateToken para garantir que o usuário está autenticado.
server.get('/v1/contatos', authenticateToken, async (req, res) => {
  const contacts = await prisma.contact.findMany({
    where: { userId: req.user.userId },
  });
  res.json(contacts);
});

// Adicionar contato
// Rota para adicionar um contato para o usuário autenticado. 
// Valida os campos name, phone e email e salva o contato no banco de dados.
server.post(
  '/v1/contato',
  authenticateToken,
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').matches(/^[0-9]{10,11}$/).withMessage('Phone must be a valid 10 or 11 digit number'),
  body('email').isEmail().withMessage('Invalid email format'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        phone,
        email,
        userId: req.user.userId,
      },
    });
    res.status(201).json(contact);
  }
);

// Atualizar contato
// Rota para atualizar um contato do usuário autenticado. 
// Valida os campos name, phone e email e atualiza o contato no banco de dados.
server.put(
  '/v1/contato/:id',
  authenticateToken,
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').matches(/^[0-9]{10,11}$/).withMessage('Phone must be a valid 10 or 11 digit number'),
  body('email').isEmail().withMessage('Invalid email format'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, phone, email } = req.body;

    try {
      const contact = await prisma.contact.update({
        where: { id: Number(id) },
        data: { name, phone, email },
      });
      res.json(contact);
    } catch (error) {
      res.status(404).json({ error: 'Contact not found' });
    }
  }
);

// Deletar contato
// Rota para deletar um contato do usuário autenticado. 
// Deleta o contato do banco de dados baseado no id fornecido.
server.delete('/v1/contato/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.contact.delete({
      where: { id: Number(id) },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// Esta parte inicia o servidor na porta especificada, 
// que pode ser configurada através da variável de ambiente PORT ou, por padrão, na porta 8080.
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server rodando na porta  ${PORT}`);
});
