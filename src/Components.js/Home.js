import React from 'react'

import { Layout, Menu, Row, Col, Input,Button, Typography } from 'antd';
import {
  AppstoreOutlined, MailOutlined, SettingOutlined,
MenuFoldOutlined,
MenuUnfoldOutlined,
  HomeFilled ,
  PlusCircleOutlined,
} from '@ant-design/icons';
import WebDesignComponentDemo from './WebDesignComponentDemo';
const { Search } = Input;
const { Title } = Typography;

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
    input : false,
    topic : '',
    topicsArray : []
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleAdd = () => {
    this.setState({
      input : true
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleTopicSubmit = (e) => {
    e.preventDefault()
    const topic = this.state.topic
    this.setState((prevState) => {
      return {
        topicsArray : prevState.topicsArray.concat(topic),
        topic:'',
        input : false
      }
    })
  }

  handleTopicData = (topic) => {
    console.log(topic)
  }

  handleClose = () => {
    this.setState({
      input : false
    })
  }

  render() {
    return (
      <Layout>
        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
        <br />
        <h2 style={{textAlign:"center"}}>Workspaces</h2>
        <Search
            placeholder="Filter Boards"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            />
            
            {/* <Menu.Item key="1" icon={<HomeFilled style={{fontSize:"20px",color:"purple"}}/>}>
              Main <PlusCircleOutlined style={{textAlign:"right"}}/>
            </Menu.Item> */}
          
            <Row>
                <Col span={4}>
                    <br />
                    <HomeFilled style={{fontSize:"24px",color:"purple"}}/>
                </Col>
                <Col span={10}>
                <br />
                    <h2 style={{fontSize:"20px"}}>Main</h2>
                </Col>
                <Col span={8} offset={2}>
                <br />
                    <PlusCircleOutlined style={{fontSize:"28px"}} onClick={this.handleAdd}/>
                </Col>
            </Row>
            <Row>
            <Col>
              <Menu>
                  <Menu.Item>
                     <a><Title level={4}>Web Design</Title></a>
                  </Menu.Item>
                  <Menu.Item>
                      <a><Title level={4}>Mobile Development</Title></a>
                  </Menu.Item>
             </Menu>
              </Col>
              <Col>
                {
                  this.state.input && <div><form onSubmit={this.handleTopicSubmit}><Input placeholder="Add a Topic" onChange={this.handleChange} name="topic" value={this.state.topic} /><Button type="primary" htmlType="submit" style={{width:"50%"}}>Add</Button><Button type="primary" onClick={this.handleClose} style={{width:"50%"}} danger>Close</Button></form></div>
                }
              </Col>
              <Col>
                  {
                    this.state.topicsArray.length >= 0 && this.state.topicsArray.map((topic,i)=>{
                      return(
                        <div key={topic+'225'}>
                          
                          <Menu>
                              <Menu.Item key={i+1} onClick={()=>{this.handleTopicData(topic)}}>
                              <a><Title level={4} onClick={()=>{this.handleTopicData(topic)}}>{topic}</Title></a>
                            </Menu.Item>
                          </Menu>
                        </div>
                      )
                    })
                  }
              </Col>
            
            </Row>
            
           
        </Sider>
        <Layout>
                <WebDesignComponentDemo />
        </Layout>
      </Layout>
    );
  }
}

export default Home


