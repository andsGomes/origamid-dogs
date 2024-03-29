import React from "react";

import useFetch  from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../api";

import styles from "./PhotoCommentsFrom.module.css";

import { ReactComponent as Enviar } from '../../../Assets/enviar.svg';
import { Error } from "../../Helper/Error";


export const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} =  COMMENT_POST(id, {comment});
    const { response, json } = await request(url, options);
    if(response.ok) {
      setComment('');
      setComments((comments)=>[...comments, json]);
    }
  }
   

  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
        <textarea className={styles.textarea}
          name="comment"
          id="comment"
          placeholder="commente"
          value={ comment }
          onChange={({ target }) => setComment(target.value)}
        ></textarea>
        <button className={styles.button}>
          <Enviar />
        </button>
        <Error error={error} />
      </form>
    </>
  );
};
