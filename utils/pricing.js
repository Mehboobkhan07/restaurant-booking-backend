exports.getPricingMultiplier = (timeStr) => {
  const hour = parseInt(timeStr.split(':')[0], 10);
  if (hour >= 18 && hour <= 21) return 1.5; // 6PM–9PM = peak hours
  return 1.0;
};
