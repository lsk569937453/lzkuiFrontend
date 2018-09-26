
import dva from 'dva';
import './index.css';
import Left from './models/Left'

// 1. Initialize
const app = dva({
    initialState: { 
   Left:{ path: [{ title: 'root', key: '/',father:'/' }] },
   MainLayout:{
     data1:"st1",
     data2:'st23'
   }
  }
}
  
);

app.model(require("./models/Left").default);

app.model(require("./models/mainLayout").default);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
