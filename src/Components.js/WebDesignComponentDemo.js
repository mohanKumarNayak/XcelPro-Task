import React from 'react'
import { Layout, Row, Col, Typography, Button, Input,Modal, Select, DatePicker } from 'antd'
import { StarOutlined, UserOutlined } from '@ant-design/icons'
import {GiPlug} from 'react-icons/gi'
import {AiOutlineRobot,AiOutlineTable,AiTwotoneEyeInvisible,AiFillDownCircle} from 'react-icons/ai'
import {FcVideoCall} from 'react-icons/fc'
import {FaUsers,FaUserCircle} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import {BsChevronDown,BsPeopleCircle} from 'react-icons/bs'
import {RiMenu5Line} from 'react-icons/ri'
const {Option} = Select
const {Title} = Typography


class WebDesignComponentDemo extends React.Component{
    constructor(){
        super()
        this.state = {
            task : [],
            visible: false,
            title:'',
            status : '',
            dueDate : '',
            priority : ''
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };
      
      handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
      }

      handleStaus = (value) => {
          this.setState({
              status : value
          })
      }

      handlePriority = (value) => {
          this.setState({
              priority : value
          })
      }

      handleDate = (value) => {
            this.setState({
                dueDate : String(value._d).slice(4,10)
            })
      }

      handleSubmit = (e) => {
          e.preventDefault()
          const formData = {
            title:this.state.title,
            status : this.state.status,
            dueDate : this.state.dueDate,
            priority : this.state.priority
          }

          this.setState((prevState) => {
            return {
             task : prevState.task.concat(formData),
             visible: false,
             title:'',
             status : '',
             dueDate : '',
             priority : ''

            }
          })
      }

