var mongoose = require('mongoose');

// MongoDB setup
mongoose.connect("mongodb://heroku_gfvkrw47:8o4868opmpueu9i8b2r9joj5qk@ds021182.mlab.com:21182/heroku_gfvkrw47");
mongoose.connection.on('error', (error) => { console.warn('Warning', error); });
mongoose.Promise = global.Promise;
require('../models/models.js');

var Role = mongoose.model('Role');
var User = mongoose.model('User');
var Info = mongoose.model('Info');

var client_residentiel_list = [
  {
    "id": "80531474",
    "username": "AylaFahey.Schowalter",
    "name": "Ayla Fahey",
    "email": "Ayla.Fahey62@yahoo.com",
    "phone": "(438) 124-9210",
    "location": {
      "street": "4573 Gage Ports",
      "city": "Luettgenside",
      "state": "Louisiana",
      "postalcode": "21184"
    }
  },
  {
    "id": "63858044",
    "username": "ManuelTurnerPhD_Kassulke",
    "name": "Manuel Turner PhD",
    "email": "Manuel.TurnerPhD_Parker4@gmail.com",
    "phone": "(438) 905-3773",
    "location": {
      "street": "1337 Ratke Estates",
      "city": "Bretberg",
      "state": "Texas",
      "postalcode": "63139-2743"
    }
  },
  {
    "id": "77057082",
    "username": "KamrynHerzog.Schaden38",
    "name": "Kamryn Herzog",
    "email": "Kamryn.Herzog.Doyle16@yahoo.com",
    "phone": "(514) 305-7647",
    "location": {
      "street": "90603 Rigoberto Spring",
      "city": "Howellmouth",
      "state": "North Carolina",
      "postalcode": "96504"
    }
  },
  {
    "id": "44266300",
    "username": "JanelleEffertz57",
    "name": "Janelle Effertz",
    "email": "Janelle.Effertz46@gmail.com",
    "phone": "(438) 590-6666",
    "location": {
      "street": "6300 Pouros Place",
      "city": "North Adelle",
      "state": "Wisconsin",
      "postalcode": "75368-4022"
    }
  },
  {
    "id": "95347883",
    "username": "VladimirHuel_Marvin96",
    "name": "Vladimir Huel",
    "email": "Vladimir.Huel.Skiles34@gmail.com",
    "phone": "(450) 453-1924",
    "location": {
      "street": "93527 Simonis Underpass",
      "city": "Laurianneton",
      "state": "Iowa",
      "postalcode": "78109"
    }
  },
  {
    "id": "42637324",
    "username": "BrandynMillerIII_Huels",
    "name": "Brandyn Miller III",
    "email": "Brandyn.MillerIII.DAmore@yahoo.com",
    "phone": "(438) 189-8018",
    "location": {
      "street": "27356 Kessler Summit",
      "city": "New Madalineport",
      "state": "Michigan",
      "postalcode": "52725-6363"
    }
  },
  {
    "id": "78608126",
    "username": "AnabelTerry_Hoeger",
    "name": "Anabel Terry",
    "email": "Anabel.Terry.Runte@yahoo.com",
    "phone": "(450) 722-6254",
    "location": {
      "street": "5652 Barrows Gardens",
      "city": "Lake Marianobury",
      "state": "Mississippi",
      "postalcode": "88848-8090"
    }
  },
  {
    "id": "20064497",
    "username": "JolieCummerata80",
    "name": "Jolie Cummerata",
    "email": "Jolie.Cummerata.Robel62@gmail.com",
    "phone": "(450) 038-6349",
    "location": {
      "street": "00430 Hardy Bridge",
      "city": "Dooleyborough",
      "state": "North Carolina",
      "postalcode": "56258-4723"
    }
  },
  {
    "id": "60748792",
    "username": "LilianaBalistreri_Jast29",
    "name": "Liliana Balistreri",
    "email": "Liliana.Balistreri.Satterfield59@yahoo.com",
    "phone": "(438) 342-5048",
    "location": {
      "street": "41757 Lesch Forks",
      "city": "Franeckiside",
      "state": "Montana",
      "postalcode": "85441-0283"
    }
  },
  {
    "id": "76728465",
    "username": "JaquelinWilkinson_Stark",
    "name": "Jaquelin Wilkinson",
    "email": "Jaquelin.Wilkinson12@gmail.com",
    "phone": "(514) 646-6218",
    "location": {
      "street": "92443 Douglas Fork",
      "city": "North Francis",
      "state": "Arkansas",
      "postalcode": "73007-9621"
    }
  },
  {
    "id": "57425699",
    "username": "JoshuahToy82",
    "name": "Joshuah Toy",
    "email": "Joshuah.Toy_Bailey27@gmail.com",
    "phone": "(450) 115-9711",
    "location": {
      "street": "8117 Ahmad Shores",
      "city": "Nienowville",
      "state": "Texas",
      "postalcode": "09284-6067"
    }
  },
  {
    "id": "02098998",
    "username": "GideonWhite1",
    "name": "Gideon White",
    "email": "Gideon.White32@gmail.com",
    "phone": "(450) 947-2821",
    "location": {
      "street": "61965 Tremblay Groves",
      "city": "Lake Laurynmouth",
      "state": "New Hampshire",
      "postalcode": "20887-7177"
    }
  },
  {
    "id": "43694113",
    "username": "AnnaliseFarrell.Franecki",
    "name": "Annalise Farrell",
    "email": "Annalise.Farrell.Lockman64@hotmail.com",
    "phone": "(438) 371-3778",
    "location": {
      "street": "5908 Oceane Club",
      "city": "Freidamouth",
      "state": "Alabama",
      "postalcode": "58825-6348"
    }
  },
  {
    "id": "18837466",
    "username": "AlexaneRunolfsdottirJr..Barrows57",
    "name": "Alexane Runolfsdottir Jr.",
    "email": "Alexane.RunolfsdottirJr._Leuschke@yahoo.com",
    "phone": "(438) 930-4892",
    "location": {
      "street": "205 Schamberger Manors",
      "city": "Gabriellaborough",
      "state": "New Mexico",
      "postalcode": "92147"
    }
  },
  {
    "id": "69692328",
    "username": "AylinRice20",
    "name": "Aylin Rice",
    "email": "Aylin.Rice_Bode@hotmail.com",
    "phone": "(450) 813-8785",
    "location": {
      "street": "036 Hamill Alley",
      "city": "Borermouth",
      "state": "North Dakota",
      "postalcode": "69893-7476"
    }
  },
  {
    "id": "50974981",
    "username": "HayleyMertz.Wuckert",
    "name": "Hayley Mertz",
    "email": "Hayley.Mertz_Grant@gmail.com",
    "phone": "(450) 893-8285",
    "location": {
      "street": "95825 Beahan Junction",
      "city": "East Irwinport",
      "state": "Ohio",
      "postalcode": "11715"
    }
  },
  {
    "id": "65804037",
    "username": "NathenLedner_Herman94",
    "name": "Nathen Ledner",
    "email": "Nathen.Ledner_West67@yahoo.com",
    "phone": "(450) 172-8002",
    "location": {
      "street": "2462 Herzog Viaduct",
      "city": "Rolfsontown",
      "state": "New York",
      "postalcode": "31341-2635"
    }
  },
  {
    "id": "43450863",
    "username": "HelenDaniel.Russel99",
    "name": "Helen Daniel",
    "email": "Helen.Daniel_Rath@yahoo.com",
    "phone": "(450) 406-8643",
    "location": {
      "street": "945 Alvena Avenue",
      "city": "New Derrick",
      "state": "Delaware",
      "postalcode": "91416-2299"
    }
  },
  {
    "id": "10875770",
    "username": "EmmieKuhn_Pollich",
    "name": "Emmie Kuhn",
    "email": "Emmie.Kuhn.Lakin55@gmail.com",
    "phone": "(450) 242-3398",
    "location": {
      "street": "0740 Jammie Drives",
      "city": "Aydenside",
      "state": "Mississippi",
      "postalcode": "44803-2042"
    }
  },
  {
    "id": "15446461",
    "username": "RaphaelSpinka70",
    "name": "Raphael Spinka",
    "email": "Raphael.Spinka.Hilll@hotmail.com",
    "phone": "(438) 024-0930",
    "location": {
      "street": "70684 Judah Lake",
      "city": "Feliciaville",
      "state": "Kentucky",
      "postalcode": "65784-5295"
    }
  },
  {
    "id": "18119995",
    "username": "JazmynConn.Padberg",
    "name": "Jazmyn Conn",
    "email": "Jazmyn.Conn69@gmail.com",
    "phone": "(450) 927-4018",
    "location": {
      "street": "116 Olson Gateway",
      "city": "East Liamton",
      "state": "Maine",
      "postalcode": "12975-4646"
    }
  },
  {
    "id": "91603279",
    "username": "MichealLeannon37",
    "name": "Micheal Leannon",
    "email": "Micheal.Leannon89@hotmail.com",
    "phone": "(450) 299-6269",
    "location": {
      "street": "7043 Dolores Vista",
      "city": "South Oramouth",
      "state": "Alaska",
      "postalcode": "92368"
    }
  },
  {
    "id": "66003097",
    "username": "DiannaPowlowski_Abernathy90",
    "name": "Dianna Powlowski",
    "email": "Dianna.Powlowski50@gmail.com",
    "phone": "(438) 517-1264",
    "location": {
      "street": "2867 Berge Ville",
      "city": "New Antoinetteshire",
      "state": "Arkansas",
      "postalcode": "42195-7607"
    }
  },
  {
    "id": "78860488",
    "username": "AntonettaMacejkovic.Fisher54",
    "name": "Antonetta Macejkovic",
    "email": "Antonetta.Macejkovic66@gmail.com",
    "phone": "(438) 434-2902",
    "location": {
      "street": "339 Bailey Row",
      "city": "Stantonhaven",
      "state": "South Carolina",
      "postalcode": "67561"
    }
  },
  {
    "id": "53918252",
    "username": "DovieKuhic_Zemlak95",
    "name": "Dovie Kuhic",
    "email": "Dovie.Kuhic_Senger68@gmail.com",
    "phone": "(514) 438-0917",
    "location": {
      "street": "37762 Purdy Mountain",
      "city": "Petrastad",
      "state": "Nebraska",
      "postalcode": "03630"
    }
  },
  {
    "id": "44270332",
    "username": "PatienceHammes_Barton",
    "name": "Patience Hammes",
    "email": "Patience.Hammes26@gmail.com",
    "phone": "(514) 553-2527",
    "location": {
      "street": "290 Faye Mall",
      "city": "Faymouth",
      "state": "Oregon",
      "postalcode": "68700"
    }
  },
  {
    "id": "79615212",
    "username": "JulienNikolaus_Balistreri31",
    "name": "Julien Nikolaus",
    "email": "Julien.Nikolaus_Homenick@gmail.com",
    "phone": "(450) 919-3609",
    "location": {
      "street": "02712 McKenzie Way",
      "city": "South Jaron",
      "state": "Oklahoma",
      "postalcode": "45887-3620"
    }
  },
  {
    "id": "99106919",
    "username": "Mr.PatienceChristiansen_Erdman",
    "name": "Mr. Patience Christiansen",
    "email": "Mr.PatienceChristiansen_Gulgowski1@yahoo.com",
    "phone": "(450) 880-4240",
    "location": {
      "street": "34634 Stracke Forest",
      "city": "Zionmouth",
      "state": "Indiana",
      "postalcode": "02584-4801"
    }
  },
  {
    "id": "64877134",
    "username": "EllisSkiles.Skiles",
    "name": "Ellis Skiles",
    "email": "Ellis.Skiles_Bradtke@hotmail.com",
    "phone": "(514) 393-6323",
    "location": {
      "street": "9607 Theodora Vista",
      "city": "New Dannieland",
      "state": "Kentucky",
      "postalcode": "81055"
    }
  },
  {
    "id": "10032842",
    "username": "ArmaniLangworth29",
    "name": "Armani Langworth",
    "email": "Armani.Langworth4@yahoo.com",
    "phone": "(450) 849-0592",
    "location": {
      "street": "179 Gleason Row",
      "city": "East Elyseside",
      "state": "Michigan",
      "postalcode": "91061"
    }
  }
];

