const baseUrl = 'https://newsapi.org/v2/top-headlines';
const gistUrl = 'https://gist.githubusercontent.com/dwaps/3a1f36be18e28f88376aeb0d27c2fffb/raw';
const urlMap = new Map([
  [ `${baseUrl}?page=1`, `${gistUrl}/fdf335d21ad88faceddce29117ac3c364faa4ac4/top-headlines%253Fpage=1` ],
  [ `${baseUrl}?page=2`, `${gistUrl}` ],
  [ `${baseUrl}?page=3`, `${gistUrl}` ],
  [ `${baseUrl}?page=4`, `${gistUrl}` ],
  [ `${baseUrl}?page=5`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fpage=5` ],

  [ `${baseUrl}?category=business`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=business` ],
  [ `${baseUrl}?category=entertainment`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=entertainment` ],
  [ `${baseUrl}?category=general`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=general` ],
  [ `${baseUrl}?category=health`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=health` ],
  [ `${baseUrl}?category=science`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=science` ],
  [ `${baseUrl}?category=sports`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=sports` ],
  [ `${baseUrl}?category=technology`, `${gistUrl}/80bb4034608bb5b352c144071ce7541c761853f7/top-headlines%253Fcategory=technology` ],
]);

export const environment = {
  production: false,
  api: urlMap,
  apiKey: '',
};
