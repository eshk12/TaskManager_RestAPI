const moongose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new moongose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Test User',
    email: 'Test@example.com',
    password: '123456789',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_TOKEN)
    }]
}

const userTwoId = new moongose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Test User2',
    email: 'Test2@example.com',
    password: '12345678910',
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_TOKEN)
    }]
}

const taskOne = {
    _id: new moongose.Types.ObjectId(),
    description: 'First Test',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new moongose.Types.ObjectId(),
    description: 'Second Test',
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: new moongose.Types.ObjectId(),
    description: 'Third Test',
    completed: true,
    owner: userTwo._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase,
    taskOne,
    taskTwo,
    taskThree
}