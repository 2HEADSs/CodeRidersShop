import mongoose from 'mongoose';
const { Schema, model, Types: { ObjectId } } = mongoose;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?(\d{1,3})?[-. (]?\d{1,4}[-. )]?\d{1,4}[-. ]?\d{1,9}$/;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                return emailRegex.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
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
        validate: {
            validator: function (value) {
                return value === '' || phoneRegex.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    hashedPassword: { type: String, required: true, select: false },
    // hashedPassword: { type: String, required: true,},
    //TODO
    // bikesForSale: [{ type: ObjectId, ref: '' }],
    // likedBikes: [{ type: ObjectId, ref: '' }],
    // City
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
