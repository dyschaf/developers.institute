const largeNumber = 356;
const currentDate = () => {
  let todayDate = new Date();
  console.log(todayDate);
  return todayDate;
};

module.exports = { largeNumber, currentDate };
// function handleDate(date, div) {
//   let todayDate = new Date();
//   let endDate = new Date(date);
//   let seconds = 24 * 60 * 60 * 1000;
//   let daysLeft = Math.floor((endDate - todayDate) / seconds);
//   if (daysLeft < 0) {
//     daysLeft = 0;
//     // console.log(e);
//     div.style.color = "red";
//   }
//   return daysLeft;
// }
