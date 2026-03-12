let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("Partie A - ??")
console.log(nom ?? "valeur par défaut")
console.log(age ?? "valeur par défaut")
console.log(ville ?? "valeur par défaut")
console.log(score ?? "valeur par défaut")
console.log(actif ?? "valeur par défaut")

console.log("\nPartie B - ||")
console.log(nom || "valeur par défaut")
console.log(age || "valeur par défaut")
console.log(ville || "valeur par défaut")
console.log(score || "valeur par défaut")
console.log(actif || "valeur par défaut")

console.log("\nPartie C - Comparaison")
let resultat1 = (nom ?? "valeur par défaut") === (nom || "valeur par défaut")
console.log("nom   : ?? et || -> " + (resultat1 ? "même résultat" : "résultat différent"))

let resultat2 = (age ?? "valeur par défaut") === (age || "valeur par défaut")
console.log("age   : ?? et || -> " + (resultat2 ? "même résultat" : "résultat différent"))

let resultat3 = (ville ?? "valeur par défaut") === (ville || "valeur par défaut")
console.log("ville : ?? et || -> " + (resultat3 ? "même résultat" : "résultat différent"))

let resultat4 = (score ?? "valeur par défaut") === (score || "valeur par défaut")
console.log("score : ?? et || -> " + (resultat4 ? "même résultat" : "résultat différent"))

let resultat5 = (actif ?? "valeur par défaut") === (actif || "valeur par défaut")
console.log("actif : ?? et || -> " + (resultat5 ? "même résultat" : "résultat différent"))