import React from 'react';
import Layout from '../components/MyLayout.js';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStore} from "/modules/about/action";
import {Button, DatePicker, Form, InputNumber, Select, Slider, Switch} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

@connect(
    (state, ownProps) => {
        return {
            about: state.about
        };
    },
    (dispatch, ownProps) => {
        return {
            changeStore: bindActionCreators(changeStore, dispatch)
        };
    }
)
export default class About extends React.Component {
    static async getInitialProps({store, isServer, pathname, query}) {
        return {
            isServer: isServer,
            pathname: pathname,
            query: query
        }
    }

    render() {
        return (
            <Layout>
                <div>
                    <p>This is the about page</p>
                </div>
                <Form layout='horizontal'>
                    <FormItem
                        label='Input Number'
                        labelCol={{span: 8}}
                        wrapperCol={{span: 8}}
                    >
                        <InputNumber size='large' min={1} max={10} style={{width: 100}} defaultValue={3}
                                     name='inputNumber'/>
                        <a href='#'>Link</a>
                    </FormItem>

                    <FormItem
                        label='Switch'
                        labelCol={{span: 8}}
                        wrapperCol={{span: 8}}
                    >
                        <Switch defaultChecked name='switch'/>
                    </FormItem>

                    <FormItem
                        label='Slider'
                        labelCol={{span: 8}}
                        wrapperCol={{span: 8}}
                    >
                        <Slider defaultValue={70}/>
                    </FormItem>

                    <FormItem
                        label='Select'
                        labelCol={{span: 8}}
                        wrapperCol={{span: 8}}
                    >
                        <Select size='large' defaultValue='lucy' style={{width: 192}} name='select'>
                            <Option value='jack'>jack</Option>
                            <Option value='lucy'>lucy</Option>
                            <Option value='disabled' disabled>disabled</Option>
                            <Option value='yiminghe'>yiminghe</Option>
                        </Select>
                    </FormItem>

                    <FormItem
                        label='DatePicker'
                        labelCol={{span: 8}}
                        wrapperCol={{span: 8}}
                    >
                        <DatePicker name='startDate'/>
                    </FormItem>
                    <FormItem
                        style={{marginTop: 48}}
                        wrapperCol={{span: 8, offset: 8}}
                    >
                        <Button size='large' type='primary' htmlType='submit'>
                            OK
                        </Button>
                        <Button size='large' style={{marginLeft: 8}}>
                            Cancel
                        </Button>
                    </FormItem>
                </Form>
            </Layout>
        )
    }
};