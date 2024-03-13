import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Input, TextField } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

const MessageInput = ({ onAddMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [existingPost, setExistingPost] = useState(null);
  const [editPostId, setEditPostId] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getAllposts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/posts")

      if (res.status == 200) {
        setExistingPost(res?.data)
      }

      setLoading(false)

    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (e, value) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.delete(`http://localhost:8080/api/posts/${value}`)

      console.log(res)
      if (res.status == 200) {
        setDisplay(res.data)
      }

      setLoading(false)

    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  };

  const handleUpdate = (update) => {
    setEditPostId(update?._id)
    setInputValue(update?.stories)
    setLoading(true)
    // setImage(update?.image)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const formData = new FormData();
    console.log(inputValue, image)
    formData.append('stories', inputValue);
    console.log(image)
    formData.append('image', image)
    console.log(formData)
    setLoading(true)

    try {
      const res = editPostId ?
        await axios.put(`http://localhost:8080/api/posts/${editPostId}`, formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }) :
        await axios.post("http://localhost:8080/api/posts/create", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          })
          console.log("here")
      if (res.status == 200) {
        setEditPostId(null)
        setInputValue("")
        setImage(null)
        setDisplay(res.data)
        getAllposts()
      }

    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllposts()
  }, [loading])


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="message-input">
        <TextField
          label="inputValue"
          value={inputValue}
          onChange={handleInputChange}
          variant='outlined'
          fullWidth
          sx={{ minHeight: 130 }}
        />
        <section className="container">
          <div {...getRootProps()} style={{ border: '1px solid #000', padding: 20, marginTop: 20 }}>
            <Input {...getInputProps()} style={{ color: '#000' }} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{image?.path} - {image?.size}</ul>
          </aside>
        </section>

        <Button variant='contained' color='primary' style={{ marginTop: 20 }} onClick={handleSubmit}>
          Submit
        </Button>

      </form>

      <div>
        {
          loading ? <p>Loading...</p> :
            <div>
              {
                existingPost?.data?.map((value) => (
                  <div style={{ marginTop: 100, color: 'black' }} key={value?._id}>
                    <Button variant='contained' color='primary' style={{ marginTop: 20 }} 
                    onClick={(e) => handleUpdate(value)}> edit </Button>
                    <div> {value.stories}</div>
                    <img src={`http://localhost:8080/${value?.image}`}
                      alt="Post Image"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <Button variant='contained' color='primary' style={{ marginTop: 20 }} 
                    onClick={(e) => handleDelete(e, value?._id)}> Delete </Button>
                  </div>

                )
                )
              }
            </div>
        }
      </div>
    </div>
  );
};

export default MessageInput;



