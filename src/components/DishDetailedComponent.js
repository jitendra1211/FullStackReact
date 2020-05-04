import React from 'react';
import { Card, CardImg,CardBody,CardText,CardTitle,} from 'reactstrap';
// import {ListGroup,ListGroupItem,ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
    
    function RenderDish(dish){
        if(dish!=null)
    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
            {RenderComments(dish.comments)}
    
        </div>
        
    );
    else
    return(
        <div></div>
    );

    }
    
    function RenderComments(comments){
            const commentlist=comments.map((comment)=>{
                // console.log(comment.id);
                var options = { year: 'numeric', month: 'short', day: 'numeric' };
                var date=new Date(Date.parse(comment.date));
                console.log();

                return(
                    <li key={comment.id.toString()}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', options).format(date)}</p>
                    </li>
                )
            });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentlist}
                </ul>
            </div>
                
        );
    }

const DishDetailed =(props)=>{
    const dish=props.selectedDish;
    return (
        <div className="container">
        {RenderDish(dish)}
        </div>
    );
    
}
export default DishDetailed;