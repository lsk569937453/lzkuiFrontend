import mockjs from 'mockjs';



export default {
    'GET /api/project/notice': mockjs.mock({
        'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
      }),
    'POST /zk/getChildren': (req, res) => {
        res.send({ message: 'Ok' });
    },
};

