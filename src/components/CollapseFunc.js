import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia, Container, CssBaseline, styled } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import './features.css';




const CollapseFunc =(props)=>{
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
        })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        }));
        const [expanded, setExpanded] = React.useState(false);
    
        const handleExpandClick = () => {
        setExpanded(!expanded);
        };

        
    return (
        <Grid item xs={12} md={6}>
          <Typography component='h4' gutterBottom variant='h4' className='title' padding={2}>
            {props.title}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography component='h5' gutterBottom variant='h5'>
              {props.content}
            </Typography>
            {props.image.map((photo,index)=>{
              return <img  className='gallery' key={index} src={photo}/>                 
            })}

          </Collapse>
        </Grid>
    )
}

export default CollapseFunc