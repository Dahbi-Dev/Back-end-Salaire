const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/salaries', (req, res) => {
  const data = [
    {
    id: 's1',
    nomsal: 'Alami',
    prenomsal: 'Sara',
    fonction: 'Technicien',
    service: {
      codeser: '1',
      nomser: 'informatique',
    },
  } ,{
    id: 's2',
    nomsal: 'Bouazza',
    prenomsal: 'Ahmed',
    fonction: 'Engineer',
    service: {
      codeser: '2',
      nomser: 'Electronics',
    },
  },
  {
    id: 's3',
    nomsal: 'El Amrani',
    prenomsal: 'Fatima',
    fonction: 'Administrator',
    service: {
      codeser: '3',
      nomser: 'informatique',
    },
  },
  {
    id: 's4',
    nomsal: 'Hassani',
    prenomsal: 'Karim',
    fonction: 'Designer',
    service: {
      codeser: '4',
      nomser: 'Creative',
    },
  },
  {
    id: 's5',
    nomsal: 'Lahmadi',
    prenomsal: 'Nadia',
    fonction: 'Analyst',
    service: {
      codeser: '5',
      nomser: 'Finance',
    },
  },
  {
    id: 's6',
    nomsal: 'Zerouali',
    prenomsal: 'Rachid',
    fonction: 'Programmer',
    service: {
      codeser: '6',
      nomser: 'Software Development',
    },
  },
]

  res.json(data);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});