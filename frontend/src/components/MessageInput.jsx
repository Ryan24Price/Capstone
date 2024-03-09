// MessageInput.js
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import { set } from 'mongoose';

const MessageInput = ({ onAddMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [existingPost, setExistingPost] = useState(null);
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (!inputValue.trim()) return;
    // onAddMessage(inputValue);
    // setInputValue('');
    try {
      const res = await axios.post("http://localhost:8080/api/posts/create ",
        {
          stories: inputValue
        })

      if (res.status == 200) {
        setDisplay(res.data)
      }

      setLoading(false)

    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {

    async function getAllposts(){
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

  getAllposts()

  }, [])


  return (
    <div>
      <form onSubmit={handleSubmit} className="message-input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <div>
        {
          loading ?
            <>Loading...</> :
            <div style={{ marginTop: 40, }}>
              {console.log(display)}
              {display?.data?.stories}
            </div>
        }
      </div>

      <div>
        {
          loading ? <>Loading...</> :
            <div>
              {console.log(existingPost)}
              {
                existingPost?.data?.map((value) =>(
                  <div> {value.stories}</div>
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
