
export function generateStars(value: number): string {
  let result: Array<string> = [];
  for (let i = 1; i <= value; i++) {
    result.push('★');
  }
  for (let i = value; i < 5; i++) {
    result.push('☆');
  }
  return result.join('');
}

export const countryFlags = {
  'United States': '🇺🇸',
  Germany: '🇩🇪',
  Russia: '🇷🇺',
  India: '🇮🇳',
  Pakistan: '🇵🇰',
  Brazil: '🇧🇷',
};

export const ratings = [
  {
    rating: 5,
    title: 'Love it - make a way to save presets',
    message:
      'I love this so much. Just wish I could save my settings so I can swap out songs but keep everything else the same',
    from: 'United States',
  },
  {
    rating: 5,
    title: 'Fantastic!',
    message:
      'Never have I ever become so quickly satisfied with a product. Exactly does the job, also with lots of fine tuning options. Well done 👌👌👌',
    from: 'Germany',
  },
  {
    rating: 5,
    title: 'это шедевральное приложение!!',
    message: 'спасибо что каждый раз делаете его все лучше и лучше, пользуюсь уже год <3',
    from: 'Russia',
  },
  {
    rating: 5,
    title: 'Super best app',
    message: 'Need fast export. Taking more time to export. Need additional visualisation effects.',
    from: 'India',
  },
  {
    rating: 5,
    title: 'Review',
    message: 'This App Is Outstanding. Thanks',
    from: 'Pakistan',
  },
  {
    rating: 4,
    title: 'Great',
    message: 'This app is exactly what I was looking for. Thank’s developers 👏👏👏',
    from: 'Brazil',
  },
];
