import { 
    Grid,
    Card,
    CardActionArea,
    CardContent, 
    Typography
} from "@mui/material";
import {Link } from "remix";

interface FeaturedPostProps {
    post: {
        id: number;
        title: string;
        description: string;
        slug: string;
        date: string;
    }
}
export default function FeaturedPost(props: FeaturedPostProps) {
    const { post } = props;

        return (
            <Grid item xs={12} md={6}>
                <CardActionArea component={Link} to={post.slug}>
                    <Card sx={{display: 'flex '}}>
                        <CardContent sx={{flex: 1}}>
                            <Typography component="h5" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue Reading...
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        )    
}