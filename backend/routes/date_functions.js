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

module.exports = { date_format, date_greater_or_equal };