var client_daffaire_list = [
  {
    "id": "61479914",
    "username": "GianniEmmerichPhD_Bauch",
    "name": "Gianni Emmerich PhD",
    "email": "Gianni.EmmerichPhD.Weimann@yahoo.com",
    "phone": "(438) 444-8800",
    "location": {
      "street": "95914 Gabriel Well",
      "city": "Lake Destineyville",
      "state": "Maine",
      "postalcode": "03277"
    }
  },
  {
    "id": "69720189",
    "username": "OzellaRolfson_Doyle44",
    "name": "Ozella Rolfson",
    "email": "Ozella.Rolfson73@yahoo.com",
    "phone": "(514) 978-1321",
    "location": {
      "street": "7438 Lawrence Circle",
      "city": "Keventon",
      "state": "Wisconsin",
      "postalcode": "73546"
    }
  },
  {
    "id": "04040401",
    "username": "ZoeyJacobiMD63",
    "name": "Zoey Jacobi MD",
    "email": "Zoey.JacobiMD51@hotmail.com",
    "phone": "(514) 036-6824",
    "location": {
      "street": "62713 Elena Plaza",
      "city": "Kailyntown",
      "state": "Vermont",
      "postalcode": "11632"
    }
  },
  {
    "id": "84148311",
    "username": "KeelyGibson15",
    "name": "Keely Gibson",
    "email": "Keely.Gibson_Prosacco@gmail.com",
    "phone": "(450) 511-8277",
    "location": {
      "street": "897 Kulas Circles",
      "city": "New Adan",
      "state": "Montana",
      "postalcode": "36729"
    }
  },
  {
    "id": "48857257",
    "username": "SisterBrown_Wyman",
    "name": "Sister Brown",
    "email": "Sister.Brown_Klocko69@hotmail.com",
    "phone": "(450) 545-3602",
    "location": {
      "street": "403 Purdy Cove",
      "city": "West Quentin",
      "state": "Tennessee",
      "postalcode": "08692"
    }
  },
  {
    "id": "63697964",
    "username": "JackelineHills_Trantow",
    "name": "Jackeline Hills",
    "email": "Jackeline.Hills.Thompson76@gmail.com",
    "phone": "(514) 663-6360",
    "location": {
      "street": "84404 Dietrich Road",
      "city": "East Cali",
      "state": "Iowa",
      "postalcode": "52669-3966"
    }
  },
  {
    "id": "76691260",
    "username": "DovieHowe.Mertz",
    "name": "Dovie Howe",
    "email": "Dovie.Howe.Maggio70@yahoo.com",
    "phone": "(438) 132-1639",
    "location": {
      "street": "48612 Dorian Union",
      "city": "West Madalyn",
      "state": "New Jersey",
      "postalcode": "80633"
    }
  },
  {
    "id": "29771545",
    "username": "GradyKeeling80",
    "name": "Grady Keeling",
    "email": "Grady.Keeling59@yahoo.com",
    "phone": "(450) 372-3913",
    "location": {
      "street": "780 River Creek",
      "city": "Fabiolaburgh",
      "state": "Minnesota",
      "postalcode": "14292"
    }
  },
  {
    "id": "15281009",
    "username": "RobinDoyle.Doyle",
    "name": "Robin Doyle",
    "email": "Robin.Doyle25@yahoo.com",
    "phone": "(450) 599-6678",
    "location": {
      "street": "047 Antwon Junctions",
      "city": "Port Margaretteland",
      "state": "Nebraska",
      "postalcode": "77937"
    }
  },
  {
    "id": "64427809",
    "username": "YesseniaCollins83",
    "name": "Yessenia Collins",
    "email": "Yessenia.Collins.Bartell@hotmail.com",
    "phone": "(450) 825-2552",
    "location": {
      "street": "94694 Kenny Path",
      "city": "North Annette",
      "state": "Texas",
      "postalcode": "96599-2392"
    }
  },
  {
    "id": "30862345",
    "username": "ChelseyAltenwerth_Wolff89",
    "name": "Chelsey Altenwerth",
    "email": "Chelsey.Altenwerth.DAmore@hotmail.com",
    "phone": "(450) 600-4409",
    "location": {
      "street": "6885 Chelsie Ferry",
      "city": "East Fermin",
      "state": "Rhode Island",
      "postalcode": "40635-7704"
    }
  },
  {
    "id": "18902525",
    "username": "CathrineBlanda65",
    "name": "Cathrine Blanda",
    "email": "Cathrine.Blanda.Gleichner85@hotmail.com",
    "phone": "(438) 839-5872",
    "location": {
      "street": "8932 Katrina Branch",
      "city": "East Cathrynland",
      "state": "Texas",
      "postalcode": "34567"
    }
  },
  {
    "id": "86269210",
    "username": "ParisSchimmel.Rosenbaum92",
    "name": "Paris Schimmel",
    "email": "Paris.Schimmel57@yahoo.com",
    "phone": "(450) 930-3896",
    "location": {
      "street": "403 Borer Cliff",
      "city": "East Fabianview",
      "state": "Washington",
      "postalcode": "26729"
    }
  },
  {
    "id": "40728582",
    "username": "MaximoLemke43",
    "name": "Maximo Lemke",
    "email": "Maximo.Lemke_Lesch@hotmail.com",
    "phone": "(438) 775-1315",
    "location": {
      "street": "08723 Bruen Walks",
      "city": "Port Madelyntown",
      "state": "Virginia",
      "postalcode": "21307"
    }
  },
  {
    "id": "66302789",
    "username": "Mrs.ZenaNicolas35",
    "name": "Mrs. Zena Nicolas",
    "email": "Mrs.ZenaNicolas_Grant86@gmail.com",
    "phone": "(438) 356-1718",
    "location": {
      "street": "8195 Emory Fields",
      "city": "West Phoebeland",
      "state": "Tennessee",
      "postalcode": "53935-2815"
    }
  },
  {
    "id": "86700865",
    "username": "JustusConn.Koss12",
    "name": "Justus Conn",
    "email": "Justus.Conn23@hotmail.com",
    "phone": "(438) 893-0073",
    "location": {
      "street": "88659 Boehm Crest",
      "city": "North Demetrius",
      "state": "Massachusetts",
      "postalcode": "30046"
    }
  },
  {
    "id": "34368215",
    "username": "MartyWard.Armstrong55",
    "name": "Marty Ward",
    "email": "Marty.Ward_Carter46@yahoo.com",
    "phone": "(438) 724-0054",
    "location": {
      "street": "8480 Dicki Bypass",
      "city": "East Koryfurt",
      "state": "Michigan",
      "postalcode": "26206-7995"
    }
  },
  {
    "id": "18339981",
    "username": "SavannahPredovic_Zemlak",
    "name": "Savannah Predovic",
    "email": "Savannah.Predovic95@gmail.com",
    "phone": "(438) 789-3884",
    "location": {
      "street": "9511 Hobart River",
      "city": "Nienowton",
      "state": "North Dakota",
      "postalcode": "48055-0000"
    }
  },
  {
    "id": "32285362",
    "username": "DevinPollichSr..Schimmel42",
    "name": "Devin Pollich Sr.",
    "email": "Devin.PollichSr..Kub@hotmail.com",
    "phone": "(438) 873-3662",
    "location": {
      "street": "2160 Dibbert Curve",
      "city": "Westmouth",
      "state": "Georgia",
      "postalcode": "71505-1224"
    }
  },
  {
    "id": "06938876",
    "username": "BrettReichert.VonRueden",
    "name": "Brett Reichert",
    "email": "Brett.Reichert30@hotmail.com",
    "phone": "(438) 027-8601",
    "location": {
      "street": "750 Satterfield Burgs",
      "city": "Nolanstad",
      "state": "Oregon",
      "postalcode": "97006"
    }
  },
  {
    "id": "12133854",
    "username": "MaraStiedemann_Ankunding53",
    "name": "Mara Stiedemann",
    "email": "Mara.Stiedemann.Effertz99@yahoo.com",
    "phone": "(514) 572-1668",
    "location": {
      "street": "153 Gutmann Brooks",
      "city": "North Katelynmouth",
      "state": "Pennsylvania",
      "postalcode": "78348-1000"
    }
  },
  {
    "id": "94922461",
    "username": "KevinDietrich49",
    "name": "Kevin Dietrich",
    "email": "Kevin.Dietrich.DAmore34@hotmail.com",
    "phone": "(514) 066-4220",
    "location": {
      "street": "81944 Zieme Passage",
      "city": "Anachester",
      "state": "New Hampshire",
      "postalcode": "25995"
    }
  },
  {
    "id": "83595610",
    "username": "Mr.ChristopherVeum32",
    "name": "Mr. Christopher Veum",
    "email": "Mr.ChristopherVeum.Torphy@hotmail.com",
    "phone": "(438) 036-5342",
    "location": {
      "street": "670 Kozey Inlet",
      "city": "Wehnermouth",
      "state": "Rhode Island",
      "postalcode": "47138-6910"
    }
  },
  {
    "id": "22478695",
    "username": "MissSimoneHarber99",
    "name": "Miss Simone Harber",
    "email": "Miss.SimoneHarber_Wintheiser@hotmail.com",
    "phone": "(438) 463-4688",
    "location": {
      "street": "2100 Adah Prairie",
      "city": "Tristianfurt",
      "state": "Michigan",
      "postalcode": "29917-1571"
    }
  },
  {
    "id": "38360704",
    "username": "FelipeEmmerich.Hammes58",
    "name": "Felipe Emmerich",
    "email": "Felipe.Emmerich.Hayes@gmail.com",
    "phone": "(514) 147-4731",
    "location": {
      "street": "826 Delphia Center",
      "city": "Port Jordyn",
      "state": "Colorado",
      "postalcode": "28380"
    }
  },
  {
    "id": "91574176",
    "username": "ArnoldoKihn_Ratke",
    "name": "Arnoldo Kihn",
    "email": "Arnoldo.Kihn_Auer10@yahoo.com",
    "phone": "(450) 117-9570",
    "location": {
      "street": "9241 Rosenbaum Forest",
      "city": "Lake Dusty",
      "state": "Oklahoma",
      "postalcode": "61784-2648"
    }
  },
  {
    "id": "26998203",
    "username": "GailPurdy53",
    "name": "Gail Purdy",
    "email": "Gail.Purdy97@hotmail.com",
    "phone": "(438) 649-5956",
    "location": {
      "street": "735 Aaron Center",
      "city": "East Evafurt",
      "state": "Vermont",
      "postalcode": "84882-2851"
    }
  },
  {
    "id": "01124595",
    "username": "BernieZemlak.Nienow",
    "name": "Bernie Zemlak",
    "email": "Bernie.Zemlak_Skiles@hotmail.com",
    "phone": "(514) 119-6089",
    "location": {
      "street": "8292 Claude Squares",
      "city": "Thielchester",
      "state": "Washington",
      "postalcode": "99076"
    }
  },
  {
    "id": "95624987",
    "username": "AnissaBoyer.Dickinson83",
    "name": "Anissa Boyer",
    "email": "Anissa.Boyer_Johns@hotmail.com",
    "phone": "(438) 869-1924",
    "location": {
      "street": "4447 Micah Square",
      "city": "New Holly",
      "state": "Oregon",
      "postalcode": "29227-9546"
    }
  },
  {
    "id": "13649620",
    "username": "FelicityKemmer_OKeefe36",
    "name": "Felicity Kemmer",
    "email": "Felicity.Kemmer92@yahoo.com",
    "phone": "(438) 214-0911",
    "location": {
      "street": "55044 Crist Trail",
      "city": "Bogisichton",
      "state": "Washington",
      "postalcode": "59369-4608"
    }
  }
];

