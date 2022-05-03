const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label htmlFor="nome">Author</label>
        <input type="text" name="nome" />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="text">Text</label>
        <textarea name="text" id="text" cols="30" rows="5" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Create;