    render(){
        console.log(this.state.task)
        return(
            <Layout style={{backgroundColor:"white"}}>
                <br />
                <Row>
                    <Col>
                        <Title level={2}>Web Designing <StarOutlined /></Title>
                    </Col>
                        <Col offset={4}>
                        <FaUserCircle style={{fontSize:"38px"}} />
                        </Col>
                        <Col offset={1}>
                        <Button size="large" style={{borderRadius:"20px"}}><GiPlug /> / 0</Button>
                        <Button size="large" style={{borderRadius:"20px"}}><AiOutlineRobot /> / 0</Button>
                        </Col>
                        <Col offset={1}>
                        <Button size="large" style={{borderRadius:"20px"}}><FcVideoCall /> Start Zoom Call</Button>
                        </Col>
                        <Col offset={1}>
                        <Button size="large" > <FaUsers /> / 0 </Button>
                        </Col>
                        <Col>
                        <Button size="large">Activities / 0</Button>
                        </Col>
                    
                </Row>
                <br />
                <Row>
                <Col>
                <Row>
                <AiOutlineTable size="25px"/> <Title level={4} >Main Table</Title>
                </Row>
                </Col>
                <Col offset={8}>
                    <Button type="primary" size="middle" style={{borderRadius:"20px"}}>New Item</Button>
                </Col>
                <Col offset={1}>
                    <Input placeholder="Search / Filter Board" style={{borderRadius:"20px"}}/>
                </Col>
                <Col offset={1}>
                    <BsPeopleCircle size="30px"/>
                </Col>
                <Col offset={1}>
                    <AiTwotoneEyeInvisible size="30px"/>
                </Col>
                <Col offset={1}>
                    <RiMenu5Line size="30px"/>
                </Col>
                </Row>
                <br />
               <Row>
                   <Col offset={1}>
                        <Title level={4} style={{color:"#5396ed"}}><AiFillDownCircle />Things to do</Title>
                   </Col>
               </Row>
              
               <Row>
                   <Col span={8} offset={2}>
                   <Title level={4}>Title</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Owner</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Status</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>DueDate</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Priority</Title>
                   </Col>
               </Row>
               
               {
                   this.state.task.length >= 0 && this.state.task.map((task,i)=>{
                       return (
                           <Row>
                               <Col span={8} offset={2}  style={{height:"35px",backgroundColor:"#cccbc8"}}>
                                    <h4> {i+1} - {task.title}</h4>
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:"#cccbc8"}}>
                                    <FaUserCircle size="middle" />
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:task.status == "working" && "#fa6432" || task.status == "stuck" && "#f71414" || task.status == "done" && "#00d43f" || task.status == "review" && "#0995d6"}}>
                                    <h4 align="center" style={{color:"white"}}>
                                        {
                                           task.status == "working" && "Working on it" 
                                        }
                                        {
                                             task.status == "stuck" && "Stuck"
                                        }
                                        {
                                            task.status == "done" && "Done"
                                        }
                                        {
                                            task.status == "review" && "Review"
                                        }
                                    </h4>
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:"#cccbc8"}}>
                                    {task.status == "done" ? <h4 align="center"><del>{task.dueDate}</del></h4> : <h4 align="center">{task.dueDate}</h4>}
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:task.priority == "low" && "#50a9f2" || task.priority == "medium" && "#f917fc" || task.priority == "high" && "#f54545" || task.priority == "urgent" && "#0a0202"}}>
                                    <h4 align="center" style={{color:"white"}}>
                                       {
                                           task.priority == "low" && "Low" 
                                       }
                                       {
                                           task.priority == "medium" && "Medium"
                                       }
                                       {
                                           task.priority == "high" && "High"
                                       }
                                       {
                                           task.priority == "urgent" && "Urgent"
                                       }
                                    </h4>
                               </Col>
                           </Row>
                       )
                   })
               }


               <Row>
                   <Col offset={2}>
                    <Button type="primary" size="middle" onClick={this.showModal}>
                        Add Topic
                        </Button>
                        <Modal
                        title="Add Topic"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                            <form onSubmit={this.handleSubmit}>
                                <Input type="text" placeholder="Title" style={{width:"70%"}} name="title" value={this.state.title} onChange={this.handleChange}  /><br /><br />
                                <Select onChange={this.handleStaus} placeholder="Select status of the work" style={{width:"70%"}} >
                                    <Option value="working">Working on it</Option>
                                    <Option value="stuck">Stuck</Option>
                                    <Option value="done">Done</Option>
                                    <Option value="review">Waiting for review</Option>
                                </Select><br /><br />
                                <DatePicker style={{width:"70%"}} onChange={this.handleDate} /><br /><br />
                                <Select placeholder="Priority of work" style={{width:"70%"}} onChange={this.handlePriority}>
                                    <Option value="low">Low</Option>
                                    <Option value="medium">Medium</Option>
                                    <Option value="high">High</Option>
                                    <Option value="urgent">Urgent</Option>
                                </Select><br /><br />
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </form>
                        </Modal>
                    </Col>
               </Row>
               <br /><br />
               <Row>
                   <Col offset={1}>
                        <Title level={4} style={{color:"#05fa2a"}}><AiFillDownCircle />Done</Title>
                   </Col>
               </Row>
               <Row>
                   <Col span={8} offset={2}>
                   <Title level={4}>Title</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Owner</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Status</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>DueDate</Title>
                   </Col>
                   <Col span={2}>
                        <Title level={4}>Priority</Title>
                   </Col>
               </Row>

               {
                   this.state.task.length >= 0 && this.state.task.filter((task,i)=>{
                       return task.status == "done"
                   }).map((task,i)=>{
                       return (
                           <Row>
                                <Col span={8} offset={2}  style={{height:"35px",backgroundColor:"#4dff67"}}>
                                    <h4> {i+1} - {task.title}</h4>
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:"#4dff67"}}>
                                    <FaUserCircle size="middle" />
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:"#4dff67"}}>
                                    <h4 align="center" style={{color:"white"}}>
                                        {
                                            task.status == "done" && "Done"
                                        }
                                    </h4>
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:"#4dff67"}}>
                                     <h4 align="center"><del>{task.dueDate}</del></h4>
                               </Col>
                               <Col span={2} style={{height:"35px",backgroundColor:task.priority == "low" && "#50a9f2" || task.priority == "medium" && "#f917fc" || task.priority == "high" && "#f54545" || task.priority == "urgent" && "#0a0202"}}>
                                    <h4 align="center" style={{color:"white"}}>
                                       {
                                           task.priority == "low" && "Low" 
                                       }
                                       {
                                           task.priority == "medium" && "Medium"
                                       }
                                       {
                                           task.priority == "high" && "High"
                                       }
                                       {
                                           task.priority == "urgent" && "Urgent"
                                       }
                                    </h4>
                               </Col>
                           </Row>
                       )
                   })
               }
               
            </Layout>
        )
    }
}

export default WebDesignComponentDemo