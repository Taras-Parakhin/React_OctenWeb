import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZA-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty': '"model" can not be empty',
        'string.pattern.base': 'only chart min 1 max 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base': 'price can be from 1 to 1000000',
        'number.min': 'price must be more than 0',
        'number.max': 'price must be less than 1000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'year can be from 1900 to now'
    }),
    id: Joi.number().allow('').min(1).required().messages({
        'number.base': 'id must be more than 0'
    })
})