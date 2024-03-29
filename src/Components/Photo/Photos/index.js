import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../api";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../PhotoContent";

export const Photo = () => {
  const { id } = useParams();
  console.log(id);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};
