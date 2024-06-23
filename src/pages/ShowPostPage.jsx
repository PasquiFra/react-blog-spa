import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const ShowPostPage = () => {

    const { slug } = useParams();

    const [post, setPost] = useState([]);
    const [image, setImage] = useState({});
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        const postEndpoint = `http://127.0.0.1:3000/posts/${slug}`
        try {
            const fetchedPost = (await axios.get(postEndpoint)).data.data
            if (fetchedPost) {
                setPosts(fetchedPost)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const fetchPostImage = async (imageName, slug) => {
        const imagesEndpoint = "http://127.0.0.1:3000/images/";
        try {
            const res = await axios.get(`${imagesEndpoint}${imageName}`, { responseType: 'blob' });
            const image = URL.createObjectURL(res.data)

            // salvataggio di una singola immagine
            setImage(() => ({ [slug]: image }));

        } catch (error) {
            console.error("immagine non trovata")
        }
    }

    useEffect(() => {
        fetchPost()
        fetchPostImage(post.image, post.slug)
    }, [slug])

    return (
        <div>
            <h3>{post.title}</h3>
            <p>
                {post.content}
            </p>
            <div>
                <strong>Categoria:</strong>{post.category.name}
            </div>
            <div>
                <strong>Tags:</strong>
                {
                    post.tags.map((tag, index) => {
                        return (
                            <span
                                key={`tag-${tag.name}-${index}`}
                                className="mx-2">
                                {tag.name}
                            </span>
                        )
                    })
                }
            </div>
            <figure>
                <img src={image[post.slug]} alt={`foto-post-${post.index}`} />
            </figure>
        </div>
    )
}

export default ShowPostPage