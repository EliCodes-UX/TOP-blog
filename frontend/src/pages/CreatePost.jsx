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
  const [files, setFile] = useState('');

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
    });
  }

  return (
    <form onSubmit={createNewPost}>
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
      <input
        type='file'
        value={files}
        onChange={ev => setFile(ev.target.file)}
      />
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
