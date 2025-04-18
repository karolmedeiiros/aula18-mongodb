use('tutorial');

db.cities.drop();
db.createCollection('cities');

db.cities.insertOne({
  name: 'Santo André',
  population: 710_210,
  area_km2: 175.8,
  populationDensity: 4000,
  elevation: 700,
  lastCensus: 2015,
  hdi:0.815
})

db.cities.insertOne({
    name: 'São Bernardo do Campo',
    population: 816_925,
    area_km2: 489.51,
    populationDensity: 5000,
    elevation: 762,
    lastCensus: 2015,
    hdi:0.805
})

db.cities.insertOne({
    name: 'São Caetano do Sul',
    population: 158_024,
    area_km2: 15.33,
    populationDensity: 10_000,
    elevation: 744,
    lastCensus: 2015,
    hdi:0.862
})

db.cities.find()
db.cities.countDocuments()

db.cities.find().map(city => city.name)

db.cities.insertOne({
    name: 'São Paulo',
    population: 12_345_678,
    area_km2: 1_500,
    populationDensity: 8_000,
    elevation: 760,
    lastCensus: 2015,
    hdi:0.9
})

const city = {
    name: 'São Paulo',
    population: 12_345_678,
    area_km2: 1_500,
    populationDensity: 8_000,
    elevation: 760,
    lastCensus: 2015,
    hdi:0.9,
    increasePopulation: function () {
        this.population += 1000;
    }
}

db.cities.insertOne(city)

db.cities.find()

db.cities.find({ name: 'Santo André' })
db.cities.findOne({ name: 'Santo André' })
db.cities.findOne()

db.cities.find({ name: /^São/, population: {$lt: 200_000} })

const populationRange = {
    $lt: 800_000, 
    $gt: 200_000
}

db.cities.find({ population: populationRange })

//projeção positiva (o que é pora incluir)
db.cities.find({ population: populationRange }, {
    name: true, 
    population: true,
    _id: false
})

//projeção negativa (o que é pora excluir)
// não pode misturar projeção positiva e negativa. Só id pode ser false ou true
db.cities.find({ population: populationRange }, {
    name: false})
