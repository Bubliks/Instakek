import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import * as Icon from 'react-bootstrap-icons';

const RenderCard = () => {
    const [like, setLike] = React.useState(false); // todo в зависимости от результата сервера
    const [likeCount, setLikeCount] = React.useState(0); // todo в зависимости от результата сервера
    const [commentCount, setCommentCount] = React.useState(0); // todo в зависимости от результата сервера

    const onClick = () => {
        let countLike = likeCount;

        if (like) {
            setLike(false);
            setLikeCount(countLike - 1);
        } else {
            setLike(true);
            setLikeCount(countLike + 1);
        }
    }

    return (
        <Card
            style={{ width: '18rem' }}
            bg='dark'>
            <div className='img-wrapper'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png" />

            </div>
            <Card.Body className='title-pub'>
                <span className='like-wrapper'>
                    {
                        !like ? <Icon.Heart onClick={onClick} size={24} className='like'/> :
                            <Icon.HeartFill onClick={onClick} size={24} className='like'/>
                    }
                    <p className='count-like'>{likeCount}</p>
                    <Icon.Chat className='pencil-icon' size={24} data-tooltip='Comment' />
                    <p className='count-like'>{commentCount}</p>
                </span>
                <Card.Text className='title'>
                    Мудрая подпись от инстасамки
                </Card.Text>
            </Card.Body>
            <Card.Text className='pub-data'>
                <small className="text-muted">10 октября 2020 г.</small>
            </Card.Text>

        </Card>
    );
};

const List = () => {
    const a = [1, 1, 1];

    return (
        <div>
            {a.map(item => (RenderCard()))}
        </div>
    );
};

export default List;
