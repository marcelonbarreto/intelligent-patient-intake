export function generateRecommendation(data) {
  const { age, symptoms } = data;
  return age > 50 || symptoms.includes('severe') ? 'High Risk' : 'Low Risk';
}