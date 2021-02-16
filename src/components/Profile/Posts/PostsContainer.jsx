import { connect } from "react-redux";
import { addPost} from "../../../redux/reducers/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {addPost})(Posts);