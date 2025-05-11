import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styles from "./Upload.module.css";
import Footer from "../components/Footer/Footer";
const Upload = () => {
  // value for content
  const [value, setValue] = useState("");
  return (
    <div className={styles.main_container}>
      <div className={styles.secondary_container}>
        <div className={styles.cta_text}>Create New Post</div>
        <form className={styles.form_container} action="">
          {/* form fields */}
          <div className={styles.fields}>
            <label htmlFor="title">Post Title</label>
            <div>
              <input
                className={styles.input_field}
                id="title"
                type="text"
                placeholder="Enter a descriptive title"
              />
            </div>
          </div>
          <div className={styles.fields}>
            <label htmlFor="image">Cover image url</label>
            <div>
              <input
                className={styles.input_field}
                id="image"
                type="text"
                placeholder="https://example/image.com"
              />
            </div>
          </div>
          {/* textarea */}
          <div className={styles.fields}>
            <label htmlFor="excerpt">Excerpt</label>
            <div>
              <textarea
                rows={4}
                className={styles.textarea_field}
                id="excerpt"
                type="text"
                placeholder="Write a brief summary of your post"
              />
            </div>
          </div>
          <div className={styles.fields}>
            <label htmlFor="category">Category</label>
            <div>
              <select className={styles.select} name="category" id="">
                <option value="design">Design</option>
                <option value="technology">Technology</option>
                <option value="food">Food</option>
                <option value="photography">Photography</option>
                <option value="personal">Personal</option>
              </select>
            </div>
          </div>
          {/* react quill editor */}
          <div className={styles.fields}>
            <label htmlFor="category">Category</label>
            <div>
              <ReactQuill
                className={styles.editor}
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        </form>
        <div className={styles.btn_container}>
          <button className={styles.primary}>Cancel</button>
          <button className={styles.secondary}>Publish Post</button>
        </div>
      </div>
      {/* Footer goes here  */}
    </div>
  );
};

export default Upload;
