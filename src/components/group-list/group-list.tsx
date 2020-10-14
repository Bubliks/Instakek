import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import * as Icon from 'react-bootstrap-icons';
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

let commentsOrigin = [
    {
        title: 'Комментарий 1',
        avatar: 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png',
    },
    {
        title: 'Комментарий 2',
        avatar: 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png',
    },
    {
        title: 'Комментарий 3',
        avatar: 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png',
    }
]

const RenderCard = (index: any) => {
    const [like, setLike] = React.useState(false); // todo в зависимости от результата сервера
    const [likeCount, setLikeCount] = React.useState(0); // todo в зависимости от результата сервера
    const [commentCount, setCommentCount] = React.useState(0); // todo в зависимости от результата сервера
    const [commentVisible, setCommentVisible] = React.useState(false);

    const [comment, setComment] = React.useState('');

    const comments = commentsOrigin;

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

    const changeVisibleComment = () => {
        if (commentVisible) {
            setCommentVisible(false);
        } else {
            setCommentVisible(true);
        }
    }

    const sentComment = () => {
        if (comment) {
            comments.push(
                {
                    avatar: 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png',
                    title: comment,
                }
            )

            setCommentCount(commentCount + 1);
        }

        console.log(comments);
    }

    const onInputChange = (event: any) => {
        setComment(event.target.value)
    }

    useEffect(() => {
        setCommentCount(comments.length)
    }, [comments.length])

    return (
        <Card
            style={{ width: '18rem' }}
            bg='dark'
            key={index}
        >
            <div className='img-wrapper'>
                <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png"
                />
            </div>
            <Card.Body className='title-pub'>
                <span className='like-wrapper'>
                    {
                        !like ? <Icon.Heart onClick={onClick} size={24} className='like'/> :
                            <Icon.HeartFill onClick={onClick} size={24} className='like'/>
                    }
                    <p className='count-like'>{likeCount}</p>
                    <Icon.Chat onClick={changeVisibleComment} className='pencil-icon' size={24} data-tooltip='Comment' />
                    <p className='count-like'>{commentCount}</p>
                </span>
                <Card.Text className='title'>
                    Мудрая подпись от инстасамки
                </Card.Text>
            </Card.Body>
            <Card.Text className='pub-data'>
                <small className="text-muted">10 октября 2020 г.</small>
            </Card.Text>
            {commentVisible && (
                <div>
                    <small className="title-comments text-muted">Comments</small>
                    <hr/>

                    <div className='commenting-input'>
                        <InputGroup className="mb-4">
                            <FormControl
                                placeholder="comment..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={onInputChange}
                                className='input-comment'
                            />
                        </InputGroup>
                        <Icon.CheckCircle className='1' size={29} onClick={sentComment} />
                    </div>


                    {comments.map(item => (
                        <div className='comment-wrapper'>
                            <div className='comment-avatar'>
                                <Image height='40px' width='40px' src={item.avatar} rounded />
                            </div>
                            <div className='comment-text'>
                                <Card.Text className='title'>
                                    {item.title}
                                </Card.Text>
                            </div>
                        </div>
                        )
                    )}
                </div>
            )
            }
        </Card>
    );
};

const List = () => {
    const a = [1, 1, 1];

    return (
        <div>
            {a.map((item, index) => (RenderCard(index)))}
        </div>
    );
};

export default List;
