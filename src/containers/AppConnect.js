import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import * as allActions from '../actions/index';
import {Layout, Breadcrumb} from 'antd';
const {Header, Content, Footer} = Layout;
// main component
class IndexApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Header
                    style={{
                        margin: '15px 10px 0',
                        padding: 10,
                        background: '#222',
                        minHeight: 50,
                        overflowY: 'scroll',
                        overflowX: 'hidden'
                    }}
                >
                    <Breadcrumb>
                        <Breadcrumb.Item
                            style={{color: '#fff', margin: '0 0 0 10px'}}
                        >
                            <Link style={{color: 'white'}} to="/ChangeState">
                                To ChangeState
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            style={{color: '#fff', margin: '0 0 0 10px'}}
                        >
                            <Link style={{color: 'white'}} to="/Main">
                                To Main
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            style={{color: '#fff', margin: '0 0 0 10px'}}
                        >
                            <Link style={{color: 'white'}} to="/Main/RefsAttr">
                                To RefsAttr
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            style={{color: '#fff', margin: '0 0 0 10px'}}
                        >
                            <Link style={{color: 'white'}} to="/TodoList">
                                To TodoList
                            </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content
                    style={{
                        margin: '15px 10px 0',
                        padding: 10,
                        background: '#ccc',
                        minHeight: 380,
                        overflowY: 'scroll',
                        overflowX: 'hidden'
                    }}
                >

                    {this.props.children}

                </Content>

                <Footer />

            </Layout>
        );
    }
}
const mapStateToProps = state => ({
    btnVal: state.getDataReducer.btnVal,
    name: state.getDataReducer.name,
    age: state.getDataReducer.age,
    loading: state.getDataReducer.loading
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
});
const IndexAppConnect = connect(mapStateToProps, mapDispatchToProps)(IndexApp);
export default IndexAppConnect;
