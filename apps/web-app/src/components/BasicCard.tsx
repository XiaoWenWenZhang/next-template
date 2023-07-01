import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/BasicCard.scss";

interface BasicCardProps {
    title: string;
    buttonAction: string;
}

export default function BasicCard({title, buttonAction, content}: BasicCardProps) {
    return (
        <Card sx={{maxWidth: "460px", width: "460px"}} className="card-colum">
            <Card sx={{padding: "30px", backgroundColor: "rgba(1, 30, 65, .92)"}}>
                <CardContent className="card-content">
                    <Typography variant="h4" fontWeight="600" color="#fff" noWrap={false}>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="div" color="#dfe7ea" sx={{marginTop: "10px"}}>
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" sx={{color: "#000", backgroundColor: "#fff"}}
                            fullWidth>{buttonAction}</Button>
                </CardActions>
            </Card>
        </Card>
    );
}
