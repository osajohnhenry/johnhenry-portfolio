const calculateExperience = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (years === 0 && months === 0) {
    return "0";
  }

  if (months === 0) {
    return `${years}`;
  }

  return `${years}.${months.toString().padStart(2, '0')}`;
};

export default calculateExperience;