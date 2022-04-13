// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory function with two params
const pAequorFactory = (num, dna) => {
  return {
    specimenNum: num,
    dna,
    mutate() {
      const randomBase = returnRandBase();
      let randomBase2 = Math.floor(Math.random() * 14);

      if (this.dna[randomBase2] === randomBase) {
        randomBase = returnRandBase();
        this.dna[randomBase2] = randomBase;
      }
      return this.dna;
    },
    compareDna(pAequor) {
      for (let i = 0; i < dna.length; i++) {
        if (this.specimenNum === pAequor.specimenNum) {
          return `specimen ${this.specimenNum} and ${
            pAequor.specimenNum
          } have ${this.specimenNum.length / 4} DNA in common`;
        }
      }
    },
    willLikelySurvive() {
      const DnaId = this.dna.filter((base) => {
        if (base === "C" || base === "G") {
          return true;
        } else {
          return false;
        }
      });

      if (DnaId.length / this.dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};
// console.log(pAequorFactory(4, 'XXXYYY'));
// console.log(pAequorFactory(4, 'XXXYYY').compareDna({specimenNum : 9}));
//Creates 30 instances of the pAequor that can survive
const canSurvive = [];
let instances = 1;

while (canSurvive.length < 30) {
  let createdOrg = pAequorFactory(instances, mockUpStrand());
  if (createdOrg.willLikelySurvive()) {
    canSurvive.push(createdOrg);
  }
  instances++;
}

//Tests to see if code runs and returns the expected results.
console.log(canSurvive);
console.log(canSurvive[0].dna);
console.log(pAequorFactory(1, mockUpStrand()));
