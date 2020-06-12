import React from 'react'
import { Iframe } from './Iframe/Iframe'

class VideoPage extends React.Component {
    componentDidMount() {
        fetch('')
    }

    render() {
        return (
            <div>
                <Iframe linkId={this.props.linkId} />
                {/* <recomended/> */}
            </div>
        )
    }
}
export { VideoPage }