const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slotDataFormate = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + Months[Number(dateArray[1] - 1)] + " " + dateArray[2]
    );
  };
  export default slotDataFormate;
  