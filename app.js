function timeAccumulator(plants) {
  let output = {};

  for (let plant of plants) {
    output[plant.id] = {}; // output = {id, {}}
    let runningTotal = 0;

    for (let step of plant.productionSteps) {
      runningTotal += step.time;
      output[plant.id][step.step] = runningTotal; // object[object[0]][object[0][0]] = object[0][1]
    }
  }
  console.log(output);
}

timeAccumulator([
  {
    id: "Plant1",
    productionSteps: [
      { step: "Step1", time: 5 },
      { step: "Step2", time: 7 },
      { step: "Step3", time: 2 },
    ],
  },
  {
    id: "Plant2",
    productionSteps: [
      { step: "StepA", time: 3 },
      { step: "StepB", time: 4 },
      { step: "StepC", time: 8 },
    ],
  },
]);
