import React from 'react'
import { Iframe } from './Iframe/Iframe'

class VideoPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {relatedVideos: []}
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.id}&type=video&key=AIzaSyADTLCcOcxT94MLTlJdJdM3MykSOI8KqtE`)
            .then(res => res.json())
            .then(data => console.log(data.items))
    }

    render() {
        return (
            <div>
                <Iframe videoId={this.props.id} />
                {this.state.relatedVideos.map((item, i) => <RelatedVideo name={this.state.relatedVideos} />)}
            </div>
        )
    }
}
export { VideoPage }

// this.setState({relatedVideos: data.items