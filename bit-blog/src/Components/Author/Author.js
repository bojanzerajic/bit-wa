import React from 'react'
import './Author.css'

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleAuthor: []
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(author => this.setState({ singleAuthor: author }, () => console.log(this.state.singleAuthor)))
    }


    render() {
        return <div className='Author__container'>
            <h1>SINGLE AUTHOR</h1>
            <div className='Author__image'>
                <img src='https://via.placeholder.com/150/771796' alt='bla bla'></img>
                <div className='Author__titleWrap'>
                    <h2>{this.state.singleAuthor.name}</h2>
                    <p>username: {this.state.singleAuthor.username} </p>
                    <p> email: {this.state.singleAuthor.email} </p>
                    <p> phone: {this.state.singleAuthor.phone} </p>
                </div>
            </div>
            <div className='Author__address'>
                <div className='Author__address_text'>
                    <h2>Address</h2>
                    <p>street:   </p>
                    <p>city: </p>
                    <p>zipcode: </p>
                </div>
                <img src='https://www.dsdinc.com/wp-content/uploads/2017/08/map-placeholder.jpg' alt='bla bla' />
            </div>
            <div>
                <h2>Company</h2>
                <p>name: </p>
                <p>slogan: </p>
            </div>
        </div>
    }
}
export { Author }
