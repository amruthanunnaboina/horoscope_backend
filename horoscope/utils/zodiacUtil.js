export function getZodiacSign(month, day) {
    const zodiacs = [
      ['Capricorn', 19], ['Aquarius', 18], ['Pisces', 20], ['Aries', 19], ['Taurus', 20],
      ['Gemini', 20], ['Cancer', 22], ['Leo', 22], ['Virgo', 22], ['Libra', 22], ['Scorpio', 21], ['Sagittarius', 21]
    ];
    return day > zodiacs[month][1] ? zodiacs[(month + 1) % 12][0] : zodiacs[month][0];
  }
  