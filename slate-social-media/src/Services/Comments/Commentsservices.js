import axios from "axios";
import { toast } from "../../Utils/SystemUtils";

export async function postCommentFn(commentsDispatch, _id, comment) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/comments/add/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { commentData: comment },
    }).then((response) =>
      commentsDispatch({
        type: "COMPOSE_COMMENT",
        payload: response.data.comments,
      })
    );
    toast.success("Comment successfully created");
    commentsDispatch({ type: "COMMENT_BOX_INPUT", payload: "" });
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function upvoteCommentFn(commentsDispatch, postId, commentId) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/comments/upvote/${postId}/${commentId}`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      commentsDispatch({
        type: "COMPOSE_COMMENT",
        payload: response.data.comments,
      })
    );
    toast.success("Comment successfully upvoted");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function downvoteCommentFn(commentsDispatch, postId, commentId) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/comments/downvote/${postId}/${commentId}`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      commentsDispatch({
        type: "COMPOSE_COMMENT",
        payload: response.data.comments,
      })
    );
    toast.success("Comment successfully downvoted");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function getCommentsbyPostId(commentsDispatch, _id) {
  try {
    const response = await axios({
      method: "get",
      url: `/api/comments/${_id}`,
    }).then((response) =>
      commentsDispatch({
        type: "COMMENTS",
        payload: response.data.comments,
      })
    );
    toast.success("Comments successfully fetched");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
