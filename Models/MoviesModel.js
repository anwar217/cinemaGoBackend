import mongoose from 'mongoose'


const MovieSchema = mongoose.Schema({

    title:{
        type: String
    },
    
    description:{
        type: String
    },

    country:{
        type: String
    },

    cinema:{
        type: String
    },

    categorie:{
        type: String
    },

    age:{
        type: Number
    },

    type:{
        type: String
    },

    date:{
        type: Date
    },

    timestart:{
        type: String
    },

    timeend:{
        type: String
    },

    image:{
        type: String
    },

    video:{
        type: String
    },

    createdAt:{
        type: Date
    },

    updatedAt:{
        type: Date
    },
},
{
    timestamps: true,
});

export default mongoose.model('Movie', MovieSchema);