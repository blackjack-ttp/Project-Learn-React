const data = [
  {
    lable: 'HOME',
    to: '/',
  },
  {
    lable: 'PROJECTS',
    to: 'projects',
    children: [
      {
        lable: 'PROJECT1',
        to: '/projects/project1',
      },
    ],
  },
  {
    lable: 'USESTATES',
    to: 'usestates',
    children: [
      {
        lable: 'EXERCISE 0',
        to: '/usestates/exercise0',
      },
      {
        lable: 'EXERCISE 1',
        to: '/usestates/exercise1',
      },
      {
        lable: 'EXERCISE 2',
        to: '/usestates/exercise2',
      },
      {
        lable: 'EXERCISE 3',
        to: '/usestates/exercise3',
      },
      {
        lable: 'EXERCISE 4',
        to: '/usestates/exercise4',
      },
    ],
  },
  {
    lable: 'USEEFFECTS',
    to: 'useeffects',
    children: [
      {
        lable: 'EXERCISE 0',
        to: '/useeffects/exercise0',
      },
      {
        lable: 'EXERCISE 1',
        to: '/useeffects/exercise1',
      },
      {
        lable: 'EXERCISE 2',
        to: '/useeffects/exercise2',
      },
    ],
  },
  {
    lable: 'USECONTEXT',
    to: 'usecontext',
  },
];
export default data;
