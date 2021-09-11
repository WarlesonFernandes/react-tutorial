import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card} from 'antd';

class Forms extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState;

    handleChange= (event) => {
        const {name, value} =  event.target;

        this.setState({
            [name] : value
        });
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;
        
        const onFinish = (values: any) => {
            console.log('Success:', values);
          };
        
          const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
          };

        return(
            <Card bordered={false} style={{width: '100%', marginTop: 16 }}>
                <Card style={{ width: '100%' }}>
                    <Form
                    name="basic"
                    layout="vertical"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={this.handleChange} />
                    
                    </Form.Item>

                    <Form.Item
                        label="Job"
                        name="job"
                        rules={[{ required: true, message: 'Please input your job!' }]}
                    >
                        <Input
                            type="text"
                            name="job"
                            id="job"
                            value={job}
                            onChange={this.handleChange} />
                    
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={this.submitForm}>
                        Submit
                        </Button>
                    </Form.Item>
                    
                    </Form>
                </Card>
            </Card>
        );
    }
}

export default Forms;
