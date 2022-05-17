import { useAnimationFrame } from "framer-motion";
import axios from "axios";
import { Token } from "../contexts/useToken";

type userProp = {
    username: string;
    password: string;
}
export class UserService {

    public async getAllUsers(): Promise<any> {
        const response = await fetch('/api/users');
        return await response.json();
    }

    public async authUser(token: string) {
      try {
      
        const bodyParameters = {
          key: "value"
       } 

       const config = {
         method: "post",
         url: 'http://localhost:3080/api/auth-user',
         headers: { Authorization: token},
         data: bodyParameters
       }

       const res = await axios(config);
       console.log(res.data);

       return res.data.success;
      } catch (error) {
        console.log("Error with authenticating user due to:: " + error);
        return false;
      }
    }

    public async createUser(user: userProp): Promise<any> {
        
            try {
                const data = JSON.stringify({
                    "user": {
                      "username": user.username,
                      "password": user.password,
                    }
                  });

                const config = {
                    method: 'post',
                    url: 'http://localhost:3080/api/register/create-user',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };

                  const ret = await axios(config);
                  return ret.data.token;
            } catch (error) {
                console.log("Error with create-user request: " + error);
            }
    }

    public async signIn(user: userProp): Promise<any> {

        try {
            const data = JSON.stringify({
                "user": {
                  "username": user.username,
                  "password": user.password,
                }
              });

            const config = {
                method: 'post',
                url: 'http://localhost:3080/api/login/signin',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };

              const ret = await axios(config);
              return ret.data.token;
        } catch (error) {
            console.log("Error with login request: " + error);
        }
    }

    /*
    public async deleteTask(taskId: number): Promise<any> {
        const response = await fetch(`/api/task/${taskId}`, {method: 'DELETE'})
        return await response.json();
    }

    public async editTask(data: any): Promise<any> {
        const response = await fetch(`/api/task`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: data})
        })
        return await response.json();
    }
    */
}