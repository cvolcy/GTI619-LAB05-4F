const express = require('express'),
      mongoose = require('mongoose');

let router = express.Router();

router.get("/residentiel", (req, res, next) => {
  let User = mongoose.model("User");
  res.render('repertoire', { title: "Repertoire de clients résidentiels", clients: [
    {
      "id": "79175105",
      "name": "Kaci Gutkowski",
      "email": "Kaci.Gutkowski.Osinski@gmail.com",
      "phone": "(514) 372-3171",
      "location": "6896 Jeremie View, Moorebury, Mississippi"
    },
    {
      "id": "57930735",
      "name": "Andrew Hettinger",
      "email": "Andrew.Hettinger.Metz@hotmail.com",
      "phone": "(450) 845-9858",
      "location": "83128 Buckridge Falls, Junefort, Nevada"
    },
    {
      "id": "19212626",
      "name": "Darius Mueller",
      "email": "Darius.Mueller.Glover57@gmail.com",
      "phone": "(438) 377-8617",
      "location": "7397 Elfrieda Vista, Clintville, Tennessee"
    },
    {
      "id": "81593286",
      "name": "Bridget Conroy",
      "email": "Bridget.Conroy_Wisoky39@yahoo.com",
      "phone": "(514) 374-7893",
      "location": "4063 Purdy Path, North Maryse, Tennessee"
    },
    {
      "id": "08606872",
      "name": "Mrs. Garret Daugherty",
      "email": "Mrs.GarretDaugherty31@gmail.com",
      "phone": "(450) 465-5252",
      "location": "4930 Leonora Walk, East Vada, Nevada"
    },
    {
      "id": "28005050",
      "name": "Jairo Koepp IV",
      "email": "Jairo.KoeppIV_Hyatt50@gmail.com",
      "phone": "(450) 931-5768",
      "location": "762 Kaley Highway, Nitzschebury, Virginia"
    },
    {
      "id": "13082380",
      "name": "Nelle Wunsch",
      "email": "Nelle.Wunsch25@hotmail.com",
      "phone": "(438) 340-4164",
      "location": "17132 Brando Rapid, Port Ericchester, Wisconsin"
    },
    {
      "id": "84410362",
      "name": "Myrna Daniel",
      "email": "Myrna.Daniel.Stokes@yahoo.com",
      "phone": "(450) 249-2353",
      "location": "518 Kirlin Shores, Rhiannaland, Louisiana"
    },
    {
      "id": "61978542",
      "name": "Gideon Ward",
      "email": "Gideon.Ward_Ryan@yahoo.com",
      "phone": "(450) 278-1599",
      "location": "11971 Ernser Brooks, Naderfort, Georgia"
    },
    {
      "id": "62659869",
      "name": "Alysha Douglas",
      "email": "Alysha.Douglas30@gmail.com",
      "phone": "(438) 854-4917",
      "location": "6458 Mayert Lock, North Archchester, Kentucky"
    },
    {
      "id": "66372107",
      "name": "Jovanny Howell",
      "email": "Jovanny.Howell70@gmail.com",
      "phone": "(438) 998-6283",
      "location": "4695 Elias Flat, West Alana, New Jersey"
    },
    {
      "id": "93287810",
      "name": "Naomi Kessler",
      "email": "Naomi.Kessler_Lubowitz78@hotmail.com",
      "phone": "(438) 647-2989",
      "location": "382 Duane Knoll, West Tremainefurt, Maryland"
    },
    {
      "id": "93421660",
      "name": "Esmeralda Mante",
      "email": "Esmeralda.Mante_Bayer@gmail.com",
      "phone": "(514) 480-0252",
      "location": "55118 O'Reilly Ranch, Hermannhaven, Hawaii"
    },
    {
      "id": "64426360",
      "name": "Francesca Stark II",
      "email": "Francesca.StarkII_Kovacek@hotmail.com",
      "phone": "(438) 504-0245",
      "location": "44733 Carleton Isle, West Arnold, Maine"
    },
    {
      "id": "11682916",
      "name": "Merl Zboncak",
      "email": "Merl.Zboncak69@yahoo.com",
      "phone": "(438) 945-5931",
      "location": "9347 Lyda Crossroad, Herzogview, Colorado"
    },
    {
      "id": "14032520",
      "name": "Wayne Ledner",
      "email": "Wayne.Ledner_Prosacco@gmail.com",
      "phone": "(514) 828-0640",
      "location": "4775 Alessandro Forge, Lonnieshire, Kansas"
    },
    {
      "id": "06200386",
      "name": "Candida Leannon PhD",
      "email": "Candida.LeannonPhD_Kunde30@hotmail.com",
      "phone": "(514) 133-6920",
      "location": "1632 Collin Squares, Elinoreport, Ohio"
    },
    {
      "id": "42070321",
      "name": "Samson Hackett",
      "email": "Samson.Hackett.Jacobson18@gmail.com",
      "phone": "(450) 947-7079",
      "location": "80061 Corkery Plaza, Gerhardfort, North Carolina"
    },
    {
      "id": "46200121",
      "name": "Sandrine Goldner",
      "email": "Sandrine.Goldner.Sporer66@hotmail.com",
      "phone": "(450) 625-6401",
      "location": "526 Therese Flats, Mercedesburgh, Alabama"
    },
    {
      "id": "73174740",
      "name": "Jaiden Bailey",
      "email": "Jaiden.Bailey_Koch@hotmail.com",
      "phone": "(514) 651-4793",
      "location": "46424 Shyann Hill, Williamsonborough, California"
    },
    {
      "id": "29096790",
      "name": "Alexandrine Yost III",
      "email": "Alexandrine.YostIII_Wolf@gmail.com",
      "phone": "(450) 313-7251",
      "location": "3150 Ledner Fall, Lehnerport, Washington"
    },
    {
      "id": "45048166",
      "name": "Myrtice Ledner",
      "email": "Myrtice.Ledner63@hotmail.com",
      "phone": "(450) 409-4295",
      "location": "308 Huels Vista, Ondrickafort, Georgia"
    },
    {
      "id": "10668335",
      "name": "Estel Cruickshank",
      "email": "Estel.Cruickshank_Turner76@hotmail.com",
      "phone": "(514) 918-1430",
      "location": "9802 Celestine Garden, Baumbachview, Rhode Island"
    },
    {
      "id": "42156704",
      "name": "Selena Harris",
      "email": "Selena.Harris_Lang@yahoo.com",
      "phone": "(514) 572-4080",
      "location": "27707 Mills Island, Theresaport, Montana"
    },
    {
      "id": "04097951",
      "name": "Willard Wiegand",
      "email": "Willard.Wiegand.Collier@yahoo.com",
      "phone": "(438) 208-8684",
      "location": "49290 Mante Green, East Ubaldo, South Dakota"
    },
    {
      "id": "14408256",
      "name": "Oren Grady",
      "email": "Oren.Grady_Bartell@hotmail.com",
      "phone": "(514) 356-1744",
      "location": "689 Jenkins Centers, Lake Elizaview, Iowa"
    },
    {
      "id": "39443221",
      "name": "Molly Bins",
      "email": "Molly.Bins54@hotmail.com",
      "phone": "(514) 044-5583",
      "location": "89791 Weimann Manor, Collinsfort, Michigan"
    },
    {
      "id": "27743649",
      "name": "Granville Fay Sr.",
      "email": "Granville.FaySr.76@yahoo.com",
      "phone": "(450) 509-7924",
      "location": "01307 Hester Path, Schroederport, Maryland"
    },
    {
      "id": "61489820",
      "name": "Ms. Martina Cruickshank",
      "email": "Ms.MartinaCruickshank_Ward@hotmail.com",
      "phone": "(514) 276-7012",
      "location": "0964 Davis Harbor, West Hipolitochester, Minnesota"
    },
    {
      "id": "44742717",
      "name": "Mrs. Carmel Bernier",
      "email": "Mrs.CarmelBernier.Breitenberg@gmail.com",
      "phone": "(514) 261-9283",
      "location": "9721 Adrian Causeway, East Jayme, Minnesota"
    }
  ]});
});

