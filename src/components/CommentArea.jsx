import ListGroup from "react-bootstrap/ListGroup";

const CommentArea = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment, index) => (
        <ListGroup.Item key={index}>{comment.comment}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentArea;
