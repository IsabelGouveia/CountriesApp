const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3001

convertElements = (element) => {
  return { commonName: element.name.common, region: element.region }
}

convertToModel = (data) => {
  if (data.length === 1) {
    return [convertElements(data[0])]
  } else {
    const results = []
    data.forEach(element => {
      results.push(convertElements(element))
    });
    return results
  }
}

app.get('/:name', (req, res) => {
  fetch('https://restcountries.com/v3.1/name/' + req.params.name)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Not response", {cause: response});
      }
    })
    .then((data) => {
      res.send(convertToModel(data));
    })
    .catch((error) => {
      console.error(error);
      res.status(404).send({msg: "Not Found"})
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})