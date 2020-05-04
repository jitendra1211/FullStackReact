import React from 'react';
import { Card, CardImg,CardBody,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
// import {ListGroup,ListGroupItem,ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import { Link } from 'react-router-dom';
    function RenderDish({dish}){
        
    return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
    );
    }
    function RenderComments({comments}){
            // const comments=dish.comments;
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

const DishDetailed = (props) =>{
   if(props.dish!=null){
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>    
            </div>
            <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments comments={props.comments}/>
            </div>    
        </div>
    );}
    else 
        return(
            <div></div>
        );
    
}


export default DishDetailed;