import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    Paper,
    Box,
    Container
} from "@mui/material";
import * as React from 'react';
import { Link } from "remix";
import FeaturedPost from "./components/FeaturedPost";

export default function Blog() {
    const featuredPosts = [
        {
            id: 1,
            title: "First blog post",
            description: "very long First post subtitles that have no further meaning other than to test how the text will be shown on the page",
            slug: "first-blog-post",
            date: "June 1st, 2022"
        },
        {
            id: 2,
            title: "Second blog post",
            description: "Second blog subtitles",
            slug: "second-blog-post",
            date: "June 2nd, 2022"
        },
        {
        id: 3,
        title: "Third blog post",
        description: "Third post subtitles",
        slug: "third-blog-post",
        date: "June 3rd, 2022"
        }
    ]

    const postTitle = ['first post', 'second post', 'third post'];
    return (
        <Container>
            <Typography variant="h4" component="h1">
                My Blog    
            </Typography>
            <main>
                <Grid container spacing={2}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.id} post={post}/>
                ))} 
                </Grid>
            </main>
        </Container>
    )
}