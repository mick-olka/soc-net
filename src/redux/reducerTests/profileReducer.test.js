import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {addPostCreator, deletePostCreator} from '../profileReducer';

let state = {
    posts: [
        { id: 0, author: "Mick", likes: 0, message: "IT''\"S MY FIRST POST!!!!" },
        {
            id: 2,
            author: "Mick",
            likes: 2,
            message: "SOME post post post post post",
        },
        { id: 4, author: "Mick", likes: 12, message: "i am the lord of time" },
        {
            id: 6,
            author: "Mick",
            likes: 1234,
            message: "i like lorem ipsum )))))))))))00))))",
        },
        {
            id: 8,
            author: "Mick",
            likes: 333,
            message: "My name is 21931-08391038321",
        },
        { id: 10, author: "Mick", likes: 0, message: "Say abrakadabra" },
        {
            id: 12,
            author: "Mick",
            likes: 343,
            message: "QWETRYFGHSBH guwdiqhdq ghduwqigdhqi y6739gheiq guqi",
        },
        {
            id: 14,
            author: "Mick",
            likes: 51,
            message: "POOOOOOOOOOOOOOooooooooOOOOOOOOOOst",
        },
        { id: 16, author: "Mick", likes: 51, message: "Leet mtttttt ouy;" },
    ],
};


it('post length must increment', () => {
    //  1. TEST DATA
    let action = addPostCreator("new test post");

    //  2. ACTION
    let newState = profileReducer(state, action);

    //  3. EXPECTATION
    expect(newState.posts.length).toBe(10);
});

it('message should be identical', () => {
    let message = "my new post"
    //  1. TEST DATA
    let action = addPostCreator(message);

    //  2. ACTION
    let newState = profileReducer(state, action);

    //  3. EXPECTATION
    expect(newState.posts[9].message).toBe(message);
});

it('check decrement after deleting', () => {
    //  1. TEST DATA
    let action = deletePostCreator(0);

    //  2. ACTION
    let newState = profileReducer(state, action);

    //  3. EXPECTATION
    expect(newState.posts.length).toBe(8);
});

it('check length after deleting not existing post id', () => {
    //  1. TEST DATA
    let action = deletePostCreator(429);

    //  2. ACTION
    let newState = profileReducer(state, action);

    //  3. EXPECTATION
    expect(newState.posts.length).toBe(9);
});