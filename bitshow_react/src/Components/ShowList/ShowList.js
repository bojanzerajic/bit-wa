import React from 'react'
import './ShowList.css'
import { Data } from '../Data/Data'
import { Show } from './Show/Show'


class ShowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Data().then(data => {
            console.log(data);
            this.setState({ data: data })
        })

    }
    render() {
        return <div className='ShowList__headline'>
            <h1>Popular Shows</h1>
            <div className='Showlist__container'>
                {this.state.data.slice(0,49).map(data => <Show key={data.id} name={data.name} image={data.image.medium} />)}
            </div>
        </div>
    }
}
export { ShowList }