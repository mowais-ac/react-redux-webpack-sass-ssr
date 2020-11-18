import React from 'react'
import { NavLink } from 'react-router-dom'

import MetaTags from 'react-meta-tags'

export default class SEOTags extends React.Component {
    render(){
        return (
            <MetaTags>
                <title>{this.props.title} - applist.com </title>
                <meta name='description' content={this.props.description} />
            </MetaTags>
        )
    }
}
