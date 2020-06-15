import React from 'react'
import { Iframe } from './Iframe/Iframe'
import { RelatedVideo } from './RelatedVideo/RelatedVideo'
import './VideoPage.css'

class VideoPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            relatedVideos: [],
        }
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.id}&type=video&key=AIzaSyA9m33SXEPnSnmI8j-1h0LL1TdCn5P1Wqg`)
            .then(res => res.json())
            .then(data => this.setState({ relatedVideos: data.items }))
    }


    render() {
        return (
            <div className='VideoPage__container'>
                <Iframe videoId={this.props.id} />    
                    <div className='VideoPage__relatedVideos'>
                        {this.state.relatedVideos.map((item, i) => <RelatedVideo key={i} name={item.snippet.title} image={item.snippet.thumbnails.default.url} description={item.snippet.description} channelTitle={item.snippet.channelTitle} id={item.id.videoId} getId={this.props.getId} />)}
                    </div>
            </div>
        )
    }
}
export { VideoPage }