var role1 = new Role();
var client_residentiel_role = Role.findById("58dee1697a555253f4ad6d02").then((role) => {
  var info1 = new Info({
    name: client_residentiel_list[0].name,
    email: client_residentiel_list[0].email,
    phone: client_residentiel_list[0].phone,
    street: client_residentiel_list[0].location.street,
    city: client_residentiel_list[0].location.city,
    state: client_residentiel_list[0].location.state,
    postal_code: client_residentiel_list[0].location.postalcode,
  })
  var userResidentiel1 = new User({
    username: client_residentiel_list[0].username
  });
  userResidentiel1.role = role;
  userResidentiel1.info = info1;
  userResidentiel1.save().then(function (doc) {
    console.log('meow');
  }).catch(function(err) {
    console.log('err', err);
  });
  info1.save().then(function (doc) {
    console.log('meow info');
  }).catch(function(err) {
    console.log('err', err);
  });
});
var client_daffaire_role = Role.findById("58dee1697a555253f4ad6d03").then((role) => {
  //console.log(role.name);
});

// userResidentiel.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

// console.log(userResidentiel.username);
// console.log(userResidentiel.info.name);

// client_residentiel_list.forEach(function(element1) {
//   client_daffaire_list.forEach(function(element2) {
//     if (element1.username == element2.username) {
//       console.log(element1.username);
//     }
//   });
// });

//mongoose.connection.close();
