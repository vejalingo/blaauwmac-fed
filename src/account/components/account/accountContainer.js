import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import Account from './'
import * as accountActions from '../../state/account/accountActions'

class AccountContainer extends Component {
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
    return <Account {...this.props} />
  }
}

const mapStateToProps = ({ shared }) => ({
  ...shared.list
})

const mapDispatchToProps = accountActions

AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContainer)

export default Intl({
  account: 'account.account'
})(AccountContainer)
