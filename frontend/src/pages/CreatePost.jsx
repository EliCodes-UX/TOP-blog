import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }][
      ('link', 'image')
    ],
    ['clean'],
  ],
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  function createNewPost(ev){
    ev.preventDefault();
    fetch('http://localhost:4000/post')
  }

  return (
    <form onSubmit={}>
      <input
        type='title'
        placeholder={'title'}
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type='summary'
        placeholder={'summary'}
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <input type='file'></input>
      <ReactQuill
        value={content}
        onChange={newValue => setContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <button style={{ marginTop: '5px' }}>create post</button>
    </form>
  );
}
