import mongoose from 'mongoose';
const { Schema, model, Types: { ObjectId } } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
        maxlength: [15, 'First name must be maximum 15 characters long!'],
        default: '',
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: [15, 'Last name must be maximum 15 characters long!'],
        default: '',
    },
    phone: {
        type: String,
        trim: true,
        default: '',
        //TODO: validate phone number
    },
    hashedPassword: { type: String, required: true, select: false },
    //TODO
    // bikesForSale: [{ type: ObjectId, ref: '' }],
    // likedBikes: [{ type: ObjectId, ref: '' }],
    // isActive
});

userSchema.index(
    { email: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);
export default User;
