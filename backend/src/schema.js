const { z } = require("zod");

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string()
})

const signinSchema = z.object({
  username: z.string(),
  password: z.string()
})

const updateSchema = z.object({
  password:  z.string().optional(),
  firstName: z.string().optional(),
  lastName:  z.string().optional()
})

const filterSchema = z.string();

const transferSchema = z.object({
  to: z.string(),
  amount: z.number()
})

module.exports = {
  signupSchema, 
  signinSchema, 
  updateSchema, 
  filterSchema,
  transferSchema
}