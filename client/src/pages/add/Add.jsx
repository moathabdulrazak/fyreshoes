import React, { useReducer, useState } from "react";
import { shoeReducer, INITIAL_STATE } from "../../reducers/shoeReducer.js";
import upload from "../../utils/upload.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";
import './Add.css'
const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(shoeReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };


  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (shoe) => {
      return newRequest.post("/shoes", shoe);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["shoes"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/shoes")
  };

  return (
<div className="add-shoe">
  <div className="add-shoe-container">
    <h1 className="add-shoe-title">Add New Shoe</h1>
    <div className="add-shoe-sections">
      <div className="add-shoe-info">
        <label htmlFor="title" className="add-shoe-label">Title</label>
        <input
          type="text"
          name="title"
          className="add-shoe-input"
          placeholder="Jordan 4's"
          onChange={handleChange}
        />
        <div className="add-shoe-images">
          <div className="add-shoe-images-inputs">
            <label htmlFor="cover-image" className="add-shoe-label">Cover Image</label>
            <input
              type="file"
              name="cover-image"
              className="add-shoe-file-input"
              onChange={(e) => setSingleFile(e.target.files[0])}
            />
            <label htmlFor="upload-images" className="add-shoe-label">Upload Images</label>
            <input
              type="file"
              name="upload-images"
              className="add-shoe-file-input"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>
          <button className="add-shoe-upload-btn" onClick={handleUpload}>
            {uploading ? "uploading" : "Upload"}
          </button>
        </div>
        <label htmlFor="desc" className="add-shoe-label">Description</label>
        <textarea
          name="desc"
          id=""
          className="add-shoe-textarea"
          placeholder="explain yo hype"
          cols="0"
          rows="16"
          onChange={handleChange}
        ></textarea>
     
        <label htmlFor="delivery-time" className="add-shoe-label">Delivery Time (e.g. 3 days)</label>
        <input
          type="number"
          name="delivery-time"
          className="add-shoe-input"
          onChange={handleChange}
        />
        <label htmlFor="price" className="add-shoe-label">Price</label>
        <input
          type="number"
          name="price"
          className="add-shoe-input"
          onChange={handleChange}
        />
           <button className="add-shoe-create-btn" onClick={handleSubmit}>Create</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Add;