import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';
import AuthorityTable from './components/AuthorityTable';

export default class AddTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-tags-page">
        {/* 创建活动的表单 */}
        <CreateActivityForm />
        {/* 权限管理类的表格 */}
        <AuthorityTable />
      </div>
    );
  }
}
