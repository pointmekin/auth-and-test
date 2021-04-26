import {admin} from "./firebase-service"
import * as Express from 'express'
// admin.auth().verifyIdToken()

interface IRequest extends Express.Request {
  [key: string]: any
}

const getAuthToken = (req: IRequest, _: any, next: any) => {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    req.authToken = req.headers.authorization.split(" ")[1]
  } else {
    req.authToken = null;
  }
  next();
}

export const checkIfAuthenticated = async (req: IRequest, res: Express.Response, next: any) => {
  getAuthToken(req, res, async () => {
    console.log("req", req)
    try {
      
      const {authToken} = req
      const userInfo = await admin.auth().verifyIdToken(authToken)
      req.authId = userInfo.uid
      return next()
    } catch (error) {
      return res.status(401).send({error: "You are not authorized"})
    }
  })
}
