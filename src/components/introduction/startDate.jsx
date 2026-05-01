const calculateExperience = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const formatted = years + (months > 0 ? parseFloat(`.${months}`) : 0);
  return formatted.toFixed(1);
};

export default calculateExperience;