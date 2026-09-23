const GuestBookItem = ({ name, content }) => {
  return (
    <div>
      <strong>{name} </strong> : <span>{content}</span>
    </div>
  );
};
export default GuestBookItem;
