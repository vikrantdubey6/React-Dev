import React, {useEffect, useState } from 'react'
import {Container} from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../components/Post-form/PostForm'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])

 return post ? (
    <div className='py-8'>
        <Container>
            <postForm post = {post} />
        </Container>
    </div>
 ) : null
}

export default EditPost