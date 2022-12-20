const DB = [
  {
    carType: 'sedan',
    make: 'Honda',
    model: 'Civic',
    trim: 'touring',
    year: '2019',
    startingBid: '20000',
    contactNumber: '7047778987',
    color: 'Gray',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg'
    ]
  },
  {
    carType: 'coupe',
    make: 'Toyota',
    model: '86',
    trim: 'standard',
    year: '2017',
    startingBid: '30000',
    contactNumber: '980123456',
    color: 'white',
    pictures: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toyota-86-quick-review-lead-1594757313.jpg?crop=1xw:0.9948717948717948xh;center,top&resize=640:*'
    ]
  },
  {
    carType: 'coupe',
    make: 'Scion',
    model: 'TC',
    trim: 'standard',
    year: '2013',
    startingBid: '15000',
    contactNumber: '7816664541',
    color: 'black',
    pictures: [
      'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/10q3/357232/2011-scion-tc-first-drive-review-car-and-driver-photo-360983-s-original.jpg?fill=2:1&resize=1200:*'
    ]
  },
  {
    carType: 'coupe',       
    make: 'Chevrolet',      
    model: 'Corvette',      
    trim: 'Stingray',       
    year: '2022',
    startingBid: '$109,590',
    contactNumber: null,    
    color: null,
    miles: '628 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001937153/hero.jpg']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2023',
    startingBid: '$101,990',
    contactNumber: null,
    color: null,
    miles: '1,133 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001982353/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2023',
    startingBid: '$100,590',
    contactNumber: null,
    color: null,
    miles: '994 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001980789/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$97,990',
    contactNumber: null,
    color: null,
    miles: '550 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001918010/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Ford',
    model: 'Mustang',
    trim: 'Shelby GT500',
    year: '2022',
    startingBid: '$95,990',
    contactNumber: null,
    color: null,
    miles: '147 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002015034/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$95,590',
    contactNumber: null,
    color: null,
    miles: '327 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002043722/hero.jpg']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2023',
    startingBid: '$94,990',
    contactNumber: null,
    color: null,
    miles: '2,982 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002165726/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2021',
    startingBid: '$94,590',
    contactNumber: null,
    color: null,
    miles: '1,605 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001922242/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2023',
    startingBid: '$93,590',
    contactNumber: null,
    color: null,
    miles: '2,705 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002095920/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$92,590',
    contactNumber: null,
    color: null,
    miles: '5,266 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001946188/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$92,590',
    contactNumber: null,
    color: null,
    miles: '4,928 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002172284/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2023',
    startingBid: '$91,990',
    contactNumber: null,
    color: null,
    miles: '3,305 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002021563/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$90,590',
    contactNumber: null,
    color: null,
    miles: '1,825 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002014859/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2021',
    startingBid: '$89,990',
    contactNumber: null,
    color: null,
    miles: '4,254 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002144179/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Mercedes-Benz',
    model: 'Mercedes-AMG',
    trim: 'S',
    year: '2016',
    startingBid: '$89,590',
    contactNumber: null,
    color: null,
    miles: '20,987 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2001814424/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2022',
    startingBid: '$88,590',
    contactNumber: null,
    color: null,
    miles: '1,994 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002057182/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Ford',
    model: 'Mustang',
    trim: 'Shelby GT500',
    year: '2020',
    startingBid: '$86,590',
    contactNumber: null,
    color: null,
    miles: '2,839 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002172700/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2021',
    startingBid: '$85,590',
    contactNumber: null,
    color: null,
    miles: '1,907 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002079456/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Lexus',
    model: 'LC',
    trim: 'LC 500',
    year: '2020',
    startingBid: '$85,590',
    contactNumber: null,
    color: null,
    miles: '16,518 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002036174/hero.jpg?width=347']
  },
  {
    carType: 'coupe',
    make: 'Chevrolet',
    model: 'Corvette',
    trim: 'Stingray',
    year: '2021',
    startingBid: '$83,990',
    contactNumber: null,
    color: null,
    miles: '5,044 miles',
    pictures: ['https://vexgateway.fastly.carvana.io/2002174753/hero.jpg?width=347']
  }
]

module.exports = {
  DB
}