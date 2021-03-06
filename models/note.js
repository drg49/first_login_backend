const {Schema, model} = require("mongoose")

const noteSchema = new Schema({
    username: {type: String, required: true},
    note: String
}, {timestamps: true})

const Note = model("Note", noteSchema)

module.exports = Note