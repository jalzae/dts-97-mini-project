import React from 'react'
import { connect } from 'react-redux'

export const user = (props) => {
    return (
        <div>user</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(user)