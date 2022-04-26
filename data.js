const products = [
  {
    id: 1,
    title: 'กระเพราไก่',
    content: 'กระเพราไก่',
    image: 'https://i.pinimg.com/236x/4d/c0/0b/4dc00b6b7bd5199203338107abcb0b24.jpg',
    price: 45
  },
  {
    id: 2,
    title: 'กระเพราหมู',
    content: 'กระเพราหมูชิ้น',
    image: 'https://i.pinimg.com/236x/47/3a/a6/473aa6a46c6f4e59ec11bb5c29598881.jpg',
    price: 45
  },
  {
    id: 3,
    title: 'กระเพราหมูสับ',
    content: 'กระเพราหมูสับ',
    image: 'https://i.pinimg.com/236x/4d/3c/2d/4d3c2d40c6a197902ed7b8943d03da7b.jpg',
    price: 40
  },
  {
    id: 4,
    title: 'กระเพราเนื้อ',
    content: 'กระเพราเนื้อ',
    image: 'https://i.pinimg.com/236x/59/cd/80/59cd80e2bd9f81b547e9b61b38a3a1b5.jpg',
    price: 50
  }
]

module.exports = function () {
  return {
    products
  }
}
