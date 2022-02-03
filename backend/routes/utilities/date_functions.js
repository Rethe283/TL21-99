function date_format(string_format) {
  const date_to_string = new Date(string_format);

  const day = date_to_string.getDate();
  const year = date_to_string.getFullYear();
  const month = date_to_string.getMonth() + 1;
  const hours = date_to_string.getHours();
  const minutes = date_to_string.getMinutes();
  const seconds = date_to_string.getSeconds();
  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
  );
}

function date_greater_or_equal(first_date, second_date) {
  const first_date_to_compare = new Date(first_date).getTime();
  const second_date_to_compare = new Date(second_date).getTime();

  return first_date_to_compare >= second_date_to_compare;
}
function weird_date_format(date) {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  // const hours = date.substring(8, 10);
  // const minutes = date.substring(10, 12);
  // const seconds = date.substring(12, 14);
  return year + "-" + month + "-" + day; // in case we have a weird date format i have this just in case- maybe i will ahve to turn it into middleware//might be of use later
}
module.exports = { date_format, date_greater_or_equal, weird_date_format };
