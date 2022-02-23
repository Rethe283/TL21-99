function message_settlement(PassesCost, PassesCost2, op1_ID, op2_ID) {
  let amount1 = Number(PassesCost);
  let amount2 = Number(PassesCost2);
  if (amount1 > amount2) {
    return `Operator ${op2_ID} owes operator ${op1_ID} ${(
      amount1 - amount2
    ).toFixed(2)} euros`;
  } else if (amount1 < amount2) {
    return `Operator ${op1_ID} owes operator ${op2_ID} ${(
      amount2 - amount1
    ).toFixed(2)} euros`;
  } else if (op2_ID === op1_ID) {
    return `ERROR :Enter two different operators`;
  } else {
    return `Nothing to settle between these operators`;
  }
}

module.exports = { message_settlement };
