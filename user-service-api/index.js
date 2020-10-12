const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      name: 'Bharath',
      email:'bharath@gmail.com'

  },{
    name: 'Alice',
    email:'alice@gmail.com'

},{
    name: 'Jake',
    email:'jake@gmail.com'

},{
  name: 'Maria',
  email:'maria@gmail.com'

}])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})