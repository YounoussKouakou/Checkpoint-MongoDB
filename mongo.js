const database = "contact";
const collection = "contactlist";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

/**
 * Nom de famille : Ben, Prénom : Moris, Email : ben@gmail.com, age :26
Nom : Kefi, Prénom : Seif, Courriel : kefi@gmail.com, âge : 15
Nom : Emilie, Prénom : brouge, Courriel : emilie.b@gmail.com, âge : 40
Nom : Alex, Prénom : brown, âge : 4
Nom : Denzel, Prénom : Washington, âge : 3
 */
// Insert a new contact document.
/*
db.getCollection("contactlist").insertMany([
  {
    nom: "Ben",
    Prénom: "Moris",
    Email: "ben@gmail.com",
    age: 26,
  },
  {
    nom: "Kefi",
    Prénom: "Seif",
    Email: "kefi@gmail.com",
    age: 15,
  },
  {
    nom: "Emilie",
    Prénom: "brouge",
    Email: "emilie.b@gmail.com",
    age: 40,
  },
  {
    nom: "Alex",
    Prénom: "brown",
    age: 4,
  },
  {
    nom: "Denzel",
    Prénom: "Washington",
    age: 3,
  },
]);
*/

/**
   *
  Afficher tous les contacts ayant un âge >18.
  Afficher tous les contacts ayant un âge >18 et dont le nom contient "ah".
  Changer le prénom du contact de "Kefi Seif" en "Kefi Anis".
  Supprimer les contacts qui ont moins de 5 ans.
  Afficher toute la liste des contacts.
   */
/*
//  Afficher toutes les informations sur une seule personne en utilisant son ID.
db.getCollection("contactlist").findOne({
  _id: ObjectId("67b9b13d960a405d9866caa0"),
});
*/
/*
//Afficher tous les contacts ayant un âge >18 et dont le nom contient "ah".
db.getCollection("contactlist").find({
  age: { $gte: 18 },
  nom: /ah/i,
});
*/

/*
//Changer le prénom du contact de "Kefi Seif" en "Kefi Anis"
db.getCollection("contactlist").updateOne(
  {
    nom: "Kefi",
    Prénom: "Seif",
  },
  {
    $set: {
      Prénom: "Anis",
    },
  }
);
*/

/*
//Supprimer les contacts qui ont moins de 5 ans.
db.getCollection("contactlist").deleteMany({
  age: { $lt: 5 },
});
*/

// Afficher toute la liste des contacts.
db.getCollection("contactlist").find({});