import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BellOutlined,
  DownloadOutlined,
  CalendarOutlined,
  UserAddOutlined,
  SearchOutlined,
  QuestionOutlined,
  UserOutlined
} from '@ant-design/icons';
import Home from './Components.js/Home';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    
  };

  render() {
    return (
      <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={true}>
         <br />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={ <BellOutlined style={{fontSize:"20px",color:"white"}} />}>
                <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DownloadOutlined style={{fontSize:"20px",color:"white"}} />}>
            <Link to="/download">Download</Link>
            </Menu.Item>
            
            <Menu.Item key="3" icon={<CalendarOutlined style={{fontSize:"20px",color:"white"}}  />}>
             
             </Menu.Item>
             <Menu.Item key="4" icon={<UserAddOutlined style={{fontSize:"20px",color:"white"}}  />}>
             
             </Menu.Item>
             <Menu.Item key="5" icon={<SearchOutlined style={{fontSize:"20px",color:"white"}}  />}>
             
             </Menu.Item>
             <Menu.Item key="6" icon={<QuestionOutlined style={{fontSize:"20px",color:"white"}}  />}>
             
             </Menu.Item>
             <Menu.Item key="7" icon={<UserOutlined style={{fontSize:"24px",color:"white"}}  />}>
             
             </Menu.Item>
          </Menu>
        </Sider>
        <Route path="/home" component={Home} exact={true} />
      </Layout>
        
      </BrowserRouter>
    );
  }
}

export default App