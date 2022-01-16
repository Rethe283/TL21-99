function message_settlement(PassesCost, PassesCost2, op1_ID, op2_ID) {
  if (PassesCost > PassesCost2) {
    return `Operator ${op1_ID} owes operator ${op2_ID} ${(
      PassesCost - PassesCost2
    ).toFixed(2)} euros`;
  } else if (PassesCost < PassesCost2) {
    return `Operator ${op2_ID} owes operator ${op1_ID} ${(
      PassesCost2 - PassesCost
    ).toFixed(2)} euros`;
  } else if (op1_ID === op2_ID) {
    return `ERROR :Enter two different operators`;
  } else {
    return `Nothing to settle between these operators`;
  }
}

module.exports = { message_settlement };