router.get("/affaire", (req, res, next) => {
  let User = mongoose.model("User");
  res.render('repertoire', { title: "Repertoire de clients d'affaire", clients: [
    {
      "id": "41733144",
      "name": "Aric Stehr",
      "email": "Aric.Stehr_Heathcote@hotmail.com",
      "phone": "(438) 585-6066",
      "location": "237 Araceli Corner, South Dejah, North Dakota"
    },
    {
      "id": "06041332",
      "name": "Soledad Kutch",
      "email": "Soledad.Kutch.Goodwin74@hotmail.com",
      "phone": "(514) 242-6310",
      "location": "255 Anderson Manors, Heavenville, Montana"
    },
    {
      "id": "01383471",
      "name": "Barrett Stamm",
      "email": "Barrett.Stamm0@hotmail.com",
      "phone": "(450) 380-0446",
      "location": "340 Armani Lodge, North Hildaside, Minnesota"
    },
    {
      "id": "01486460",
      "name": "Lori Hammes",
      "email": "Lori.Hammes.Labadie85@gmail.com",
      "phone": "(514) 188-9410",
      "location": "23658 Matilda Loop, Lucindaview, Alaska"
    },
    {
      "id": "52913399",
      "name": "Rubie Emard",
      "email": "Rubie.Emard62@hotmail.com",
      "phone": "(450) 814-1711",
      "location": "2637 Thompson Shores, South Carole, Oklahoma"
    },
    {
      "id": "50180250",
      "name": "Georgianna Zboncak",
      "email": "Georgianna.Zboncak.Becker@hotmail.com",
      "phone": "(514) 609-5281",
      "location": "67126 Cleo Brook, Lake Domenickchester, Nevada"
    },
    {
      "id": "15938357",
      "name": "Vivian Hessel",
      "email": "Vivian.Hessel_Tremblay88@gmail.com",
      "phone": "(514) 573-6272",
      "location": "295 O'Hara Flat, West Willieport, South Dakota"
    },
    {
      "id": "49609445",
      "name": "Marguerite Gottlieb",
      "email": "Marguerite.Gottlieb.Bernier89@hotmail.com",
      "phone": "(450) 799-2018",
      "location": "26264 Haley Rue, New Josianehaven, South Dakota"
    },
    {
      "id": "03383550",
      "name": "Connor Beer",
      "email": "Connor.Beer_Schuster@hotmail.com",
      "phone": "(514) 974-4816",
      "location": "62587 Mayert Knoll, North Hopeville, Tennessee"
    },
    {
      "id": "26528975",
      "name": "Laisha Bergstrom",
      "email": "Laisha.Bergstrom_King@hotmail.com",
      "phone": "(438) 397-0296",
      "location": "13484 Padberg Village, South Favianbury, New Mexico"
    },
    {
      "id": "63843672",
      "name": "Vicente Beer",
      "email": "Vicente.Beer_Hyatt@gmail.com",
      "phone": "(438) 743-9012",
      "location": "477 Vandervort Wells, South Roberto, Delaware"
    },
    {
      "id": "67327573",
      "name": "Dessie Roberts",
      "email": "Dessie.Roberts.Konopelski34@gmail.com",
      "phone": "(514) 503-9724",
      "location": "045 Hunter Crossing, West Sidstad, South Dakota"
    },
    {
      "id": "81752479",
      "name": "Arnold Stokes",
      "email": "Arnold.Stokes99@hotmail.com",
      "phone": "(514) 603-1420",
      "location": "1319 Leo Drives, Mitchellstad, Wisconsin"
    },
    {
      "id": "51483863",
      "name": "Noah Boehm",
      "email": "Noah.Boehm.Barrows@gmail.com",
      "phone": "(450) 940-7573",
      "location": "70468 Metz Fords, Cummingsshire, Hawaii"
    },
    {
      "id": "33475827",
      "name": "Mrs. Lincoln Spencer",
      "email": "Mrs.LincolnSpencer_Kiehn@yahoo.com",
      "phone": "(450) 496-1377",
      "location": "42915 Frami Dale, Rodriguezhaven, Montana"
    },
    {
      "id": "73321567",
      "name": "Vella Koch V",
      "email": "Vella.KochV38@yahoo.com",
      "phone": "(438) 027-6926",
      "location": "93170 Reta Ways, Laurenbury, Colorado"
    },
    {
      "id": "92112260",
      "name": "Miss Weston Howell",
      "email": "Miss.WestonHowell_Pfeffer85@yahoo.com",
      "phone": "(514) 930-9791",
      "location": "87731 Kohler Circle, Haagbury, South Carolina"
    },
    {
      "id": "03491620",
      "name": "Dedric Rice",
      "email": "Dedric.Rice28@yahoo.com",
      "phone": "(438) 579-6069",
      "location": "7250 Green Lock, Sawaynbury, New Mexico"
    },
    {
      "id": "27145663",
      "name": "Hettie Ryan",
      "email": "Hettie.Ryan52@gmail.com",
      "phone": "(438) 106-9279",
      "location": "06023 Wilmer Springs, New Brettview, Colorado"
    },
    {
      "id": "62669038",
      "name": "Calista Prosacco",
      "email": "Calista.Prosacco_Greenholt72@yahoo.com",
      "phone": "(450) 020-0635",
      "location": "883 Leta Groves, Wiegandland, Kentucky"
    },
    {
      "id": "11492832",
      "name": "Modesta Rau",
      "email": "Modesta.Rau.Bartell@gmail.com",
      "phone": "(438) 419-2300",
      "location": "1858 Alfonso Ridge, West Candidofurt, Pennsylvania"
    },
    {
      "id": "66087885",
      "name": "Rosamond Cormier",
      "email": "Rosamond.Cormier_Bogan28@yahoo.com",
      "phone": "(438) 338-7009",
      "location": "3088 Elvera Point, New Walton, New Hampshire"
    },
    {
      "id": "53438825",
      "name": "Mrs. Tristin Moore",
      "email": "Mrs.TristinMoore_Schamberger@hotmail.com",
      "phone": "(514) 838-3086",
      "location": "9314 Turcotte Key, Hazleview, South Carolina"
    },
    {
      "id": "15702220",
      "name": "Orville Runolfsdottir",
      "email": "Orville.Runolfsdottir_Torphy96@gmail.com",
      "phone": "(450) 185-9762",
      "location": "4897 Loyal Shore, Klockostad, Wyoming"
    },
    {
      "id": "47843803",
      "name": "Verner Volkman",
      "email": "Verner.Volkman_Carter@yahoo.com",
      "phone": "(514) 982-5785",
      "location": "6001 Toy Rapids, North Kareem, Alabama"
    },
    {
      "id": "57001266",
      "name": "Makenna Lind",
      "email": "Makenna.Lind_Beatty@gmail.com",
      "phone": "(450) 728-2465",
      "location": "1950 Fadel Overpass, Donnellybury, Virginia"
    },
    {
      "id": "45271290",
      "name": "Zaria Schumm",
      "email": "Zaria.Schumm.Shields@hotmail.com",
      "phone": "(438) 748-6313",
      "location": "1293 Eichmann Extension, North Lempistad, Pennsylvania"
    },
    {
      "id": "79207808",
      "name": "Dejah Hackett",
      "email": "Dejah.Hackett99@hotmail.com",
      "phone": "(438) 659-3901",
      "location": "246 Blick Station, West Auroreton, Kansas"
    },
    {
      "id": "06618092",
      "name": "Felipa Von",
      "email": "Felipa.Von_Ferry86@hotmail.com",
      "phone": "(450) 481-8466",
      "location": "4330 Barry Lodge, South Ariane, Illinois"
    },
    {
      "id": "63416373",
      "name": "Joaquin Bernier",
      "email": "Joaquin.Bernier_Hegmann@yahoo.com",
      "phone": "(514) 105-9456",
      "location": "81591 Kuhic Circle, Lake Josemouth, Maryland"
    }
  ]});
});

module.exports = router;
