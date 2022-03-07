import Comment from '../types/comment';

export const comments: Array<Comment> = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'April 2019',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver',
    },
  },
  {
    comment: 'Привет всем! Отличное жилье, советую всем лалал ффывыф. Должен быть отличный текст тут, но нет.',
    date: 'November 2020',
    id: 2,
    rating: 3.2,
    user: {
      avatarUrl: 'https://img2.freepng.ru/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg',
      id: 2,
      isPro: true,
      name: 'Олег',
    },
  },
];
