import React from 'react'
import { connect } from 'react-redux'
import { Container,} from 'semantic-ui-react'
import {listCountries} from "../redux/actions/country-list-actions";
import { Menu, Loader } from 'semantic-ui-react'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.listCountries(listCountries())
    }
    render () {
        const {countryList} = this.props
        return (
            <main className="main-wrapper">
                <Container text>
                    <br/><br/><br/>
                    <h1>List of countries</h1>
                    {!countryList.searching ? (
                        <Menu vertical>
                            {countryList.data.map(item => {
                                return (
                                    <Menu.Item link>{item.name}</Menu.Item>
                                )
                            })}
                        </Menu>
                    ) : (
                        <Loader active inline='centered' />
                    )}
                </Container>
            </main>
        )
    }
}

const mapStateToProps = state => {
    const { countryListReducer } = state
    return {
        countryList: countryListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCountries: (data) => dispatch(data),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
