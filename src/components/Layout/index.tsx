import React from 'react';
import './../../App.less';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import NavBar from '../shared/NavBar';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  return (
    <div className='App wormhole-bg'>
      <Layout title={LABELS.APP_TITLE}>
        <Header className='App-Bar'>
          <NavBar />
        </Header>
        <Content style={{ padding: '0 50px' }}>{props.children}</Content>
      </Layout>
    </div>
  );
});
