const cars = [
  {
    make: "Toyota",
    model: 'Corolla',
    year: 1998,
    type: 'Sedan'
  },
  {
    make: "Honda",
    model: 'Accord',
    year: 1995,
    type: 'Sedan'
  },
  {
    make: "BMW",
    model: '328i',
    year: 2003,
    type: 'Coupe'
  },
  {
    make: "Toyota",
    model: 'Rav4',
    year: 2018,
    type: 'SUV'
  },
  {
    make: "Honda",
    model: 'CRV',
    year: 2010,
    type: 'SUV'
  },
  {
    make: "Toyota",
    model: 'Camry',
    year: 2000,
    type: 'Sedan'
  },
  {
    make: "Honda",
    model: 'Civic',
    year: 2017,
    type: 'Coupe'
  },
  {
    make: "BMW",
    model: 'X5',
    year: 2009,
    type: 'SUV'
  },
];

const resolvers = {
    Query: {
        findCar(root, { make, model, year }){
          const result = cars.filter(car => car.make == make);
          return result
        },
        cars: () => cars
    }

};
module.exports = resolvers;
