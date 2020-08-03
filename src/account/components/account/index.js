import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { Link } from 'react-router-dom'
import { Typography, Form, Input, Button } from 'antd'
import AccountList from './List'
import * as accountActions from '../../state/account/accountActions'

const { Title } = Typography
const { Search } = Input

class Account extends Component {
  componentDidMount() {
    const { fetchAccounts } = this.props
    fetchAccounts({ perPage: this.perPage })
  }

  get perPage() {
    return 10
  }

  onSearch = value => {
    this.filter(value)
  }

  filter = val =>
    this.props.fetchAccounts({
      term: val || undefined
    })

  render() {
    const { copy, listItems, deleteAccount, updateAccount, fetchAccounts } = this.props

    const filters = (
      <Form layout="inline">
        <Form.Item>
          <Link to="/account/create">
            <Button type="primary">Create Account</Button>
          </Link>
        </Form.Item>
        <Form.Item>
          <Link to="/account/sub_users/add">
            <Button type="secondary">Create Sub-User</Button>
          </Link>
        </Form.Item>
        <Form.Item style={{ float: 'right' }}>
          <Search placeholder="Search..." onSearch={this.onSearch} enterButton />
        </Form.Item>
      </Form>
    )

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.account('title')}
          <Title type="secondary" level={4}>
            {copy.account('subTitle')}
          </Title>
        </Title>

        <div className="filter-wrapper">{filters}</div>
        <div className="content-wrapper">
          <AccountList
            accountData={listItems}
            pageSize={this.perPage}
            onDelete={deleteAccount}
            onUpdate={updateAccount}
            onRefresh={fetchAccounts}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ shared }) => ({
  ...shared.list
})

const mapDispatchToProps = accountActions

Account = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

export default Intl({
  account: 'account.account'
})(Account)
