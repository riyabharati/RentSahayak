import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { InputNumber, Select, Upload } from 'antd';
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { Table, Space, Tag, Button, Modal, Input, Layout, Form } from 'antd';


import './Dashboard.css'
import { apiDeleteHouse, apiFetchAllHouse, apiFetchHouse, apiPostHouse, apiUpdateHouse } from '../../ApiService/AuthApi';

const { Column, ColumnGroup } = Table;
const { Content, Header, Footer, Sider } = Layout

export default function Dashboard() {

  const [modalVisibbility, setModalVisibility] = useState(false)
  const [AddingProperty, setAddingProperty] = useState(null)
  const [editingProperty, setEditingProperty] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const columns = [

    {
      key: 'title',
      title: 'Property Name',
      dataIndex: "title",
      fixed: 'left',
      width: 90

    },
    {
      key: 'description',
      title: 'Property Description',
      dataIndex: "description",
      fixed: 'left',
      width: 90

    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: "price",
      fixed: 'left',
      width: 80,

      sorter: (a, b) => a.price - b.price
    },
    {
      key: 'images',
      title: 'Images',
      dataIndex: "images",
      width: 90,
      fixed: 'left'

    },
    {
      key: 1,
      title: 'floors',
      dataIndex: "features",
      render: (features) => features?.floors,
      width: 90

    },
    {
      key: 2,
      title: 'bedroom',
      dataIndex: "features",
      render: (features) => features?.bedroom,
      width: 90

    },
    {
      key: 3,
      title: 'bathroom',
      dataIndex: "features",
      render: (features) => features?.bathroom,
      width: 90

    },
    {
      key: 4,
      title: 'parkingSpace',
      dataIndex: "features",
      render: (features) => features?.parkingSpace,
      width: 90,

    },
    {
      key: 5,
      title: 'furnishing',
      dataIndex: "features",
      render: (features) => features?.furnishing,
      width: 90,

    },
    {
      key: 6,
      title: 'roadSize',
      dataIndex: "features",
      render: (features) => features?.roadSize,
      width: 90,

    },
    {
      key: 7,
      title: 'roadType',
      dataIndex: "features",
      width: 90,
      render: (features) => features?.roadType

    },
    {
      key: 8,
      title: 'areaSqFeet',
      dataIndex: "features",
      width: 90,
      render: (features) => features?.areaSqFeet

    },

    {
      key: 'actions',
      title: "Actions",
      fixed: 'right',
      width: 90,
      render: (record) => {
        return (
          <>

            <FiEdit onClick={() => { editProperty(record) }} />
            <FiTrash2 onClick={() => { onDeleteProperty(record) }} style={{ color: "red", marginLeft: 22, marginTop: -14 }} />

          </>
        )
      }
    }
  ];
  useEffect(() => {
    const fetchHouse = async () => {
      console.log("hi")
      try {
        const res = await apiFetchAllHouse();
        setDataSource(res.data.data)
        console.log('responsess',res)

       
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchHouse()
  }, [])

  const handleFormSubmit = (async (values) => {
    try {
      
      const res = await apiPostHouse(values)
      console.log("hi")
      setDataSource(pre=>{
        return[...pre,res.data.data]
      })
      console.log("response",res)
      

    }
    catch (e) {
      console.log(e)

    }
  })
 

  const onAddProperty = (record) => {
    setModalVisibility(true)
    setAddingProperty({ ...record })


  }
  const handleModalCancel = () => {
    setModalVisibility(false);
    setAddingProperty(null);
   
    setEditingProperty(null);

    

  }
  const onDeleteProperty = (record) => {
    Modal.confirm({
      title: "Are you sure,you want to delte this property? ",
      okText: "Yes",
      okType: "danger",
      onOk: async() => {
        const res=await apiDeleteHouse(record._id)
        if(res.data.success){

          setDataSource((pre) => {
            return pre.filter((property) => property._id !== record._id)
          })
        }
      }
    })


  }
  const handleEdit=async(value)=>{
   
    const res =await apiUpdateHouse(value,editingProperty._id)

    if(res.data.success){

      setDataSource((pre) => {
        return pre.map((property) => {
          if (property._id === res.data.data._id) {
            return res.data.data;
          }
          else {
            return property;
          }
        })
      })
    }
    console.log(res.data.data)

    

  }
  console.log('data',dataSource)
  const editProperty = (record) => {

    setModalVisibility(true);
    setEditingProperty({ ...record })

  }
  



  return (
    <Layout>
      <Header className=' p-0 '><Navbar className='position-fixed' /></Header>
      <Layout>
        <Sider className='sider'><Sidebar /></Sider>
        <Content className='App-header main'>
          <Button onClick={onAddProperty}>Add a new Property</Button>
          <Table
            className='table-main'
            dataSource={dataSource}
            columns={columns}


            scroll={{
              x: 1500,
            }}
          >

          </Table>
          
          <Modal title={editingProperty ?'edit property':'add property'}
            
            visible={modalVisibbility}
            okText="Save"
            destroyOnClose={true}
            
            onCancel={handleModalCancel}
            footer={false}
          >
            <Form onFinish={editingProperty?handleEdit:handleFormSubmit} initialValues={editingProperty}>
              <Form.Item name="title" label="Property title" rules={[
                {
                  
                  required: true,
                  message: 'Property title is required.'
                }
              ]} >
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Property description"  rules={[{required:true,message:'Please enter the description'}]} >
                <Input />
              </Form.Item>
              <Form.Item name="price" label="Property price" rules={[{required:true,message:'Please enter the price'}]} >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["features", "floors"]} label="Property floors">
                <InputNumber min={0} max={10} />
              </Form.Item>
              <Form.Item name={["features", "bedroom"]} label="Property bedroom">
                <InputNumber min={0} max={999} />
              </Form.Item>
              <Form.Item name={["features", "bathroom"]} label="Property bathroom">
                <InputNumber min={0} max={5} />
              </Form.Item>
              <Form.Item name={["features", "parkingSpace"]} label="Property parkingSpace">
                <Input />
              </Form.Item>
              <Form.Item name={['features', 'furnishing']} label="Property furnishing">
                <Select placeholder="select furnishing type">
                  <Select.Option value="NON">Non</Select.Option>
                  <Select.Option value="SEMI">Semi</Select.Option>
                  <Select.Option value="FULL">Full</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['features', 'roadSize']} label="Property roadsize">
                <Select placeholder="select roadsize ">
                  <Select.Option value=">5">less than 5 Ft</Select.Option>
                  <Select.Option value="5-8">5 - 8 Ft</Select.Option>
                  <Select.Option value="8-12">8 - 12 Ft</Select.Option>
                  <Select.Option value="12-20">12 - 20 Ft</Select.Option>
                  <Select.Option value="20<">Above 20 Ft</Select.Option>
                  <Select.Option value="NULL">No road access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['features', 'roadType']} label="Property furnishing">
                <Select placeholder="select furnishing type">
                  <Select.Option value="PITCHED">Pitched</Select.Option>
                  <Select.Option value="PAVELED">Paveled</Select.Option>
                  <Select.Option value="GRAVEL">Gravel</Select.Option>
                  <Select.Option value="SOIL">Soil</Select.Option>
                  <Select.Option value="NULL">No road</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={["features", "areaSqFeet"]} label=" areaSqFeet">
                <InputNumber min={0} max={100} />
              </Form.Item>
              <Form.Item>
                <Button htmlType='submit'>Submit</Button>
              </Form.Item>
            </Form>
           





            <Upload value={AddingProperty?.images} >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>



          </Modal>

        </Content>

      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
  }
