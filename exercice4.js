let paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
]

let compteur = 0

for (let i = 0; i < paires.length; i++) {
  let val1 = paires[i][0]
  let val2 = paires[i][1]
  
  let egalDouble = (val1 == val2)
  let egalTriple = (val1 === val2)
  
  let strVal1 = val1
  let strVal2 = val2
  
  if (typeof val1 === "string" && val1 === " \t\n ") {
    strVal1 = "\" \\t\\n \""
  } else if (typeof val1 === "string") {
    strVal1 = "\"" + val1 + "\""
  }
  
  if (typeof val2 === "string" && val2 === " \t\n ") {
    strVal2 = "\" \\t\\n \""
  } else if (typeof val2 === "string") {
    strVal2 = "\"" + val2 + "\""
  }
  
  console.log(strVal1 + " == " + strVal2 + " -> " + egalDouble + "    |    " + strVal1 + " === " + strVal2 + " -> " + egalTriple)
  
  if (egalDouble && !egalTriple) {
    compteur++
  }
}

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")