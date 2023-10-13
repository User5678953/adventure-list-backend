const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = 'placeholder'


router.get('/', (req,res) => {
    res.send('This is the registration page')
})

router.get('/login', (req,res) => {
    res.send('This is the login page')
})

router.post('/', async (req,res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const newUser = await User.create(req.body)
        req.session.currentUser = newUser
        const sessionUser = req.session.currentUser.username
        req.session.username = sessionUser
        res.send("You have succesfully created an account")
    } catch (err) {
        console.log(err)
        res.send("Username in use, try another")
    }
})

router.post('/login', async (req,res) => {
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(foundUser) {
            const isAMAtch = bcrypt.compareSync(req.body.password, foundUser.password)
            if(isAMAtch) {
                console.log('login succesful')
                req.session.username = foundUser
                res.send('you are logged in')
            } else {
                res.send('Try logging in again')
            }
        } else {
            res.send('Username or password does not match')
        }
    } catch (err) {
        console.log(err)
        res.send('Username or password does not match')
    }
} )

router.delete('/logout', (req,res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err, " logout failed")
            res.status(500).res.send('Logout failed, please try again')
        } else {
            console.log('Succesfully logged out')
            res.send('back to homepage')
        }
    })
})

module.exports = router