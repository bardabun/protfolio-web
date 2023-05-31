/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  let maxUnits = boxTypes[0];
  let output = 0;
  for(let i=1; i < boxTypes.length && truckSize > 0; i++){
      if(boxTypes[i][1] > maxUnits[1]){
          maxUnits = boxTypes[i];
      }
      if(i == boxTypes.length-1){
          while(truckSize > 0 && maxUnits[0] > 0){
              output += maxUnits[1];
              maxUnits[0]--;
              truckSize--;
          }
          maxUnits[1] = 0;
          i = -1;
      }
  }
  return output;
};
let boxTypes = [[1,3],[2,2],[3,1]];
let truckSize = 4;
maximumUnits(boxTypes, truckSize);