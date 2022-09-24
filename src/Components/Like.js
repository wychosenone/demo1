import {useState} from 'react';
import PropTypes from 'prop-types';

function Like(props) {
    // const defaultLiked = false;
    // const defaultLikeCount = 0;
    const [liked, setLiked] = useState(props.liked);
    const [likeCount, setLikeCount] = useState(props.likeCount);

    const getButtonText = () => {
        if (liked) {
            return "Cancel Like"
        } else {
            return "Like it!"
        }
    }

    return (
        <div>
            <button className="likeButton" 
            onClick={()=> {setLiked(!liked);
            setLikeCount(liked? likeCount - 1: likeCount + 1)
            }}>
            <div className="hand">
                <div className="thumb"></div>
            </div>{getButtonText()}
            </button>
            <span>{likeCount}</span>
        </div>
    )


}
Like.propTypes = {
    liked: PropTypes.bool,
    likeCount: PropTypes.number,
}
Like.defaultProps = {
    liked:false,
    likeCount:0,
}
export default Like;



