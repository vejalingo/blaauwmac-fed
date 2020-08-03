import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { Link } from 'react-router-dom'
import * as accountActions from '../../state/account/accountActions'
import { Typography, Form, Input, Button, Icon } from 'antd'

const { Title } = Typography

class AccountForm extends Component {
  componentDidMount() {
    const { accId, fetchAccount, formType } = this.props
    if (formType === 'edit') fetchAccount(accId)
  }

  handleSubmit = e => {
    const {
      accId,
      updateAccount,
      createAccounts,
      formType,
      form: { validateFields }
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        formType === 'edit' ? updateAccount(accId, values) : createAccounts(values)
      }
    })
  }
  render() {
    const {
      copy,
      form: { getFieldDecorator },
      formItem,
      formType
    } = this.props

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.form(`${formType}Account`)}
        </Title>

        <div className="content-wrapper">
          <Form
            layout="horizontal"
            onSubmit={this.handleSubmit}
            className="ant-advanced-search-form"
          >
            <Form.Item label="Name" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('name', {
                rules: [{ required: false }]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Description" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('class_description')(<Input />)}
            </Form.Item>

            <Form.Item label="Account Number" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('account_number')(<Input />)}
            </Form.Item>

            <Form.Item label="Created By" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
              {getFieldDecorator('created_by')(<Input />)}
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Link to="/account" style={{ marginLeft: '10px' }}>
                <Button type="secondary">
                  <Icon type="left" style={{ paddingRight: '5px' }} />
                  Cancel
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  }
}

AccountForm = Form.create({
  name: 'account_form',
  mapPropsToFields({ item }) {
    if (item) {
      return {
        name: Form.createFormField({
          ...item.name,
          value: item.name
        }),
        class_description: Form.createFormField({
          ...item.class_description,
          value: item.class_description
        }),
        account_number: Form.createFormField({
          ...item.account_number,
          value: item.account_number
        }),
        created_by: Form.createFormField({
          ...item.created_by,
          value: item.created_by
        })
      }
    }
  }
})(AccountForm)

const mapStateToProps = ({ shared: { item } }, { match: { params } }) => ({
  item: item.item,
  ...params
})

const mapDispatchToProps = accountActions

AccountForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm)

export default Intl({
  form: 'account.account.form'
})(AccountForm)
