import React from 'react'
import { PlayList } from './PlayList/PlayList'
import { Search } from './Search/Search'
import { VideoPage } from './VideoPage/VideoPage'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            videoId: null
        }
    }

    playVideo = (event) => {
        let videoId = event.target.id.videoId;
        this.setState({ videoId: videoId, videos: [] });
    }

    getData = (event) => {
        if (event.keyCode === 13) {
            const key = 'AIzaSyCuai-IQHou-wl4N6ZrZqP1r8zQNvu2p1E';
            let text = event.target.value;
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${key}`)
                .then(res => res.json())
                .then(data => this.setState({ videos: data.items }))
        }
    }


    render() {
        return (
            <div>
                <Search getData={this.getData} />
                {
                    !this.state.videoId
                        ? <PlayList playVideo={this.playVideo} videos={this.state.videos} />
                        : <VideoPage id={this.state.videoId} />
                }
            </div>
        )
    }

}
export { Main }