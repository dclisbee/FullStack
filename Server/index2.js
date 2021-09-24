const Sequelize = require('sequelize');
const { UserTables } = require('./models');
const express = require ('express');
const app = express ()
const cors = require("cors")
const {createClient} = require("@supabase/supabase-js")
const supabase = createClient("https://pzztkkjffgageidebrov.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDMwNSwiZXhwIjoxOTQ2NzgwMzA1fQ.8kYKNI94u9NzoQL01LfA_oD2XlNB1yXlAMywQtsbiI4")
app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
    const {userEmail,userPassword} = req.body
    
    const { data, error } = await supabase
  .from('User')
  .insert([
    { email:userEmail, password:userPassword}
  ])
  console.log(error) 
  if(data){
      console.log(data)
      res.status(200).send(data)
  }else {
      console.log(error)
      res.status(401).send(error)
  }

})

app.get("/products", async(req,res) => {
 const { data, error } = await supabase
  .from('Products')
  .select()
    if(data){
        console.log(data)
        res.status(200).send(data)
    }else {
        console.log(error)
        res.status(400).send(error)
    }
})


app.listen(3006,console.log(`${3006}`))