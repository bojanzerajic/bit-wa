import React from 'react'
import { SingleVideo } from './SingleVideo/SingleVideo'


class PlayList extends React.Component {
    render() {
        if (this.props.videos !== []) {
            return (
                <div>
                    {this.props.videos.map((item, i) => <SingleVideo key={i} id={item.id.videoId} playVideo={this.props.playVideo} image={item.snippet.thumbnails.default.url} title={item.snippet.title} description={item.snippet.description} channelTitle={item.snippet.channelTitle} />)}

                </div>
            )
        } else { return null }
    }

}
export { PlayList }
