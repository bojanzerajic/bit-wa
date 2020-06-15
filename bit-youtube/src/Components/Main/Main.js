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

    playVideo = (id) => {
        this.setState({ videoId: id, videos: [] });
    }

    getData = (event) => {
        if (event.keyCode === 13) {
            const key = 'AIzaSyA9m33SXEPnSnmI8j-1h0LL1TdCn5P1Wqg';
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
                        : <VideoPage id={this.state.videoId} getId={this.playVideo} />
                }
            </div>
        )
    }

}
export { Main }